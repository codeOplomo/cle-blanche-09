"use client";

import React from "react";
import SplitText from "../ui/SplitText";
import { motion } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";
import fontTitle from "@/lib/font";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center text-white">
      <BackgroundVideo />

      <div className="min-h-screen bg-[#00000040] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col lg:w-3/4 mx-auto text-center">

          {/* Group 1: First + Second split texts with reduced spacing */}
          <div className="flex flex-col items-center ">
            <SplitText
              text="Clé Blanche"
              className={`text-3xl md:text-[58px] ${fontTitle.className}`}
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
              text="Votre Résidence d'Excellence"
              className={`text-3xl md:text-[58px] ${fontTitle.className} `}
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
              className={`text-3xl md:text-[58px] ${fontTitle.className}`}
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
          <div className="flex flex-col items-center ">
            <motion.p
              initial={{ opacity: 0, y: 12, scale: 1.01 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.12, duration: 2.0, ease: "easeOut" }}
              className={`text-sm md:text-[20px] font-extralight tracking-wider max-w-4xl mx-auto leading-snug ${fontTitle.className} font-semibold text-center`}
            >
              Deuxième et dernière tranche. Une opportunité unique.
            </motion.p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;