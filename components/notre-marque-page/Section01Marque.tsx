import React from "react";
import fontTitle from "@/lib/font";

const Section01Marque = () => {
  return (
    <div
      className="flex flex-col my-8 md:my-16 lg:my-24 gap-6 md:gap-10 container mx-auto text-center px-4 md:px-0"
      data-aos="fade-up"
    >
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold text-main-black ${fontTitle.className} leading-tight`}
      >
        Sobriété, raffinement et harmonie
      </h2>

      {/* Reduced width of paragraph for better readability */}
      <p className="text-sm md:text-base leading-relaxed md:leading-loose max-w-5xl mx-auto">
        Clé Blanche est la nouvelle marque premium dédiée aux projets immobiliers très haut standing au Maroc, fruit d’un partenariat d’excellence entre Rachid Lazrak et Mouatassim Belghazi.
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
        Clé Blanche Souissi, premier projet emblématique de la marque matérialise cette vision centrée autour de la qualité, de la recherche d’innovation et de l’expérience du nouvel habitat.
      </p>
    </div>
  );
};

export default Section01Marque;