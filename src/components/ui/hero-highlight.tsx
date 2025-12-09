"use client";
import { cn } from "@/utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
   
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
   id?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative flex items-center bg-black dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 z-0 h-full">
        <div className="bg-dot-thick-neutral-200 dark:bg-dot-thick-neutral-500 opacity-20 h-full w-full absolute inset-0 pointer-events-none" />
        <motion.div
          className="bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 opacity-10 h-full w-full absolute inset-0 pointer-events-none transition duration-300 group-hover:opacity-100"
          style={{
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            maskImage: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
          }}
        />
      </div>
      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
