import React from "react";
// import Image from 'next/image';
import fontTitle from "@/lib/font";

const Section01: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-base">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
          data-aos="fade-left"
        >
          <span
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-6 text-center lg:text-left ${fontTitle.className}`}
          >
            Des volumes épurés{" "}
            <span className="block text-gray-900 font-bold">baignés de lumière</span>{" "}
            <span className="block text-gray-900 font-bold">
              aux finitions exceptionnelles
            </span>

            {/* Feature list — responsive and touch-friendly on mobile, same desktop layout */}
            <ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-md mx-auto lg:mx-0"
            >
              <Feature text="Finitions premium" />
              <Feature text="Lumière naturelle" />
              <Feature text="Matériaux nobles" />
              <Feature text="Espaces ouverts" />
            </ul>
          </span>

          <div className="space-y-6 text-gray-700 text-base sm:text-lg px-4 sm:px-0" data-aos="fade-up">
            <p className="max-w-prose mx-auto lg:mx-0 leading-relaxed">
              À Clé Blanche, la lumière est chez elle. Elle glisse sur le marbre,
              effleure le noyer, traverse d&apos;immenses baies vitrées. Chaque
              espace respire, ouvert sur l&apos;extérieur, baigné d&apos;une
              clarté changeante.
            </p>

            <p className="max-w-prose mx-auto lg:mx-0 leading-relaxed">
              Sobres et épurés, nos intérieurs marient luxe discret et matériaux
              bruts dans une palette neutre, propice à l&apos;expression
              personnelle. Les finitions soignées reflètent notre exigence.
            </p>

            <p className="max-w-prose mx-auto lg:mx-0 leading-relaxed">
              Sur les terrasses, la ville s&apos;efface, laissant place à un décor
              apaisé. Un lieu de vie, un refuge.
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
