"use client";

import React from "react";
import SplitText from "../ui/SplitText";
import BackgroundVideo from "./BackgroundVideo";
import fontTitle from "@/lib/font";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center text-white">
      <BackgroundVideo />

      <div className="min-h-screen bg-[#00000040] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col lg:w-3/4 mx-auto text-center">

          {/* Group 1: First + Second split texts */}
          <div className="flex flex-col items-center">
            <SplitText
              text="Clé Blanche"
              className={`text-4xl md:text-5xl ${fontTitle.className}`}
              delay={80}
              duration={1.8}
              ease="power3.out"
              splitType="chars"
              from={{
                opacity: 0,
                y: 15,
                scale: 1.02,
              }}
              to={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <SplitText
              text="Une Résidence d'Excellence"
              className={`text-4xl md:text-5xl ${fontTitle.className}`}
              delay={100}
              duration={1.8}
              ease="power3.out"
              splitType="chars"
              from={{
                opacity: 0,
                y: 12,
                scale: 1.01,
              }}
              to={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text="au cœur de Souissi"
              className={`text-4xl md:text-5xl ${fontTitle.className}`}
              delay={100}
              duration={1.8}
              ease="power3.out"
              splitType="chars"
              from={{
                opacity: 0,
                y: 12,
                scale: 1.01,
              }}
              to={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          {/* Group 2: Third + Fourth split texts with reduced spacing */}
          <div className="flex flex-col items-center mt-1">
            <SplitText
              text="Deuxième et dernière tranche. Une opportunité unique."
              className={`text-lg md:text-xl lg:text-2xl font-extralight tracking-wider max-w-4xl mx-auto leading-relaxed ${fontTitle.className} font-semibold`}
              delay={120}
              duration={2.0}
              ease="power2.out"
              splitType="chars"
              from={{
                opacity: 0,
                y: 12,
                scale: 1.01,
              }}
              to={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;