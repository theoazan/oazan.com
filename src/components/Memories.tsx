"use client";

import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export function Memories() {
    const images = [


        "/Images/ss1.png",
        "/Images/ss2.png",
        "/Images/event1.jpg",
        "/Images/100k.png",
        "/Images/ss4.png",
        "/Images/ss3.png",
        "/Images/chat2.png",
        "/Images/100k2.png",

    ];

    return (
        <>
            <HeroHighlight className="py-12 lg:py-24 px-4 lg:px-0 w-full" >
                <div className="text-center" id="memories">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" id="brands">
                        Memories
                    </h1>
                    <h3 className="text-lg md:text-xl lg:text-2xl text-white mb-2 font-semibold">
                        <span>— </span>
                        <span className="text-red-500">Where Moments Live Forever</span>
                        <span> —</span>
                    </h3>
                    <ParallaxScroll images={images} />
                </div>
            </HeroHighlight>
        </>
    );
}
