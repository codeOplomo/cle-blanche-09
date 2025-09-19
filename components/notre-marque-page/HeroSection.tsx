"use client";
import { Phone } from "lucide-react";
import React from "react";
import fontTitle from "@/lib/font";
import Link from "next/link";
import SplitText from "../ui/SplitText";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center text-white">
      {/* small CSS tweaks to avoid mid-word breaks and limit the text width */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* ensure the animated spans don't break a word in half */
          .contact-hero-text * { line-height: 1.2 !important; }
          
          /* when SplitText splits into words, keep each word together */
          .contact-hero-text .split-word { display: inline-block; white-space: nowrap; }
          
          /* prevent browser hyphenation and awkward breaks */
          .contact-hero-text { word-break: normal; overflow-wrap: normal; hyphens: none; }
        `,
        }}
      />
      
      <div className="absolute inset-0 w-full h-full bg-hero-chapitre2" />
      
      {/* limit the width of the texts so they don't take all the horizontal space */}
      <div className="relative z-10 text-center px-5 max-w-6xl mx-auto pt-24 contact-hero-text">
  <div className="flex flex-col gap-0 mx-auto text-center mb-8">
          {/* Use `splitType="words"` so SplitText won't allow breaks inside a word.
              Each word will be wrapped into a span with class `split-word` (you may need to
              configure SplitText to add this class on word splits — if it doesn't, the CSS
              selector can be adjusted to target the generated spans). */}
          
          <SplitText
            text="Bien plus qu’une Résidence"
            className={`text-2xl md:text-4xl lg:text-[58px] font-light tracking-wide text-white ${fontTitle.className}`}
            delay={40}
            duration={1.4}
            ease="power4.out"
            splitType="words"
            from={{ opacity: 0, y: 30, scale: 0.95, rotationX: -15 }}
            to={{ opacity: 1, y: 0, scale: 1, rotationX: 0 }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="center"
          />
          
          <SplitText
            text=" la marque référence du haut standing"
            className={`text-2xl md:text-4xl lg:text-[58px] font-light tracking-wide text-white w-full ${fontTitle.className}`}
            delay={40}
            duration={1.4}
            ease="power4.out"
            splitType="words"
            from={{ opacity: 0, y: 30, scale: 0.95, rotationX: -15 }}
            to={{ opacity: 1, y: 0, scale: 1, rotationX: 0 }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="center"
          />
        </div>
        
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Link href="/contact">
            <button className="flex items-center justify-center gap-2 px-6 py-2 border-main border text-white bg-main hover:bg-transparent hover:text-white group duration-300 ease-in-out transition-all">
              <div className="h-8 w-8 p-1.5 flex justify-center items-center  bg-main text-main-black group-hover:bg-main">
                <Phone />
              </div>
              Demander une visite privée
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;