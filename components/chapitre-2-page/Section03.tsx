import React from "react";
import GallerySlider from "@/components/ui/GallerySlider";
import fontTitle from "@/lib/font";

const Section03: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-6 px-4 sm:px-0 text-center lg:text-left">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-8 sm:w-12 h-[1px] bg-second" aria-hidden="true" />
              <span className="text-xs uppercase text-second font-semibold tracking-widest">
                Nos penthouses
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main-black mb-4 drop-shadow-lg ${fontTitle.className}`}
            >
              Un luxe ultime{" "}
              <span className="block text-main-black font-bold">suspendu</span>{" "}
              <span className="block text-gray-900 font-bold">entre ciel et terre</span>
            </h2>

            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="text-main-black font-bold">Vivre en hauteur.</span> Sentir
                l&apos;air circuler librement, dompter la lumière. Les penthouses de Clé
                Blanche offrent un horizon sans limites.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Sous la pergola bioclimatique, la lumière se module, le vent s&apos;adoucit,
                l&apos;espace s&apos;adapte au rythme du jour. Plus loin, une piscine
                suspendue reflète le ciel, fusionne avec l&apos;instant.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="text-main-black font-bold">Ici, rien ne contraint, tout respire.</span>{" "}
                L&apos;extérieur n&apos;est plus une frontière mais une extension naturelle du dedans.
              </p>
            </div>
          </div>

          {/* Right column - slider */}
          <div className="relative flex justify-center lg:justify-end px-4 sm:px-0">
            <figure
              className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden"
              role="img"
              aria-label="Galerie des penthouses"
            >
              {/* pass images as before; GallerySlider handles the internal rendering */}
              <GallerySlider images={["/chapitre2/SECTION 03.png"]} />
            </figure>

            {/* decorative circles — hide on very small screens to avoid accidental overflow */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-second/10 rounded-full -z-10" />
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-16 h-16 bg-main/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
