"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex].text;
      if (!deleting && charIndex < currentWord.length) {
        setDisplayedText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
        setSpeed(150);
      } else if (deleting && charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
        setSpeed(50);
      } else if (!deleting && charIndex === currentWord.length) {
        setDeleting(true);
        setSpeed(1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, speed, words, currentWordIndex]);

  return (
    <div className={cn("text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-500 text-center", className)}>
      <div className="inline">
        {displayedText}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-8 bg-blue-500", cursorClassName)}
        ></motion.span>
      </div>
    </div>
  );
};
