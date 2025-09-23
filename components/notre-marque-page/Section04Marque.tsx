import Image from "next/image";
import React from "react";
import fontTitle from "@/lib/font";

const Section04Marque = () => {
  const body = `Clé Blanche fait de la nature une évidence. Habiter plus Vert, c'est lui donner la place qu'elle mérite, non comme un décor, mais comme une respiration. Ici, chaque arbre, chaque allée, chaque plan d'eau prolonge un engagement : offrir un cadre de vie où l'air est plus léger, le temps plus doux. Un lieu où l'on marche lentement, où l'on s'arrête pour lire, rêver, regarder les enfants jouer. Où l'eau s'étire le long des chemins, où les jardins murmurent au vent. Un espace pensé pour vivre autrement, plus proche de l'essentiel. Plus proche de la nature. Si près du cœur de la ville et pourtant si loin de son tumulte.`;

  return (
    <div
      className="min-h-screen flex  justify-center"
      data-aos="fade-right"
    >
      <div className="flex flex-col mb-12 md:mb-24 gap-10 container mx-auto text-base w-full">
        <div className="">
          {/* Full-bleed Image on top */}
          <div className="relative left-1/2 -translate-x-1/2 max-w-none overflow-hidden aspect-square">
            <Image
              src={"/new/IMG_8427-Migliorato-NR.jpg"}
              alt="Habiter plus Vert"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 65%' }}
              width={1600}
              height={1600}
            />
          </div>

          {/* Text with left title block and right flowing two-column text */}
          {/* constrain the text block width and center it under the full-bleed image */}
          <div className="mt-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 px-6 md:px-0 ">
            {/* Left title/label (vertical feel in the design image). Keep it compact */}
            <div className="md:w-1/4 flex-shrink-0 ">
              <div className={`${fontTitle.className} text-xl md:text-2xl font-bold text-main-black`}>
                <span className={`text-3xl md:text-[58px] font-light tracking-wide leading-none ${fontTitle.className}`}>Habiter plus Vert</span>
                {/* <span className="leading-tight hidden md:block">Habiter<br />plus Vert</span> */}
              </div>
            </div>

            {/* Right content: single flowing paragraph (no columns) */}
            <div className="md:w-3/4 bg-white/0 text-black">
              <div className="text-black">
                <p className="text-sm md:text-base leading-relaxed">{body}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section04Marque;
