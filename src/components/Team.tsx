"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Huzaif Pathan",
    designation: "Content Creator",
    image: "/Images/huzzai.png",
  },
  {
    id: 2,
    name: "Bhushan Shelke",
    designation: "Content Creator",
    image: "/Images/bhushan.png",
  },
  {
    id: 3,
    name: "Rohan Patil",
    designation: "Video Editor",
    image: "/Images/rohan.png",
  },
  {
    id: 4,
    name: "Abhishek Sable",
    designation: "Cinematographer",
    image: "/Images/abhishek.png",
  },
  {
    id: 5,
    name: "Karan Bhambhu",
    designation: "Manager",
    image: "/Images/Karan.jpg",
  },
];

export function Team() {
  return (
    <>
      <div className="container mt-14 lg:h-[70vh] ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-white" id="team">
          My Team
        </h1>
        <h3 className="text-center text-white mb-8 text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold">
          <span>— </span>
          <span className="text-red-500">Who with me</span>
          <span> —</span>
        </h3>
        <div className="flex flex-row items-center justify-center mb-10 w-full h-auto">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </>
  );
}
