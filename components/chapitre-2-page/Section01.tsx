import React from "react";
// import Image from 'next/image';
import fontTitle from "@/lib/font";

const Section01: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-base">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-12 lg:gap-18 items-center"
          data-aos="fade-left"
        >
          <span
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[58px] text-gray-900 mb-6  ${fontTitle.className}`}
          >
            Des volumes épurés{" "}
            <span className=" text-gray-900 ">baignés de lumière</span>{" "}
            <span className="text-gray-900 whitespace-nowrap ">
              aux finitions exceptionnelles
            </span>

            {/* Feature list — responsive and touch-friendly on mobile, same desktop layout */}
            {/* This has to be the same font as the patagraph */}
            <ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 gap-0 pt-0 max-w-md mx-auto lg:mx-0 font-sans"
            >
              <Feature text="Finitions premium" />
              <Feature text="Lumière naturelle" />
              <Feature text="Matériaux nobles" />
              <Feature text="Espaces ouverts" />
            </ul>
          </span>

          <div className="space-y-4 text-gray-700 text-base sm:text-lg px-4 sm:px-0" data-aos="fade-up">
            <p className="max-w-prose mx-auto lg:mx-0 leading-relaxed">
              À Clé Blanche, la lumière est chez elle. Elle glisse sur le marbre, effleure le noyer, 
traverse d’immenses baies vitrées. Chaque espace respire, ouvert sur l’exté
rieur, baigné d’une clarté changeante.
            </p>

            <p className="max-w-prose mx-auto lg:mx-0 leading-relaxed">
               Sobres et épurés, nos intérieurs marient luxe discret et matériaux bruts dans 
une palette neutre, propice à l’expression personnelle. Les finitions soignées 
reflètent notre exigence.
            </p>

            <p className="max-w-prose mx-auto lg:mx-0 leading-relaxed">
              Sur les terrasses, la ville s’efface, laissant place à un décor apaisé. Un lieu de 
vie, un refuge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center gap-3">
    <span className="w-2 h-2 bg-main rounded-full flex-shrink-0" aria-hidden="true"></span>

    {/* block-level text with padding for larger touch target on mobile; keyboard focus visible */}
    <span
      className="text-lg text-gray-600 py-2 px-2 rounded-md block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-main"
      tabIndex={0}
      aria-label={text}
    >
      {text}
    </span>
  </li>
);

export default Section01;
