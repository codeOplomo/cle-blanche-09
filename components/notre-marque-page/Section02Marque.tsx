import Image from "next/image";
import React from "react";
import fontTitle from "@/lib/font";

const Section02Marque = () => {
  return (
    <div className="flex flex-col my-8 md:my-16 lg:my-24 gap-6 md:gap-10 container mx-auto" data-aos="fade-up">
      {/* Make the inner grid stretch to equal heights and limit overall width to match other sections */}
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* IMAGE COLUMN - Now on the left like Section04Marque */}
        <div className="order-2 md:order-1 flex items-center justify-center">
          <div className="w-full max-w-md md:max-w-none md:h-[450px] flex items-center">
            <Image
              src={"/chapitre22.webp"}
              alt="Clé Blanche résidence"
              className="w-full h-auto md:h-full object-cover"
              width={450}
              height={450}
            />
          </div>
        </div>

        {/* TEXT COLUMN - Now on the right like Section04Marque */}
        <div className="order-1 md:order-2 flex flex-col gap-2">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-main-black ${fontTitle.className} leading-tight`}>
            Bien plus qu&apos;une résidence,
            <span className="block">une vision</span>
          </h2>

          <div className="flex flex-col gap-3 md:gap-2 text-black mt-3 md:mt-5 text-sm md:text-base leading-relaxed max-w-[70ch] md:max-w-none md:max-h-[450px] overflow-auto">
            <p>
              À Clé Blanche, tout est pensé pour durer ; une construction
              durable, élaborée pour que le chez vous de demain soit toujours
              identique à celui d&apos;aujourd&apos;hui. Ici, la pierre respire, le bois
              vit, la lumière danse sur des espaces ouverts à la nature.
            </p>
            <p>
              Clé Blanche n&apos;impose rien, elle s&apos;intègre, fluide, silencieuse.
              Un espace de vie où rien n&apos;est effacé, où le véritable luxe se fait
              harmonie et sérénité.
            </p>
            <p>
              Dans un monde qui cherche à revenir à l&apos;essentiel, Clé Blanche offre
              une réponse : un refuge, un équilibre, une promesse pérenne de quiétude.
              Un espace préservé, où le temps s&apos;étire, où la nature n&apos;est pas un décor,
              mais une présence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02Marque;

/*
  Alternative small tweaks (pick any):
  - Center both vertically: add `items-center` to the parent grid instead of `items-stretch` if you want
    both cells to be vertically centered (image and text baseline aligned), but this will not prevent
    the text from being taller.
  - Use the Tailwind line-clamp plugin to limit paragraph length without scrollbars:
      <p className="line-clamp-6">...</p>
    (requires plugin setup in tailwind.config.js)
  - Match the paragraph width used in Section01Marque by applying the same container classes
    (for example: `max-w-[...] mx-auto px-4`), or use `max-w-prose`/`max-w-2xl` depending on the desired width.

  Which option is best depends on UX:
  - If you want the full text visible, use the scroll approach so the overall card keeps a tidy height.
  - If you want visual parity and to avoid scrollbars, set a strict text length or use line-clamp.
  - If you want the image to grow with the text, consider removing the fixed md:h-[450px] and allow the image
    to be as tall as the text by using `h-full` on the image wrapper and making the grid row stretch.
*/
