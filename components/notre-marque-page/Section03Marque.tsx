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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* centered translucent panel so the textured background remains visible around it */}
      <div className="w-full px-6 relative" style={{ zIndex: 10 }}>
        <div className="flex justify-center">
          <div className="w-full lg:w-full max-w-6xl  relative overflow-hidden">
            <div className="md:mx-0 relative overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* panel base color */}
              <div style={{ background: 'rgba(88,77,64,0.36)', position: 'absolute', inset: 0, zIndex: 0 }} />
              {/* textured layer on top of the base but behind content */}
              <div
                style={{
                  backgroundImage: "url('/new/Texture_TRAVERTIN_200x200_72dpi.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.22,
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  mixBlendMode: 'overlay',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)'
                }}
              />

              <div className="relative p-8 md:p-10 md:px-[150px]" style={{ zIndex: 10 }}>
                {/* <div className="text-6xl text-[rgba(255,255,255,0.9)] leading-none font-light">“</div> */}
                <h3 className={`${fontTitle.className} text-3xl md:text-4xl leading-tight text-white mt-4`}>Le mot des Architectes</h3>
                <p className="mt-6 text-white text-sm md:text-[20px]  max-w-5xl mx-auto">
                  Nous avons pensé Clé Blanche comme une alliance entre la matière et le temps. Une architecture minérale,
                  chaleureuse et ancrée dans son époque, où chaque texture et chaque détail portent une vision du prestige et du
                  raffinement. Nous avons voulu des espaces épurés, baignés de lumière, où les finitions
                  soignées et les matériaux nobles offrent un confort absolu. <br/>
                  Ici, tout est harmonie : jardins paysagés, plans
                  d’eau à débordement, lieux de partage et de sérénité. Un cadre de vie exceptionnel, pensé pour éveiller les
                  sens et réinventer, chaque jour, l’Art d’habiter.
                </p>
                <div className="flex flex-col md:flex-row gap-16 justify-end">
                  <div className="mt-8 text-sm text-white text-center">
                    <div>Amin KANOUNI</div>
                    {/* place signature image exported from PSD as PNG/JPG in public/signature */}
                    <img
                      src="/signature/Signature_AmineKANOUNI_Blanche.webp"
                      alt="Signature Amin Kanduni"
                      className="mt-2 w-40 h-auto object-contain"
                    />

                  </div>
                  <div className="mt-8 text-sm text-white text-center">
                    <div>Boubker SEFRIOUI</div>
                    <img
                      src="/signature/Signature_BoubkerSEFRIOUI_Blanche.webp"
                      alt="Signature Boubker Sefrioui"
                      className="mt-2 w-40 h-auto object-contain"
                    />

                  </div>
                </div>
              </div>

            </div>

            {/* Split row: left 60% / right 40% on md+, stack on small screens */}
            <div className="w-full flex flex-col md:flex-row">
              {/* left column: decorative bar or image (60% on md+) */}
              <div className="w-full md:w-3/5 p-6 flex items-center bg-white/30" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                <div className="w-full bg-transparent text-end ">
                  <h3 className={`${fontTitle.className} text-3xl md:text-4xl leading-tight mt-4 pr-12`}>La touche de l’Artiste</h3>
                  <p className="mt-6 text-sm md:text-[20px] max-w-md mx-auto ">
                    J’ai imaginé ces sculptures comme des passages
                    symboliques, entre l’extérieur et l’espace intime, entre la
                    noblesse de la matière et la vie qu’elle abrite.
                    Chaque hall s’ouvre sous une œuvre suspendue, une trace
                    d’histoire figée par la lumière. J’ai cherché l’harmonie,
                    l’équilibre des formes sculptées et adoucies par le temps. Ici,
                    l’art ne se contente pas d’orner, il habite les lieux.
                  </p>
                  <p className="mt-6 text-sm md:text-[20px] max-w-md mx-auto ">
                    Jamil BENNANI
                  </p>

                </div>
              </div>

              {/* right column: image that covers its half (40% on md+) */}
              <div className="w-full md:w-2/5">
                <div className="w-full h-[650px] relative ">
                  <Image
                    src={'/new/IMG_8639-Migliorato-NR.jpg'}
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