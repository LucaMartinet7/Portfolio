import { GitHubCalendar } from "react-github-calendar";
import React, { useState, useCallback } from "react";

interface TooltipState {
    content: string;
    x: number;
    y: number;
}

export default function GithubCalendar() {
    const [tooltip, setTooltip] = useState<TooltipState | null>(null);

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

    return (
        <div className="mt-16">
            <h3 className="text-xl font-medium">Days I code</h3>
            <div className="mt-6 overflow-x-auto flex justify-center scale-125 origin-top">
                <GitHubCalendar
                    username="lucamartinet7"
                    renderBlock={(block, activity) =>
                        React.cloneElement(block, {
                            onMouseEnter: (e: React.MouseEvent) =>
                                handleMouseEnter(activity, e),
                            onMouseMove: handleMouseMove,
                            onMouseLeave: handleMouseLeave,
                            style: { cursor: "pointer" },
                        })
                    }
                />
            </div>

            {tooltip && (
                <div
                    className="fixed z-50 pointer-events-none px-2.5 py-1.5 rounded-lg bg-neutral-800 border border-white/10 text-xs text-white/90 shadow-xl whitespace-nowrap"
                    style={{ left: tooltip.x + 12, top: tooltip.y - 36 }}
                >
                    {tooltip.content}
                </div>
            )}
        </div>
    );
}
