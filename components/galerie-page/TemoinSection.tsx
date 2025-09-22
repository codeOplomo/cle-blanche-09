"use client";
import fontTitle from "@/lib/font";
import Image from "next/image";
import React from "react";

// Static collage image path: place your provided image at public/galerie-temoin-collage.jpg

const TemoinSection = () => {
  return (
    <section className="mb-8">
      <div
        className="flex flex-col pt-12 items-center justify-center"
        data-aos="fade-up"
      >
        {/* Title */}
        <h2
          className={`text-3xl md:text-[58px]  text-main-black mb-4 text-center ${fontTitle.className}`}
        >
         Vivez l’esprit Clé Blanche <br/>
 dans notre appartement témoin
        </h2>
        <p className="text-sm md:text-[20px] text-center max-w-4xl mb-8">
          {` Clé Blanche vous ouvre les portes de son appartement témoin. Un espace aménagé et décoré
 avec soin où vous pouvez plus aisément vous projeter dans votre futur appartement,
 de ressentir l’harmonie des volumes, la qualité des finitions, et la luminosité des intérieurs.`}
        </p>

        
          <div className="relative overflow-hidden h-full w-full">
            <Image
              src="/Montage_MOSAÏQUE.png"
              alt="Appartement témoin collage"
              width={1600}
              height={900}
              className="object-cover w-full h-full"
            />
          </div>
      </div>
    </section>
  );
};

export default TemoinSection;