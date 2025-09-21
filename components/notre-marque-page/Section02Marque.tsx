import Image from "next/image";
import fontTitle from "@/lib/font";

const Section02Marque = () => {
  return (
    <section className="w-full bg-[#e6dccf] mt-0 h-screen" data-aos="fade-up">
      <div className="h-full flex items-center">
        <div className="w-full max-w-screen-lg mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch md:h-[520px]">
            {/* Image column - match text column height */}
            <div className="relative w-full h-72 sm:h-96 md:h-full overflow-hidden">
              <Image
                src="/new/IMG_8589-Migliorato-NR.jpg"
                alt="Clé Blanche résidence"
                fill
                className="object-cover"
              />
            </div>

            {/* Text column */}
            <div className="flex items-center">
              <div className="w-full bg-[#eee6dc] p-6 md:p-12">
                <h2
                  className={`text-xl md:text-3xl font-semibold text-main-black ${fontTitle.className} leading-tight`}
                >
                  Clé Blanche <br /> Une vision réinventéede l’habitat urbain
                </h2>

                <div className="mt-4 text-main-black text-sm md:text-[20px] leading-relaxed max-w-prose">
                  <p className="mb-3">
                    À Clé Blanche, tout est pensé pour durer ; une construction durable, élaborée pour que le chez vous de demain soit toujours identique à celui d’aujourd’hui. Ici, la pierre respire, le bois vit, la lumière danse sur des espaces ouverts à la nature. Dans un monde qui cherche à revenir à l’essentiel, Clé Blanche offre une réponse : un refuge, un équilibre, une promesse pérenne de quiétude. Un espace préservé, où le temps s’étire, où la nature n’est pas un décor, mais une présence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02Marque;
