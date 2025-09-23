import React from "react"; 
import fontTitle from "@/lib/font"; 
 
const Section01 = () => { 
  return ( 
    <div 
      className="flex flex-col my-8 md:my-16 lg:my-12 gap-6 md:gap-10 container mx-auto text-center px-4 md:px-0" 
      data-aos="fade-up" 
    > 
      <h3 
        className={`text-3xl md:text-[58px] font-light tracking-wide ${fontTitle.className}`}
      > 
        Prendre rendez-vous 
      </h3> 
 
      <p className="text-sm md:text-[20px] leading-[1.2] md:leading-[1.25] max-w-4xl mx-auto px-6 md:px-12 text-center"> 
        Situé à deux pas de la tranche I et du chantier de la tranche II, le 
        show-room Clé Blanche vous accueille dans un cadre raffiné. Nos 
        conseillers sont à votre écoute pour répondre à toutes vos questions et 
        organiser une visite privée. Pour prendre rendez-vous, remplissez le 
        formulaire ci-dessous ou contactez-nous par téléphone ou par courriel. 
      </p> 
    </div> 
  ); 
}; 
 
export default Section01;