"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Brands() {
  const brands = [
    { brandImage: "/Images/acer.png" },
    { brandImage: "/Images/croma.png" },
    { brandImage: "/Images/decathlon.png" },
    { brandImage: "/Images/fashion.png" },
    { brandImage: "/Images/phoenix.png" },
    { brandImage: "/Images/pizzahut.png" },
    { brandImage: "/Images/png.jpg" },
    { brandImage: "/Images/Swiggy.png" },
    { brandImage: "/Images/Zomato.png" },
    { brandImage: "/Images/chan.jpg" },
  ];

  return (
    <section className="py-12 lg:py-24 px-4 lg:px-0 w-full">
      <div className="text-center max-w-6xl mx-auto"  id="brands">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Brands
        </h1>
        <h3 className="text-lg md:text-xl lg:text-2xl text-white mb-10 font-semibold">
          <span>— </span>
          <span className="text-[#FF6B00]"> We Work With</span>
          <span> —</span>
        </h3>

        <div className="flex justify-center items-center">
          <InfiniteMovingCards
            items={brands}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
