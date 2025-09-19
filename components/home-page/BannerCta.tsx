"use client";
import fontTitle from "@/lib/font";
import { Download } from "lucide-react";
import React, { useState } from "react";
import BrochureModal from "./BrochureModal";

const BannerCta = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div
      className=" my-24 bg-cover bg-fixed"
      style={{ backgroundImage: "url('/contact/IMAGE PLAN CLE BLANCHE.png')", height: '500px' }}
    >
      <div className="py-12 w-full h-full  bg-[#0000008c] transition-opacity duration-700">
        <div className="container mx-auto text-white px-5">
          <div className="flex flex-col gap-1 items-center text-center my-12 " data-aos="fade-up">
            <p className={`text-3xl md:text-[58px] text-center text-white ${fontTitle.className}`} style={{ lineHeight: 1.5 }}>
              <span>Deuxième et dernière phase</span>
              <br />
              <span style={{ display: 'block', marginTop: '-0.5rem' }}>Une opportunité unique!</span>
            </p>
            <h2 className="text-base mb-6 text-sm md:text-[20px] ">
              Un nouveau chapitre de Clé Blanche s’écrit
            </h2>

            <button
              className="flex items-center justify-center gap-2 px-6 py-2 border-main border font-bold bg-main hover:bg-transparent hover:text-white group duration-300 ease-in-out transition-all"
              onClick={() => setModalOpen(true)}
            >
              <Download className="h-8 w-8 p-1 bg-main text-white group-hover:bg-white group-hover:text-main " />
              Télécharger la brochure
            </button>
            <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCta;
