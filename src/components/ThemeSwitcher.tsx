import { useEffect } from "react";
import {
    applyTheme,
    setThemePreference,
    useThemePreference,
    type ThemePreference,
} from "@/lib/theme";
import { Monitor, Moon, Sun } from "./icons";

const options: { value: ThemePreference; label: string; Icon: typeof Sun }[] = [
    { value: "system", label: "System", Icon: Monitor },
    { value: "light", label: "Light", Icon: Sun },
    { value: "dark", label: "Dark", Icon: Moon },
];

/** Theme toggle: System / Light / Dark, each an icon with its name. */
export default function ThemeSwitcher() {
    const preference = useThemePreference();

    // Re-apply after hydration in case the OS theme changed meanwhile.
    useEffect(() => applyTheme(preference), [preference]);

    return (
        <div className="flex items-center gap-2">
            <span id="theme-label">Theme</span>
            <div role="group" aria-labelledby="theme-label" className="flex">
                {options.map(({ value, label, Icon }) => (
                    <button
                        key={value}
                        type="button"
                        aria-pressed={preference === value}
                        onClick={() => setThemePreference(value)}
                        className="inline-flex h-8 items-center gap-1.5 rounded-sm px-2 text-mute transition-colors hover:text-ink aria-pressed:bg-surface-card aria-pressed:text-ink"
                    >
                        <Icon size={14} />
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}
