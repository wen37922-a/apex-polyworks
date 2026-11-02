import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const source = readFileSync(new URL("../components/QuoteForm.tsx", import.meta.url), "utf8");

function renderForm(country: string, visible = true) {
  let stateIndex = 0;
  let requestBody: FormData | undefined;
  const module = { exports: {} as { QuoteForm: (props: object) => any } };
  const mocks: Record<string, unknown> = {
    react: {
      useCallback: (callback: unknown) => callback,
      useState: (initial: any) => [
        stateIndex++ === 4 ? "local-test-token" : typeof initial === "function" ? initial() : initial,
        () => {}
      ]
    },
    "next/navigation": { useRouter: () => ({ push: () => assert.fail("No success navigation in this test") }) },
    "lucide-react": { Clock3: "span", Send: "span", Upload: "span" },
    "@/lib/analytics": { getPagePath: () => "/contact", inferMaterial: () => "" },
    "@/lib/attribution": { captureMarketingAttribution() {}, getStoredMarketingAttribution: () => null },
    "@/lib/google-ads": {},
    "@/components/TurnstileWidget": { TurnstileWidget: "div" }
  };
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX }
  }).outputText;
  runInNewContext(compiled, {
    exports: module.exports,
    require: (name: string) => mocks[name] ?? require(name),
    FormData: class extends FormData {
      constructor() {
        super();
        this.set("country", country);
        this.set("name", "Local Test");
        this.set("email", "test@example.com");
        this.set("material", "PEEK");
      }
    },
    File,
    fetch: async (_url: string, options: { body: FormData }) => {
      requestBody = options.body;
      // Stop before conversion/navigation. No HTTP request or real submission occurs.
      return { ok: false, json: async () => ({ error: "Local interception" }) };
    }
  });
  const form = module.exports.QuoteForm({ compact: true, showDestinationCountry: visible });
  return { form, getRequest: () => requestBody };
}

function countryInputs(node: any): any[] {
  if (!node || typeof node !== "object") return [];
  if (Array.isArray(node)) return node.flatMap(countryInputs);
  const children = countryInputs(node.props?.children);
  return node.type === "input" && node.props.name === "country" ? [node, ...children] : children;
}

test("Contact and dedicated RFQ configure a visible optional blank destination", () => {
  for (const path of ["../app/contact/page.tsx", "../app/request-a-quote/page.tsx"]) {
    const page = readFileSync(new URL(path, import.meta.url), "utf8");
    assert.match(page, /<QuoteForm\b[^>]*\bshowDestinationCountry\b/);
  }
  const inputs = countryInputs(renderForm("").form);
  assert.equal(inputs.length, 1);
  assert.notEqual(inputs[0].props.type, "hidden");
  assert.equal(inputs[0].props.required, undefined);
  assert.equal(inputs[0].props.value ?? inputs[0].props.defaultValue ?? "", "");
  assert.equal(countryInputs(renderForm("", false).form)[0].props.value, "");
});

test("blank and customer-entered countries reach request data unchanged", async (t) => {
  for (const country of ["", "Canada", "South Korea", "臺灣", "  New Zealand  "]) {
    await t.test(JSON.stringify(country), async () => {
      const harness = renderForm(country);
      await harness.form.props.onSubmit({ preventDefault() {}, currentTarget: {} });
      assert.ok(harness.getRequest());
      assert.equal(harness.getRequest()!.get("country"), country);
    });
  }
});
