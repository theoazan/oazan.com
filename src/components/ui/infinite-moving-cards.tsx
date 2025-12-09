import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from 'next/image'; // Import Image from next/image

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    brandImage: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      // Increase the animation speed by reducing the duration
      const duration = speed === "fast" ? "5s" : speed === "normal" ? "10s" : "20s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  // Touch event handlers
  let startX = 0;
  let scrollLeft = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    scrollLeft = scrollerRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const x = touch.clientX;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    // Optionally, you can add logic to snap back to a specific position or handle inertia
  };

  // Scroll control functions
  const scroll = (direction: "left" | "right") => {
    if (scrollerRef.current) {
      const scrollAmount = 300; // Adjust the amount to scroll
      const newScrollLeft =
        direction === "left"
          ? scrollerRef.current.scrollLeft - scrollAmount
          : scrollerRef.current.scrollLeft + scrollAmount;
      scrollerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full z-30 md:block hidden"
        onClick={() => scroll("left")}
      >
        &#9664; {/* Left arrow */}
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full z-30 md:block hidden"
        onClick={() => scroll("right")}
      >
        &#9654; {/* Right arrow */}
      </button>

      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll" // Keep the animation running
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-6 py-4 md:w-[400px] flex items-center justify-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Brighter white background
              backdropFilter: "blur(10px)", // Blur effect for the content
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Optional shadow for better separation
            }}
            key={idx}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src={item.brandImage}
                alt="brand image"
                className="mb-4 h-48 w-48 object-contain" // Adjust the size as needed
                width={192} // Set width
                height={192} // Set height
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
