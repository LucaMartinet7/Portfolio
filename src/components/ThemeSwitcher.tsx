import { useEffect } from "react";
import {
    applyTheme,
    setThemePreference,
    useThemePreference,
    type ThemePreference,
} from "@/lib/theme";
import { Monitor, Moon, Sun } from "./icons";

const options: { value: ThemePreference; label: string; Icon: typeof Sun }[] = [
    { value: "system", label: "System theme", Icon: Monitor },
    { value: "light", label: "Light theme", Icon: Sun },
    { value: "dark", label: "Dark theme", Icon: Moon },
];

export default function ThemeSwitcher() {
    const preference = useThemePreference();

    // Re-apply after hydration in case the OS theme changed meanwhile.
    useEffect(() => applyTheme(preference), [preference]);

    return (
        <div
            role="group"
            aria-label="Theme"
            className="inline-flex rounded-lg border border-line p-0.5"
        >
            {options.map(({ value, label, Icon }) => (
                <button
                    key={value}
                    type="button"
                    aria-label={label}
                    aria-pressed={preference === value}
                    onClick={() => setThemePreference(value)}
                    className="inline-flex size-9 items-center justify-center rounded-md text-fg-subtle transition-colors hover:text-fg aria-pressed:bg-surface aria-pressed:text-fg aria-pressed:shadow-[inset_0_0_0_1px_var(--line-strong)]"
                >
                    <Icon size={16} />
                </button>
            ))}
        </div>
    );
}
