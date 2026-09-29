import { useEffect } from "react";
import {
    applyTheme,
    setThemePreference,
    useThemePreference,
    type ThemePreference,
} from "@/lib/theme";

const options: ThemePreference[] = ["system", "light", "dark"];

/** Text toggle, e.g. "theme: system light dark". */
export default function ThemeSwitcher() {
    const preference = useThemePreference();

    // Re-apply after hydration in case the OS theme changed meanwhile.
    useEffect(() => applyTheme(preference), [preference]);

    return (
        <div className="flex items-center gap-1">
            <span id="theme-label">theme:</span>
            <div role="group" aria-labelledby="theme-label" className="flex">
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        aria-pressed={preference === option}
                        onClick={() => setThemePreference(option)}
                        className="h-8 px-2 text-mute transition-colors hover:text-ink aria-pressed:text-ink aria-pressed:underline aria-pressed:decoration-2 aria-pressed:underline-offset-4"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
