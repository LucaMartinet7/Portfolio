"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center",
          className
        )}
      >
        <div className="flex items-center gap-1 rounded-full border border-[#385144]/20 dark:border-[#C2D8C4]/15 bg-[#F8F5F2]/90 dark:bg-[#222222]/90 px-2 py-1.5 shadow-lg backdrop-blur-md">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className="relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[#385144] dark:text-[#C2D8C4]/70 transition-colors hover:bg-[#385144]/10 dark:hover:bg-[#C2D8C4]/10 hover:text-[#1f3329] dark:hover:text-[#C2D8C4]"
            >
              {navItem.icon && <span>{navItem.icon}</span>}
              <span>{navItem.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
