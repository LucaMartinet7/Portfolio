import { useSyncExternalStore } from "react";

/**
 * Theme preference: follow the OS by default, or force light/dark.
 * The inline script in index.html applies the same logic before first paint,
 * so there is no flash of the wrong theme.
 */
export type ThemePreference = "system" | "light" | "dark";

// Not "theme": the previous site stored "dark" there on every visit, which
// would override "system" for returning visitors.
const STORAGE_KEY = "theme-preference";
const DARK_QUERY = "(prefers-color-scheme: dark)";
const THEME_COLOR = { light: "#fdfcfc", dark: "#141212" };

const listeners = new Set<() => void>();

function readPreference(): ThemePreference {
    try {
        const value = localStorage.getItem(STORAGE_KEY);
        return value === "light" || value === "dark" ? value : "system";
    } catch {
        return "system";
    }
}

export function applyTheme(preference: ThemePreference) {
    const dark =
        preference === "dark" ||
        (preference === "system" && matchMedia(DARK_QUERY).matches);
    document.documentElement.classList.toggle("dark", dark);
    document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", dark ? THEME_COLOR.dark : THEME_COLOR.light);
}

export function setThemePreference(preference: ThemePreference) {
    try {
        if (preference === "system") localStorage.removeItem(STORAGE_KEY);
        else localStorage.setItem(STORAGE_KEY, preference);
    } catch {
        // Storage can be blocked (private mode); the choice then lasts
        // for this page view only.
    }
    applyTheme(preference);
    listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
    listeners.add(notify);
    // Keep "system" in sync with the OS, and follow changes made in other tabs.
    const media = matchMedia(DARK_QUERY);
    const onChange = () => {
        applyTheme(readPreference());
        notify();
    };
    media.addEventListener("change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
        listeners.delete(notify);
        media.removeEventListener("change", onChange);
        window.removeEventListener("storage", onChange);
    };
}

/** The server does not know the preference, so it always renders "system". */
export function useThemePreference() {
    return useSyncExternalStore(
        subscribe,
        readPreference,
        (): ThemePreference => "system"
    );
}
