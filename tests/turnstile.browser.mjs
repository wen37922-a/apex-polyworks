// Run against a local production server. PLAYWRIGHT_MODULE may point to an
// externally installed playwright/index.mjs; no project dependency is required.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE
  ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3121';
assert.ok(['localhost', '127.0.0.1'].includes(new URL(base).hostname), 'Local testing only');

async function fixture(t, mode = 'normal') {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  t.after(() => browser.close());
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.setDefaultTimeout(10000);
  if (mode === 'delayed') {
    await page.clock.install({ time: new Date('2026-01-01T00:00:00Z') });
    await page.clock.pauseAt(new Date('2026-01-01T00:00:01Z'));
  }
  // Block external traffic; only the explicitly mocked Cloudflare route below
  // overrides this rule. RFQ requests are always aborted or locally fulfilled.
  await page.route('**/*', route => new URL(route.request().url()).origin === new URL(base).origin
    ? route.continue() : route.abort());
  // The local build has no configured key. Supply a dummy key only in the
  // intercepted browser response, never in files or deployment configuration.
  await page.route('**/_next/static/chunks/*.js', async route => {
    const response = await route.fetch();
    const body = (await response.text()).replace(/\b[\w$]+\.env\.NEXT_PUBLIC_TURNSTILE_SITE_KEY/g, '"local-mock-site-key"');
    await route.fulfill({ response, body });
  });
  let submissions = 0;
  await page.route('**/api/**', route => {
    submissions++;
    if (mode === 'reset' && new URL(route.request().url()).pathname === '/api/request-quote') {
      return route.fulfill({ status: 503, contentType: 'application/json', body: '{"error":"Local simulated failure"}' });
    }
    return route.abort();
  });
  t.after(() => assert.equal(submissions, mode === 'reset' ? 1 : 0, 'Only the explicit locally mocked request is permitted'));
  let releaseScript;
  const scriptGate = new Promise(resolve => { releaseScript = resolve; });
  await page.route('https://challenges.cloudflare.com/**', async route => {
    if (mode === 'delayed') await scriptGate;
    return mode === 'slow'
    ? route.fulfill({ contentType: 'application/javascript', body: '' }) : mode === 'load-fail'
    ? route.abort() : route.fulfill({ contentType: 'application/javascript', body: `
      window.calls = []; window.removed = []; window.live = new Set(); window.throwRender = ${mode === 'render-fail'};
      window.turnstile = {
        render(el, options) {
          window.calls.push(options);
          if (window.throwRender) throw new Error('simulated render failure');
          const id = String(window.calls.length);
          window.live.add(id);
          el.innerHTML = '<div data-mock-widget="' + id + '" style="width:100%;min-width:300px;height:65px">Mock verification</div>';
          return id;
        },
        remove(id) { window.removed.push(id); if (window.throwRemove) throw new Error('simulated cleanup failure'); window.live.delete(id); }, reset() {}
      };` });
  });
  await page.goto(base + '/request-a-quote', { waitUntil: 'domcontentloaded' });
  const widget = page.getByLabel('Bot verification', { exact: true });
  await widget.waitFor();
  const submit = page.locator('button[type="submit"]');
  const status = widget.getByRole('status');
  const call = async (event, token = '') => page.evaluate(({ event, token }) => {
    window.calls.at(-1)[event](token);
  }, { event, token });
  return { page, widget, submit, status, call, releaseScript };
}
async function text(locator, expected) {
  await locator.filter({ hasText: expected }).waitFor();
}

for (const width of [360, 390, 430, 1280]) {
  test(`${width}px floating actions hide around RFQ on mobile and restore outside`, async t => {
    const { page, widget, status, submit, call } = await fixture(t);
    await page.setViewportSize({ width, height: 844 });
    await text(status, 'Please complete');
    const floating = page.locator('[data-rfq-cta-location="floating_rfq"]');
    const whatsapp = page.locator('[data-whatsapp-location="floating_whatsapp"]');
    await page.evaluate(() => window.scrollTo(0, 0));
    await floating.waitFor({ state: 'visible' });
    await call('expired-callback');
    const targets = [
      ['quantity', page.locator('[name="quantity"]')],
      ['drawing', page.locator('label').filter({ has: page.locator('input[name="drawing"]') })],
      ['turnstile', page.locator('[data-mock-widget]')],
      ['retry', widget.getByRole('button')],
      ['send', submit]
    ];
    for (const [name, target] of targets) {
      await target.evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await floating.waitFor({ state: width < 640 ? 'hidden' : 'visible' });
      assert.equal(await whatsapp.isVisible(), width >= 640);
      assert.equal(await page.evaluate(() => innerWidth), width);
      // Check the target AND every currently visible part of the other controls;
      // this catches the previous floating CTA overlap near the viewport bottom.
      for (const [controlName, control] of targets) {
        const result = await control.evaluate(el => {
          const r = el.getBoundingClientRect();
          const headerBottom = document.querySelector('header').getBoundingClientRect().bottom;
          const top = Math.max(r.top, headerBottom + 1);
          const bottom = Math.min(r.bottom, innerHeight - 1);
          if (bottom <= top) return true;
          return [.1, .5, .9].every(x => [.1, .5, .9].every(y => {
            const hit = document.elementFromPoint(r.left + r.width*x, top + (bottom-top)*y);
            return hit === el || el.contains(hit);
          }));
        });
        if (width < 640 || controlName === name) {
          assert.ok(result, `${width}px at ${name}: ${controlName} is occluded`);
        } else if (!result) {
          t.diagnostic(`Existing desktop floating behavior: ${controlName} partially occluded while centered on ${name}`);
        }
      }
      if (process.env.TEST_SCREENSHOT) await page.screenshot({
        path: process.env.TEST_SCREENSHOT.replace(/\.png$/, `-${width}-${name}.png`), fullPage: false
      });
    }
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await floating.waitFor({ state: 'visible' });
    assert.equal(await whatsapp.isVisible(), true);
    // Verify resize changes behavior while the same form remains on screen.
    await submit.evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.setViewportSize({ width: 390, height: 844 });
    await floating.waitFor({ state: 'hidden' });
    await page.setViewportSize({ width: 1280, height: 844 });
    await floating.waitFor({ state: 'visible' });
  });
}

test('success, empty token, error and expiry keep submit gating correct', async t => {
  const { page, submit, status, call } = await fixture(t);
  await text(status, 'Please complete');
  assert.equal(await submit.isDisabled(), true);
  await call('callback', 'mock-token');
  await text(status, 'Verification complete');
  assert.equal(await submit.isEnabled(), true);
  await call('callback', '');
  await text(status, 'could not load');
  assert.equal(await submit.isDisabled(), true);
  await call('callback', 'mock-token');
  await call('expired-callback');
  await text(status, 'expired');
  assert.equal(await submit.isDisabled(), true);
  await call('callback', 'mock-token');
  await call('error-callback');
  await text(status, 'could not load');
  assert.equal(await submit.isDisabled(), true);
  assert.equal(await page.evaluate(() => window.calls.length), 1);
});

test('manual retry retains fields/files, rejects stale callbacks and avoids duplicate render', async t => {
  const { page, widget, status, submit, call } = await fixture(t);
  await text(status, 'Please complete');
  await page.locator('[name="name"]').fill('Local verification');
  await page.locator('[name="projectDescription"]').fill('Preserve this text');
  await page.locator('input[type="file"]').setInputFiles({ name: 'test.pdf', mimeType: 'application/pdf', buffer: Buffer.from('local fixture') });
  await call('expired-callback');
  await widget.getByRole('button', { name: 'Verify again', exact: true }).click();
  await text(status, 'Please complete');
  assert.equal(await page.evaluate(() => window.calls.length), 2);
  assert.deepEqual(await page.evaluate(() => window.removed), ['1']);
  await page.evaluate(() => { window.calls[0].callback('stale'); window.calls[0]['error-callback'](); window.calls[0]['expired-callback'](); });
  await text(status, 'Please complete');
  assert.equal(await submit.isDisabled(), true);
  assert.equal(await page.locator('[name="name"]').inputValue(), 'Local verification');
  assert.equal(await page.locator('[name="projectDescription"]').inputValue(), 'Preserve this text');
  assert.equal(await page.locator('input[type="file"]').evaluate(el => el.files[0].name), 'test.pdf');
  await call('callback', 'fresh');
  await text(status, 'Verification complete');
  assert.equal(await submit.isEnabled(), true);
  assert.equal(await page.evaluate(() => window.calls.length), 2);
  assert.equal(await page.evaluate(() => window.live.size), 1);
  assert.equal(await page.locator('[data-mock-widget]').count(), 1);
});

test('15 second timeout stays locked; late script recovers once without losing text', async t => {
  const { page, status, submit, releaseScript, call } = await fixture(t, 'delayed');
  await text(status, 'Loading verification');
  await page.locator('[name="name"]').fill('Retained during timeout');
  await page.clock.runFor(14999);
  await text(status, 'Loading verification');
  await page.clock.runFor(1);
  await text(status, 'could not load');
  assert.equal(await submit.isDisabled(), true);
  releaseScript();
  await text(status, 'Please complete');
  assert.equal(await page.evaluate(() => window.calls.length), 1);
  assert.equal(await page.locator('[name="name"]').inputValue(), 'Retained during timeout');
  await call('callback', 'late-valid');
  await text(status, 'Verification complete');
  await page.clock.runFor(30000);
  assert.equal(await submit.isEnabled(), true);
  assert.equal(await page.evaluate(() => window.calls.length), 1);
});

test('client navigation unmounts widget and ignores its old callbacks', async t => {
  const { page, status } = await fixture(t);
  await text(status, 'Please complete');
  await page.setViewportSize({ width: 1280, height: 844 });
  await page.locator('a[href="/about"]:visible').first().click();
  await page.waitForURL('**/about');
  await page.waitForFunction(() => window.removed?.length === 1);
  assert.equal(await page.evaluate(() => window.live.size), 0);
  await page.evaluate(() => { window.calls[0].callback('stale'); window.calls[0]['error-callback'](); window.calls[0]['expired-callback'](); });
  assert.equal(await page.getByLabel('Bot verification', { exact: true }).count(), 0);
  await page.goto(base + '/request-a-quote');
  await text(page.getByRole('status'), 'Please complete');
  assert.equal(await page.locator('button[type="submit"]').isDisabled(), true);
});

test('locally simulated API failure changes resetSignal and replaces the instance', async t => {
  const { page, status, submit, call } = await fixture(t, 'reset');
  await text(status, 'Please complete');
  await page.locator('[name="name"]').fill('Local test');
  await page.locator('[name="email"]').fill('local@example.invalid');
  await page.locator('[name="material"]').fill('PEEK');
  await call('callback', 'local-only-token');
  await text(status, 'Verification complete');
  await submit.click();
  await page.waitForFunction(() => window.calls.length === 2);
  await text(status, 'Please complete');
  assert.equal(await submit.isDisabled(), true);
  assert.deepEqual(await page.evaluate(() => [...window.live]), ['2']);
  await page.evaluate(() => window.calls[0].callback('stale'));
  assert.equal(await submit.isDisabled(), true);
  assert.equal(await page.locator('[name="name"]').inputValue(), 'Local test');
});

test('remove exception clears old DOM and token and isolates old callbacks', async t => {
  const { page, status, widget, submit, call } = await fixture(t);
  await text(status, 'Please complete');
  await call('callback', 'old-token');
  await call('expired-callback');
  await page.evaluate(() => { window.throwRemove = true; });
  await widget.getByRole('button', { name: 'Verify again', exact: true }).click();
  await text(status, 'Please complete');
  assert.deepEqual(await page.evaluate(() => window.removed), ['1']);
  assert.equal(await page.locator('[data-mock-widget]').count(), 1);
  assert.equal(await page.locator('[data-mock-widget]').getAttribute('data-mock-widget'), '2');
  await page.evaluate(() => { window.calls[0].callback('stale'); window.calls[0]['error-callback'](); });
  assert.equal(await submit.isDisabled(), true);
  await call('callback', 'fresh');
  await text(status, 'Verification complete');
  assert.equal(await submit.isEnabled(), true);
});

test('390px viewport: centered controls and sticky header pass hit testing', async t => {
  const { page, widget, status, submit, call } = await fixture(t);
  await text(status, 'Please complete');
  await call('expired-callback');
  const targets = [
    ['quantity', page.locator('[name="quantity"]')],
    ['drawing', page.locator('label').filter({ has: page.locator('input[name="drawing"]') })],
    ['turnstile', page.locator('[data-mock-widget]')],
    ['retry', widget.getByRole('button')],
    ['send', submit]
  ];
  for (const [name, locator] of targets) {
    await locator.evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.waitForTimeout(100);
    assert.equal(await page.evaluate(() => innerWidth), 390);
    for (const target of [page.locator('header').first(), locator]) {
      const result = await target.evaluate(el => {
        const r = el.getBoundingClientRect();
        const points = [[.1,.2],[.5,.5],[.9,.8]];
        return { rect: { x: r.x, y: r.y, width: r.width, height: r.height }, clear: points.every(([x,y]) => {
          const hit = document.elementFromPoint(r.x + r.width*x, r.y + r.height*y);
          return hit === el || el.contains(hit);
        }) };
      });
      assert.ok(result.clear, `${name}: occluded ${JSON.stringify(result)}`);
      assert.ok(result.rect.y >= 0 && result.rect.y + result.rect.height <= 844);
    }
    if (process.env.TEST_SCREENSHOT) await page.screenshot({ path: process.env.TEST_SCREENSHOT.replace(/\.png$/, `-${name}.png`), fullPage: false });
  }
});

test('render exception has bounded manual recovery', async t => {
  const { page, widget, status, submit } = await fixture(t, 'render-fail');
  await text(status, 'could not load');
  assert.equal(await submit.isDisabled(), true);
  assert.equal(await page.evaluate(() => window.calls.length), 1);
  await page.evaluate(() => { window.throwRender = false; });
  await widget.getByRole('button', { name: 'Verify again', exact: true }).click();
  await text(status, 'Please complete');
  assert.equal(await page.evaluate(() => window.calls.length), 2);
});

test('missing SDK after script readiness fails closed without automatic retry', async t => {
  const { widget, status, submit } = await fixture(t, 'slow');
  await text(status, 'could not load');
  assert.equal(await submit.isDisabled(), true);
  assert.match(await widget.getByRole('button').innerText(), /Reload page/);
});

test('script failure explicitly reloads and loses form entries; 390px error layout fits', async t => {
  const { page, widget, status, submit } = await fixture(t, 'load-fail');
  await text(status, 'could not load');
  assert.equal(await submit.isDisabled(), true);
  await page.locator('[name="name"]').fill('Unsaved local entry');
  await page.locator('input[type="file"]').setInputFiles({ name: 'test.pdf', mimeType: 'application/pdf', buffer: Buffer.from('local fixture') });
  const retry = widget.getByRole('button');
  await retry.scrollIntoViewIfNeeded();
  assert.match(await retry.innerText(), /form text and attached files may be lost/);
  const metrics = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }));
  assert.equal(metrics.width, 390);
  assert.ok(metrics.scroll <= 390, JSON.stringify(metrics));
  for (const el of await page.locator('form input:visible:not([name="website"]):not(.sr-only), form textarea:visible, form select:visible, form button:visible').all()) {
    const box = await el.boundingBox();
    assert.ok(box && box.x >= 0 && box.x + box.width <= 391, 'Form control fits viewport');
  }
  if (process.env.TEST_SCREENSHOT) await page.screenshot({ path: process.env.TEST_SCREENSHOT, fullPage: true });
  await Promise.all([page.waitForEvent('load'), retry.click()]);
  assert.equal(await page.locator('[name="name"]').inputValue(), '');
  assert.equal(await page.locator('input[type="file"]').evaluate(el => el.files.length), 0);
});
