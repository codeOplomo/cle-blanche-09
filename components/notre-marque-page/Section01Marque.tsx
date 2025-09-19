import React from "react";
// ...existing code...

const Section01Marque = () => {
  return (
    <div
      className="flex flex-col my-8 md:my-16 lg:my-12 gap-6 md:gap-10 container mx-auto text-center px-4 md:px-0"
      data-aos="fade-up"
    >

      {/* Reduced width of paragraph for better readability */}
      <p className="text-[20px] leading-relaxed md:leading-loose max-w-5xl mx-auto">
         Clé Blanche est la nouvelle marque Premium dédiée aux projets immobiliers très haut standing au Maroc,
 fruit d’un partenariat d’excellence entre Rachid Lazrak et Mouatassim Belghazi.
 Clé Blanche Souissi, premier projet emblématique de la marque, matérialise cette vision centrée autour de la qualité,
 de la recherche d’innovation et de l’expérience du nouvel habitat.
 Aujourd’hui, après la livraison des 239 appartements du premier chapitre de Clé Blanche Souissi à Rabat,
 un deuxième et dernier chapitre de 139 appartements est en cours de construction et, prochainement,
 Casablanca s’apprête à accueillir un projet Clé Blanche.
      </p>
    </div>
  );
};

export default Section01Marque;