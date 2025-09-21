/* eslint-disable @next/next/no-img-element */
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
          <div className="w-full lg:w-full max-w-6xl relative overflow-hidden">
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
                {/* Opening quotation mark - top left */}
                <div className="absolute top-0 left-0 mt-4 ml-4 hidden md:block" style={{ zIndex: 10 }}>
                  <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
                    <g fill="none" stroke="rgba(255,255,255,1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      {/* Left quotation mark */}
                      <path d="M30 80 C20 70, 20 50, 30 40 C35 35, 40 38, 40 45 C40 50, 38 55, 35 58 L45 70 C50 75, 48 82, 42 85 C35 88, 30 85, 30 80" />
                      {/* Right quotation mark */}
                      <path d="M70 80 C60 70, 60 50, 70 40 C75 35, 80 38, 80 45 C80 50, 78 55, 75 58 L85 70 C90 75, 88 82, 82 85 C75 88, 70 85, 70 80" />
                    </g>
                  </svg>
                </div>
                
                <h3 className={`${fontTitle.className} text-3xl md:text-4xl leading-tight text-white mt-4`}>Le mot des Architectes</h3>
                <p className="mt-6 text-white text-sm md:text-[20px] max-w-5xl mx-auto">
                  Nous avons pensé Clé Blanche comme une alliance entre la matière et le temps. Une architecture minérale,
                  chaleureuse et ancrée dans son époque, où chaque texture et chaque détail portent une vision du prestige et du
                  raffinement. Nous avons voulu des espaces épurés, baignés de lumière, où les finitions
                  soignées et les matériaux nobles offrent un confort absolu. Ici, tout est harmonie : jardins paysagés, plans
                  d&apos;eau à débordement, lieux de partage et de sérénité. Un cadre de vie exceptionnel, pensé pour éveiller les
                  sens et réinventer, chaque jour, l&apos;Art d&apos;habiter.
                </p>
                
                {/* Closing quotation mark - bottom right */}
                <div className="absolute bottom-0 right-0 mb-4 mr-4 hidden md:block" style={{ zIndex: 10 }}>
                  <svg width="200" height="200" viewBox="0 0 200 200" className="text-white" style={{ transform: 'rotate(180deg)' }}>
                    <g fill="none" stroke="rgba(255,255,255,1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      {/* Left quotation mark */}
                      <path d="M30 80 C20 70, 20 50, 30 40 C35 35, 40 38, 40 45 C40 50, 38 55, 35 58 L45 70 C50 75, 48 82, 42 85 C35 88, 30 85, 30 80 Z" />
                      {/* Right quotation mark */}
                      <path d="M70 80 C60 70, 60 50, 70 40 C75 35, 80 38, 80 45 C80 50, 78 55, 75 58 L85 70 C90 75, 88 82, 82 85 C75 88, 70 85, 70 80 Z" />
                    </g>
                  </svg>
                </div>
                
                <div className="flex flex-col md:flex-row gap-16 justify-end">
                  <div className="mt-8 text-sm text-white text-right">
                    <div>Amin KANDUNI</div>
                    {/* place signature image exported from PSD as PNG/JPG in public/signature */}
                    <img
                      src="/signature/Signature_AmineKANOUNI_Blanche.webp"
                      alt="Signature Amin Kanduni"
                      className="mt-2 w-40 h-auto object-contain"
                    />
                  </div>
                  <div className="mt-8 text-sm text-white text-right">
                    <div>Boubker SEFRIOUI</div>
                    <img
                      src="/signature/Signature_BoubkerSEFRIOUI_Blanche.webp"
                      alt="Signature Boubker Sefrioui"
                      className="mt-2 w-40 h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* right column: image that covers its half (40% on md+) */}
              <div className="w-full md:w-2/5">
                <div className="w-full h-[650px] relative">
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