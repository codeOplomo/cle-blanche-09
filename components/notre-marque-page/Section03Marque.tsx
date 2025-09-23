import React from "react";
import fontTitle from "@/lib/font";
import Image from "next/image";

export default function Section03Marque() {
  return (
    <section className="relative py-24">
      {/* background image as an absolute layer so we can control stacking reliably */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/new/Texture_TRAVERTIN_200x200_72dpi.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* centered translucent panel so the textured background remains visible around it */}
      <div className="w-full px-6 relative" style={{ zIndex: 10 }}>
        <div className="flex justify-center">
          <div className="w-full lg:w-full max-w-6xl relative overflow-hidden">
            <div
              className="md:mx-0 relative overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* panel base color */}
              <div
                style={{
                  background: "rgba(88,77,64,0.36)",
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                }}
              />
              {/* textured layer on top of the base but behind content */}
              <div
                style={{
                  backgroundImage:
                    "url('/new/Texture_TRAVERTIN_200x200_72dpi.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.22,
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  mixBlendMode: "overlay",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              />

              <div
                className="relative p-8 md:p-10 md:px-[150px]"
                style={{ zIndex: 10 }}
              >
                {/* Opening quotation mark - proper left quote */}
                <Image
                  src="/Guillemet_01.svg"
                  alt="Opening quote"
                  width={80}   // give width/height for Next optimization
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 opacity-60 mb-4 absolute top-8 left-8"
                />



                <h3
                  className={`text-3xl md:text-[58px] text-white font-light tracking-wide leading-none ${fontTitle.className}`}
                >
                  Le mot des Architectes
                </h3>
                <p className="mt-6 text-white text-sm md:text-[20px] max-w-5xl mx-auto">

                  Nous avons pensé Clé Blanche comme une alliance entre la
                  matière et le temps. Une architecture minérale, chaleureuse et
                  ancrée dans son époque, où chaque texture et chaque détail
                  portent une vision du prestige et du raffinement. Nous avons
                  voulu des espaces épurés, baignés de lumière, où les finitions
                  soignées et les matériaux nobles offrent un confort absolu.{" "}
                  <br />
                  Ici, tout est harmonie : jardins paysagés, plans d&apos;eau à
                  débordement, lieux de partage et de sérénité. Un cadre de vie
                  exceptionnel, pensé pour éveiller les sens et réinventer,
                  chaque jour, l&apos;Art d&rsquo;habiter.
                </p>

                <div className="flex flex-col md:flex-row gap-16 justify-end">
                  <div className="mt-8 text-sm text-white text-center">
                    <div>Amine KANOUNI</div>
                    {/* place signature image exported from PSD as PNG/JPG in public/signature */}
                    <Image
                      src="/signature/Signature_AmineKANOUNI_Blanche.webp"
                      alt="Signature Amine Kanouni"
                      width={160} // base width in px
                      height={60} // just a placeholder, since h-auto keeps proportions
                      className="mt-2 w-40 mx-auto h-auto object-contain"
                    />

                  </div>
                  <div className="mt-8 text-sm text-white text-center">
                    <div>Boubker SEFRIOUI</div>
                    <Image
                      src="/signature/Signature_BoubkerSEFRIOUI_Blanche.webp"
                      alt="Signature Boubker Sefrioui"
                      width={160} // base width (px), Tailwind will still control final size
                      height={60} // arbitrary height, since h-auto keeps proportions
                      className="mt-2 w-40 h-auto object-contain mx-auto"
                    />

                  </div>
                  <div className="flex justify-end mt-6">
                    {/* Closing quotation mark - proper right quote */}
                    <div className="flex justify-end mt-6">
                      {/* Closing quotation mark - proper right quote */}
                      <Image
                        src="/Guillemet_02.svg"
                        alt="Closing quote"
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 opacity-60 mt-6 absolute bottom-6 left-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Split row: left 60% / right 40% on md+, stack on small screens */}
            <div className="w-full flex flex-col md:flex-row">
              {/* left column: decorative bar or image (60% on md+) */}
              <div
                className="w-full md:w-3/5 p-6 flex items-center bg-white/30"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <div className="w-full bg-transparent text-end">
                  <h3
                    className={`text-3xl md:text-[58px] font-light tracking-wide leading-none ${fontTitle.className}`}
                  >
                    La touche de l&apos;Artiste
                  </h3>
                  <p className="mt-6 text-sm md:text-[20px] max-w-md mx-auto">
                    J&apos;ai imaginé ces sculptures comme des passages
                    symboliques, entre l&apos;extérieur et l&apos;espace intime,
                    entre la noblesse de la matière et la vie qu&apos;elle
                    abrite. Chaque hall s&apos;ouvre sous une œuvre suspendue,
                    une trace d&apos;histoire figée par la lumière. J&apos;ai
                    cherché l&apos;harmonie, l&apos;équilibre des formes
                    sculptées et adoucies par le temps. Ici, l&apos;art ne se
                    contente pas d&apos;orner, il habite les lieux.
                  </p>
                  <p className="mt-6 text-sm md:text-[20px] max-w-md mx-auto">
                    Jamil BENNANI
                  </p>
                </div>
              </div>

              {/* right column: image that covers its half (40% on md+) */}
              <div className="w-full md:w-2/5">
                <div className="w-full h-[650px] relative">
                  <Image
                    src={"/new/IMG_8639-Migliorato-NR.jpg"}
                    alt="Habiter plus Vert"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
