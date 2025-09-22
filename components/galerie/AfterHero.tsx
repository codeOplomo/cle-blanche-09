import React from 'react';
import fontTitle from '@/lib/font';

const AfterHero: React.FC = () => {
  return (
    <section className="pt-12 bg-white">
      <div className="container mx-auto max-w-4xl">
        <p className={`text-sm md:text-[20px] text-center leading-relaxed text-main-black `}>
          Au début était une vision. Aujourd’hui, Clé Blanche est une réalité, celle d’une résidence
          d’une élégante modernité, mariant subtilement esthétique contemporaine et classicisme raffiné, servie
          par de très belles matières brutes et la présence d’un jardin paysagé agrémenté d’une fontaine.
          Une construction durable, pensée pour que le chez-vous de demain soit toujours identique à celui d’aujourd’hui
        </p>
      </div>
    </section>
  );
};

export default AfterHero;
