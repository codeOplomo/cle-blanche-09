// import Image from "next/image";
import fontTitle from "@/lib/font";

const Section02Marque = () => {
  return (
    <section className="w-full bg-[#e6dccf] mt-0 h-screen" data-aos="fade-up">
      <div className="h-full flex items-center container mx-auto  ">
        <div className="w-full  mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch bg-[#eee6dc]">
            {/* Image column - match text column height */}
            <div className="relative   h-[600px] overflow-hidden bg-center"
            style={{ backgroundImage: 'url(/new/IMG_8589-Migliorato-NR.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* <Image
                src="/new/IMG_8589-Migliorato-NR.jpg"
                alt="Clé Blanche résidence"
                width={600} 
                height={800}

              
              /> */}
            </div>

            {/* Text column */}
            <div className="flex items-center justify-center p-6 md:p-12 bg-[#e5dac5] col-span-2">
              <div className=" ">
                <h2
                  className={`text-3xl md:text-[58px] font-light tracking-wide ${fontTitle.className}`}
                >
                  Clé Blanche <br /> Une vision réinventée<br /> de l’habitat urbain
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
