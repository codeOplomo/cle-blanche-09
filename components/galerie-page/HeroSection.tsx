import React from "react";
import Image from "next/image";
import SplitText from "../ui/SplitText";
import fontTitle from "@/lib/font";

const HeroSection = () => (
  <section className="min-h-screen relative flex items-center justify-center text-white">
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .contact-hero-text * {
            line-height: 1.2 !important;
          }
        `,
      }}
    />
    <div className="absolute inset-0 w-full h-full">
      <Image
        src="/Galeriee/Chapitre 01/IMG_8414-Migliorato-NR.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-main/70 via-black/40 to-main/60"></div>
    </div>

    <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-24 contact-hero-text">
      <div className="flex flex-col gap-2 mx-auto text-center mb-8">
        <SplitText
          text="Découvrez en images la première "
          className={`text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-white ${fontTitle.className}`}
          delay={40}
          duration={1.4}
          ease="power4.out"
          splitType="chars"
          from={{
            opacity: 0,
            y: 30,
            scale: 0.95,
            rotationX: -15,
          }}
          to={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
          }}
          threshold={0.2}
          rootMargin="-80px"
          textAlign="center"
        />
        <SplitText
          text="phase livrée de Clé Blanche."
          className={`text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide text-white ${fontTitle.className}`}
          delay={60}
          duration={1.4}
          ease="power4.out"
          splitType="chars"
          from={{
            opacity: 0,
            y: 35,
            scale: 0.92,
            rotationX: -20,
          }}
          to={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
          }}
          threshold={0.2}
          rootMargin="-80px"
          textAlign="center"
        />
      </div>
      <div className="flex flex-col gap-2">
        <SplitText
          text="symbole de rigueur, d'excellence et raffinement."
          className={`text-lg md:text-xl lg:text-2xl font-extralight tracking-wider max-w-4xl mx-auto leading-relaxed ${fontTitle.className} font-semibold`}
          delay={80}
          duration={1.2}
          ease="power3.out"
          splitType="chars"
          from={{
            opacity: 0,
            y: 25,
            scale: 0.98,
          }}
          to={{
            opacity: 0.9,
            y: 0,
            scale: 1,
          }}
          threshold={0.2}
          rootMargin="-80px"
          textAlign="center"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;

//  <SplitText
//   text="Galerie"
//   className={`text-6xl md:text-8xl lg:text-9xl font-semibold mb-8 text-white ${fontTitle.className}`}
//   delay={80}
//   duration={1.8}
//   ease="power3.out"
//   splitType="chars"
//   from={{
//     opacity: 0,
//     y: 15,
//     scale: 1.02
//   }}
//   to={{
//     opacity: 1,
//     y: 0,
//     scale: 1
//   }}
//   threshold={0.1}
//   rootMargin="-100px"
//   textAlign="center"
//   />
