import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import NotFound from "./NotFound";

/** Used at build time by scripts/prerender.js to produce static HTML. */
export function render(page: "home" | "404") {
    return renderToString(
        <StrictMode>{page === "404" ? <NotFound /> : <App />}</StrictMode>
    );
}
