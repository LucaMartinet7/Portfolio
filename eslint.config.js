import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

// Rules that keep code-injection sinks out of the codebase. The CSP blocks
// them at runtime too; this catches them at review time.
const securityRules = {
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
    "no-script-url": "error",
    "no-restricted-syntax": [
        "error",
        {
            selector: "JSXAttribute[name.name='dangerouslySetInnerHTML']",
            message: "Render text as React children instead of raw HTML.",
        },
        {
            selector: "JSXAttribute[name.name='style']",
            message:
                "Inline style attributes are blocked by the CSP. Use classes.",
        },
        {
            selector:
                "AssignmentExpression[left.property.name=/^(innerHTML|outerHTML)$/]",
            message: "Raw HTML sinks are blocked by Trusted Types.",
        },
    ],
};

export default defineConfig([
    globalIgnores(["dist", ".ssr", "src/generated"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: { globals: globals.browser },
        rules: securityRules,
    },
    {
        files: ["**/*.js"],
        extends: [js.configs.recommended],
        languageOptions: { globals: globals.node },
        rules: securityRules,
    },
]);
