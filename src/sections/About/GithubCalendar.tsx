import { GitHubCalendar } from "react-github-calendar";
import React, { useState, useCallback } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const calendarTheme = {
    light: ["#F8F5F2", "#c2d0c7", "#8aaa93", "#385144", "#1f3329"],
    dark: ["#2e2e2e", "#2a3d2e", "#4a6b4e", "#7aaa7e", "#C2D8C4"],
};

interface TooltipState {
    content: string;
    x: number;
    y: number;
}

export default function GithubCalendar() {
    const [tooltip, setTooltip] = useState<TooltipState | null>(null);
    const { theme } = useTheme();

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        });

    const handleMouseEnter = useCallback(
        (activity: { date: string; count: number }, e: React.MouseEvent) => {
            const label =
                activity.count === 0
                    ? `No contributions on ${formatDate(activity.date)}`
                    : `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${formatDate(activity.date)}`;
            setTooltip({ content: label, x: e.clientX, y: e.clientY });
        },
        []
    );

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        setTooltip((prev) =>
            prev ? { ...prev, x: e.clientX, y: e.clientY } : null
        );
    }, []);

    const handleMouseLeave = useCallback(() => setTooltip(null), []);

    const renderBlock = useCallback(
        (block: React.ReactElement, activity: { date: string; count: number }) =>
            React.cloneElement(block as React.ReactElement<React.SVGProps<SVGRectElement>>, {
                onMouseEnter: (e: React.MouseEvent) =>
                    handleMouseEnter(activity, e),
                onMouseMove: handleMouseMove,
                onMouseLeave: handleMouseLeave,
                style: {
                    cursor: "pointer",
                    outline:
                        activity.count === 0
                            ? theme === "light"
                                ? "1px solid rgba(110,136,176,0.3)"
                                : "1px solid rgba(194,216,196,0.2)"
                            : "none",
                    outlineOffset: "-1px",
                },
            }),
        [theme, handleMouseEnter, handleMouseMove, handleMouseLeave]
    );

    return (
        <div className="mt-16">
            <h3 className="text-xl font-medium">Days I code</h3>
            <div className="mt-6 overflow-x-auto flex justify-center scale-125 origin-top">
                <GitHubCalendar
                    username="lucamartinet7"
                    colorScheme={theme}
                    theme={calendarTheme}
                    renderBlock={renderBlock}
                />
            </div>

            {tooltip && (
                <div
                    className="fixed z-50 pointer-events-none px-2.5 py-1.5 rounded-lg bg-[#F8F5F2] dark:bg-[#2e2e2e] border border-[#385144]/25 dark:border-[#C2D8C4]/15 text-xs text-[#1f3329] dark:text-[#C2D8C4] shadow-lg whitespace-nowrap"
                    style={{
                        left: Math.min(
                            window.innerWidth - 220,
                            tooltip.x + 12
                        ),
                        top: Math.max(8, tooltip.y - 36),
                    }}
                >
                    {tooltip.content}
                </div>
            )}
        </div>
    );
}
