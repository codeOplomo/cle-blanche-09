"use client";

import Section01 from "@/components/chapitre-2-page/Section01";
import Section02 from "@/components/chapitre-2-page/Section02";
import Section04 from "@/components/chapitre-2-page/Section04";
import SplitText from "@/components/ui/SplitText";
import FormContact from "@/components/ui/FormContact";
import fontTitle from "@/lib/font";
import { Phone } from "lucide-react";
import React from "react";

const Chapitre2Page = () => {
  return (
    <div>
      <section className="min-h-screen relative flex items-center justify-center text-white pt-16 md:pt-24">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .contact-hero-text * {
            line-height: 1.2 !important;
          }
          @media (max-width: 640px) {
            .contact-hero-text * {
              line-height: 1.1 !important;
            }
          }
        `,
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-hero-2 bg-cover bg-center" />

        <div className="relative z-10 text-center px-4 sm:px-5 max-w-4xl mx-auto contact-hero-text">
          <div className="flex flex-col gap-2 mx-auto text-center mb-6 md:mb-8">
            <SplitText
              text="Appartements et penthouses"
              className={`text-2xl sm:text-4xl md:text-5xl font-light tracking-wide text-white ${fontTitle.className}`}
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
              text="d'exception"
              className={`text-2xl sm:text-4xl md:text-5xl font-medium tracking-wide text-white ${fontTitle.className}`}
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

          <div className="flex flex-col gap-2 px-2">
            <SplitText
              text="Dans un environnement exclusif"
              className={`text-lg md:text-xl lg:text-2xl font-extralight tracking-wider max-w-4xl mx-auto leading-relaxed ${fontTitle.className} font-semibold`}
              delay={60}
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-12 px-4">
            <button
              onClick={() => {
                const formSection = document.getElementById("contact-form");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-2 rounded-md border-main border text-white bg-main hover:bg-transparent hover:text-white group duration-300 ease-in-out transition-all text-sm sm:text-base"
            >
              <div className="h-7 w-7 sm:h-8 sm:w-8 p-1.5 flex justify-center items-center rounded-full bg-main text-main-black group-hover:bg-main group-hover:text-white">
                <Phone size={16} className="sm:w-auto" />
              </div>
              Demander une visite privée
            </button>
          </div>
        </div>
      </section>
      <Section01 />
      <Section02 />
      <Section04 />

      <div id="contact-form">
        <FormContact />
      </div>
    </div>
  );
};

export default Chapitre2Page;