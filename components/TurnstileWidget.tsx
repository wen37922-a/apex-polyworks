"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileApi = {
  remove(widgetId: string): void;
  render(
    container: HTMLElement,
    options: {
      action: string;
      callback(token: string): void;
      "error-callback"(): void;
      "expired-callback"(): void;
      sitekey: string;
      theme: "light";
      retry: "never";
      "refresh-expired": "manual";
      size: "flexible";
    }
  ): string;
  reset(widgetId: string): void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function TurnstileWidget({
  onTokenChange,
  resetSignal
}: {
  onTokenChange(token: string): void;
  resetSignal: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "success" | "error" | "expired">("loading");
  const [attempt, setAttempt] = useState(0);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "";

  useEffect(() => {
    if (!scriptReady || !siteKey || !containerRef.current || widgetIdRef.current !== null) return;
    let active = true;
    const fail = () => {
      if (!active) return;
      onTokenChange("");
      setStatus("error");
    };
    onTokenChange("");
    setStatus("ready");
    try {
      if (!window.turnstile) throw new Error("Verification unavailable");
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        action: "rfq_submit",
        callback: (token) => {
          if (!active) return;
          onTokenChange(token);
          setStatus(token ? "success" : "error");
        },
        "error-callback": fail,
        "expired-callback": () => {
          if (!active) return;
          onTokenChange("");
          setStatus("expired");
        },
        sitekey: siteKey,
        theme: "light",
        retry: "never",
        "refresh-expired": "manual",
        size: "flexible"
      });
    } catch {
      fail();
    }
    return () => {
      active = false;
      const id = widgetIdRef.current;
      widgetIdRef.current = null;
      try {
        if (id !== null) window.turnstile?.remove(id);
      } catch {
        // A failed cleanup must never retain a usable token.
      }
      containerRef.current?.replaceChildren();
      onTokenChange("");
    };
  }, [onTokenChange, scriptReady, siteKey, attempt, resetSignal]);

  useEffect(() => {
    if (scriptReady) return;
    const timer = window.setTimeout(() => {
      onTokenChange("");
      setStatus("error");
    }, 15000);
    return () => window.clearTimeout(timer);
  }, [onTokenChange, scriptReady]);

  function retryVerification() {
    onTokenChange("");
    if (!scriptReady || !window.turnstile) {
      // Reload explicitly: Next Script caches failed loads; remounting is insufficient.
      window.location.reload();
      return;
    }
    setStatus("ready");
    setAttempt((value) => value + 1);
  }

  if (!siteKey) {
    return (
      <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
        Verification is temporarily unavailable. Please email sales@apexpolyworks.com.
      </p>
    );
  }

  return (
    <div className="min-h-[65px]" aria-label="Bot verification">
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
        onError={() => {
          onTokenChange("");
          setStatus("error");
        }}
      />
      <div ref={containerRef} className="min-w-0 max-w-full" />
      <p className="mt-2 break-words text-sm text-steel" role="status" aria-live="polite">
        {status === "loading" && "Loading verification…"}
        {status === "ready" && "Please complete the verification."}
        {status === "success" && "Verification complete."}
        {status === "error" && "Verification could not load or failed. Please try again."}
        {status === "expired" && "Verification expired. Please verify again."}
      </p>
      {(status === "error" || status === "expired") && (
        <button type="button" className="mt-2 min-h-11 max-w-full rounded-md border border-teal px-3 py-2 text-sm text-teal" onClick={retryVerification}>
          {!scriptReady || !window.turnstile ? "Reload page to retry (form text and attached files may be lost)" : "Verify again"}
        </button>
      )}
    </div>
  );
}
