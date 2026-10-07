import { registerHooks } from "node:module";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      const projectFile = new URL(`../${specifier.slice(2)}.ts`, import.meta.url);
      return { shortCircuit: true, url: projectFile.href };
    }

    if (specifier === "next/server") {
      return nextResolve("next/server.js", context);
    }

    return nextResolve(specifier, context);
  }
});
