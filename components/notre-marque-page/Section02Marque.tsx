// import Image from "next/image";
import fontTitle from "@/lib/font";

const Section02Marque = () => {
  return (
    <section className="w-full bg-[#e6dccf] mt-0" data-aos="fade-up">
      <div className="h-full flex items-center container mx-auto  ">
        <div className="w-full  mx-auto py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-[##e1d6c1]">
            {/* Image column - match text column height */}
            <div
              className="relative   h-[800px] overflow-hidden bg-bottomx"
              style={{
                backgroundImage: "url(/new/IMG_8589-Migliorato-NR.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            </div>

            {/* Text column */}
            <div className="flex items-center justify-center p-6 md:p-12 bg-[#f0ebe0]">
              <div className=" ">
                <h2
                  className={`text-3xl md:text-[58px] font-light tracking-wide leading-none ${fontTitle.className}`}
                >
                  Clé Blanche <br /> Une vision réinventée
                  <br /> de l’habitat urbain
                </h2>

                <div className="mt-4 text-main-black text-sm md:text-[20px] leading-relaxed max-w-prose">
                  <p className="mb-3">
                    À Clé Blanche, tout est pensé pour durer ; une construction
                    durable, élaborée pour que le chez vous de demain soit
                    toujours identique à celui d’aujourd’hui. Ici, la pierre
                    respire, le bois vit, la lumière danse sur des espaces
                    ouverts à la nature. Dans un monde qui cherche à revenir à
                    l’essentiel, Clé Blanche offre une réponse : un refuge, un
                    équilibre, une promesse pérenne de quiétude. Un espace
                    préservé, où le temps s’étire, où la nature n’est pas un
                    décor, mais une présence.
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
