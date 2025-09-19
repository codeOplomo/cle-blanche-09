"use client";

import fontTitle from "@/lib/font";
import React, { useState, useEffect } from "react";

const SectionArtiste = () => {
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
      image: "/artiste.webp",
      title: "La touche de l’Artiste",
      description: `"À chaque seuil franchi chez Clé Blanche, une de mes œuvres vous accueille. Suspendues comme des passages symboliques, mes sculptures invitent la lumière à dialoguer avec la matière. Ici, l’art ne se contente pas d’orner l’espace : il l’habite, accompagne la vie quotidienne des résidents et reflète l’harmonie ainsi que la sensibilité qui nourrissent l’esprit de Clé Blanche."`,
      architect: {
        name: "Jamil BENNANI",
      },
    },
  ];

  return (
    <div className="my-10 md:my-24 px-4 flex-1">
      <div
        className={`grid grid-cols-1 ${
          isMobile ? "flex-col" : "flex-row"
        } gap-2 relative`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className={`relative ${
              isMobile ? "h-64 w-full" : "h-[500px]"
            }  w-1/2 rounded-md overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              !isMobile && activeCard === item.id
                ? "w-full"
                : isMobile
                ? "w-full"
                : "w-full"
            }`}
            onMouseEnter={!isMobile ? () => setActiveCard(item.id) : undefined}
            onMouseLeave={!isMobile ? () => setActiveCard(null) : undefined}
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
            <div className="absolute bottom-0 w-full p-4 md:p-6 space-y-2" data-aos="fade-up">
              {/* Title - Always Visible */}
              <h2
                className={`text-lg md:text-3xl font-bold text-white drop-shadow-lg ${fontTitle.className}`}
              >
                {item.title}
              </h2>

              {/* Description - Always visible */}
              <div className="space-y-2">
                <p className="text-sm md:text-base text-white leading-relaxed">
                  {item.description}
                </p>
                <p className="text-sm md:text-base text-white">
                  {item.architect.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionArtiste;
