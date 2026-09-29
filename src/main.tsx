import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
    <StrictMode>
        <App />
    </StrictMode>
);

// Production pages are prerendered (scripts/prerender.js), so React only
// attaches to the existing HTML. The dev server serves an empty shell.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
