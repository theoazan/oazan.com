'use client';

import { useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item.title}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#FFF1E6] rounded-3xl shadow-xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, delay: 0.05 },
                  }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-20 p-6 rounded-2xl h-full w-full bg-white border border-[#FFD8B2] shadow-md transition-transform group-hover:scale-105 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="text-[#FF6B00]">{item.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
