"use client";

import fontTitle from "@/lib/font";
import { Leaf, MapPin, Building2, Gem, Sun, Trees } from "lucide-react";

const features = [
  {
    title: (
      <>
        Une expérience inédite faite de luxe
        <br />
        et d’habitat durable
      </>
    ),
    description:
      "Un raffinement qui s’inscrit dans le temps une construction durable, élaborée pour que le chez vous de demain soit toujours identique à celui d’aujourd’hui.",
    icon: Leaf,
  },
  {
    title: "Un emplacement exceptionnel au cœur de Souissi",
    description:
      "Un cadre de vie sans équivalent à Rabat, dans un quartier prestigieux, promesse de sérénité et de douceur de vivre, loin du tumulte de la ville et pourtant si proche.",
    icon: MapPin,
  },
  {
    title: "Appartements et penthouses",
    description:
      "Des volumes épurés et fonctionnels inondés de lumière au style intemporel. Un large éventail de surfaces allant de 120 à 412 m².",
    icon: Building2,
  },
  {
    title: "Matériaux d'exception et finitions haut standing",
    description:
      "Marbre, pierres nobles, domotique, climatisation centralisée… des aménagements contemporains de très haute qualité.",
    icon: Gem,
  },
  {
    title: "De vastes et lumineuses terrasses",
    description:
      "Pensées comme de véritables espaces de vie, les terrasses sont dotées de vastes baies vitrées coulissantes qui se ferment et s’ouvrent au gré des saisons. ",
    icon: Sun,
  },
  {
    title: "Un environnement et apaisant",
    description:
      "Jardin paysagé où il fait bon s’assoir à l’ombre des pergolas, fraîcheur des fontaines, beauté des sculptures de Jamil Bennani, aire de jeux pour les enfants, salle de fitness… vous êtes bien à Clé Blanche.",
    icon: Trees,
  },
];

const FeaturesGrid = () => {
  return (
    <div
      className="py-12 md:py-18 px-4 bg-fixed"
      style={{
        backgroundImage: `url("/inter.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        data-aos="fade-up"
        className={`text-center text-3xl md:text-[58px] text-white mb-8 md:mb-12 px-4 ${fontTitle.className}`}
      >
        Clé Blanche Chapitre II
      </h2>
      <div className=" grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 container mx-auto  text-base ">
        {features.map((feature, i) => (
          <div
            key={i}
            data-aos="fade-right"
            className="flex flex-col items-center justify-center gap-1 md:gap-2 p-3 md:p-4  shadow-sm bg-white hover:shadow-md transition-shadow duration-300 h-full text-center"
          >
            <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white bg-main p-1.5 flex-shrink-0" />
            <h3 className="text-sm md:text-[20px] font-semibold leading-none text-center">
              {feature.title}
            </h3>
            <p className="text-sm md:text-[20px]  text-gray-600 leading-relaxed text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
