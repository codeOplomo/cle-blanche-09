import React from "react";
import Image from "next/image";
import { Home, Maximize2, Car } from "lucide-react";
import fontTitle from "@/lib/font";
// import BackgroundVideo from "../home-page/BackgroundVideo";

const Section02: React.FC = () => {
  const apartments = [
    {
      title: "Appartement Plénitude 3",
      rooms: "2 chambres + salon",
      surface: "78 m² à 106 m²",
      image: "/chapitre2/Section02/appartemetn-pleniude-3.jpg",
      type: "Plénitude",
    },
    {
      title: "Appartement Plénitude 4",
      rooms: "3 chambres + salon",
      surface: "113 m² à 128 m²",
      image: "/chapitre2/Section02/appartemetn-pleniude-4.jpg",
      type: "Plénitude",
    },
    {
      title: "Appartement amplitude 4",
      rooms: "3 chambres + salon + chambre de personnel",
      surface: "140 m² à 184 m²",
      image: "/chapitre2/Section02/appartement-amplitude-4.jpg",
      type: "Amplitude",
    },
    {
      title: "Appartement amplitude 5",
      rooms: "4 chambres + salon + chambre de personnel",
      surface: "182 m² à 226 m²",
      image: "/chapitre2/Section02/appartement-amplitude-5.jpg",
      type: "Amplitude",
    },
    {
      title: "Penthouse 4",
      rooms: "3 chambres + salon + chambre de personnel",
      surface: "157 m² à 210 m²",
      image: "/chapitre2/Section02/penthouse-4.jpg",
      type: "Penthouse",
    },
    {
      title: "Penthouse 5",
      rooms: "4 chambres + salon + chambre de personnel",
      surface: "209 m² à 225 m²",
      image: "/chapitre2/Section02/penthouse-5.jpg",
      type: "Penthouse",
    },
  ];

  // const getTypeColor = (type: string) => {
  //   switch (type) {
  //     case "Plénitude":
  //       return "bg-blue-100 text-blue-800";
  //     case "Amplitude":
  //       return "bg-green-100 text-green-800";
  //     case "Penthouse":
  //       return "bg-amber-100 text-amber-800";
  //     default:
  //       return "bg-gray-100 text-gray-800";
  //   }
  // };

  return (
    <section className="py-20 bg-gray-50" style={{ backgroundColor: "#d5d5d5" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-gray-900 ${fontTitle.className}`}
          >
            Un confort infiniment durable
          </h2>

          <p className="max-w-2xl mx-auto text-base leading-relaxed">
  Nos intérieurs sont conçus pour durer, alliant confort et qualité
  exceptionnelle. Chaque matériau a été choisi pour sa résistance et
  son esthétique intemporelle, vous garantissant un espace agréable et
  pérenne au fil des années.
</p>

        </div>

        <div className="space-y-16" role="list" aria-label="List of apartments">
          {apartments.map((apartment, index) => (
            <article
              key={index}
              role="article"
              aria-label={apartment.title}
              className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={apartment.image}
                alt={apartment.title}
                fill
                className="object-cover w-full h-full"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* stronger overlay on small screens for contrast, slightly lighter on larger */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 sm:from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg ${fontTitle.className}`}
                >
                  {apartment.title}
                </h3>

                <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
                  {/* <span
                    className={`${fontTitle.className} px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm font-semibold ${getTypeColor(
                      apartment.type
                    )} shadow-lg`}
                  >
                    {apartment.type}
                  </span> */}

                  <span className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                    <Home className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                    {apartment.rooms}
                  </span>

                  <span className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                    {apartment.surface}
                  </span>

                  <span className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
                    <Car className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                    2 places de parking titrées
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section02;
