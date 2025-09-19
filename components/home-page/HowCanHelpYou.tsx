"use client";
// import { Bed, Car, Ruler } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import fontTitle from "@/lib/font";

const HowCanHelpYou = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      id: 0,
      image: "/houses/APPARTEMENT-PLENITUDE-4.webp",
      title: "Un large éventail de surfaces",
      description:
        "Chaque espace respire, ouvert sur l'extérieur, baigné d'une clarté changeante. Sobres et épurés, nos intérieurs marient luxe discret et matériaux bruts dans une palette neutre, propice à l'expression personnelle.",
    },
    // {
    //   id: 1,
    //   image: "/houses/APPARTEMENT-PLENITUDE-3.webp",
    //   title: "APPARTEMENT PLÉNITUDE 3",
    //   info: {
    //     room: "2 chambres + salon",
    //     surface: "78 m² à 106 m²",
    //     parking: "2 places de parking titrées",
    //   },
    // },
  ];

  return (
    <div className="my-12 px-4">
      <div
        className="flex flex-col gap-3 items-center text-center my-8 md:my-12"
        data-aos="fade-up"
      >
        <h2
          className={`lg:text-[20px] lg:text-[40px] text-main-black ${fontTitle.className} leading-none`}
        >
          Une intimité préservée. Un large éventail de surfaces
        </h2>
        <p
          className={`md:text-lg lg:text-xl text-sm text-main-black`}
        >
          À Clé Blanche, l’espace respire. Devant chaque immeuble, de vastes
          étendues laissent <br /> le soleil tracer son chemin. Ici, l’intimité n’est
          pas un luxe, mais une évidence. Nos intérieurs sont de vastes espaces <br />
          apaisants, sobres et épurés, qui marient luxe discret et matériaux
          bruts.
        </p>
      </div>

      <div className="flex flex-col gap-2 relative" data-aos="fade-up">
        {data.map((item) => (
          <div
            key={item.id}
            className={`relative w-full ${
              isMobile ? "h-[400px]" : "h-[500px]"
            } rounded-md overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`}
            onMouseEnter={!isMobile ? () => setActiveCard(item.id) : undefined}
            onMouseLeave={!isMobile ? () => setActiveCard(null) : undefined}
            onClick={
              isMobile
                ? () => setActiveCard(activeCard === item.id ? null : item.id)
                : undefined
            }
          >
            {/* Background Image with Scale Animation */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                backgroundImage: `url(${item.image})`,
                transform: activeCard === item.id ? "scale(1.05)" : "scale(1)",
              }}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 ${
                activeCard === item.id ? "opacity-90" : "opacity-80"
              }`}
            />

            {/* Content Container */}
            <div className="absolute bottom-0 w-full p-4 md:p-8 space-y-3 md:space-y-4">
              {/* Title - Always Visible */}
            

              <Link href="/chapitre-2">
                <Button className="text-xs sm:text-sm md:text-lg lg:text-xl border border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 py-2 px-3 sm:py-3 sm:px-6 md:py-5 md:px-12 rounded-lg w-full sm:w-auto">
                  <span className="block xs:hidden">
                    Découvrez nos appartements
                  </span>
                  {/* <span className="hidden sm:block">
                    Laissez-vous guider dans nos résidences
                  </span> */}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowCanHelpYou;
