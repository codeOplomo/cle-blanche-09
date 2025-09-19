import BannerCta from "@/components/home-page/BannerCta";
import FeaturesGrid from "@/components/home-page/FeaturesGrid";
import FirstBreathHero from "@/components/home-page/FirstBreathHero";
// import Faq from '@/components/home-page/Faq'
import GalerieImage from "@/components/home-page/GalerieImage";
import Hero from "@/components/home-page/Hero";
import HowCanHelpYou from "@/components/home-page/HowCanHelpYou";
import Numbers from "@/components/home-page/Numbers";
import Prensetation from "@/components/home-page/Prensetation";
import FormContact from "@/components/ui/FormContact";
// import Visit360 from '@/components/home-page/Visit360'
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <Prensetation />
      {/* Banner images en mode Hero */}

      <div
        className="relative w-full h-[400px] md:h-[760px] bg-fixed
"
        style={{ backgroundImage: `url(/galerie/slide-1.jpeg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <HowCanHelpYou />
      <Numbers />
      <FirstBreathHero />

      <FeaturesGrid />

      {/* <Visit360 /> */}
      <GalerieImage />

      <BannerCta />
      <div id="contact-form" data-aos="fade-up">
        <FormContact />
      </div>
      {/* <Faq /> */}
    </div>
  );
};

export default Page;
