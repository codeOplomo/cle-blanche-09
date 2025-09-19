"use client";
import React from "react";
import fontTitle from "@/lib/font";
import Image from "next/image";

const Prensetation = () => {
  return (
    <div className="container mx-auto my-24 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
      <div data-aos="fade-up" className="flex flex-col gap-4 p-4 text-[16px]">
        <h2
          className={`lg:text-[20px] lg:text-[40px] font-semibold text-main-black ${fontTitle.className}`}
        >
          L&apos;Art de conjuguer style de vie  <br /> urbain et ambiance sereine
        </h2>
        {/* <p className={`text-2xl ${fontTitle.className}`}>
          L&apos;ultime chapitre s&apos;ouvre
        </p> */}
        <p>
          Nichée au cœur du quartier résidentiel prisé de Souissi, à deux pas du
          domaine Dar Essalam et du Royal Golf, Clé Blanche incarne un art de
          vivre rare, à la croisée du confort urbain et de l&apos;évasion
          naturelle.
        </p>
        <p>
          La première phase, aujourd&apos;hui livrée, témoigne de la promesse
          tenue : offrir un cadre de vie paisible, raffiné, et harmonieusement
          intégré dans un environnement préservé.
        </p>
        <p>
          Pensé comme un écrin de verdure, le projet conjugue architecture
          contemporaine, espaces ouverts et matériaux de qualité, pour créer des
          lieux de vie qui respirent la sérénité. Ici, l&apos;espace se vit
          pleinement : lumière naturelle, volumes généreux, circulation fluide
          entre intérieur et extérieur.
        </p>
        <p className={`text-2xl ${fontTitle.className}`}>Une continuité inspirée, un nouveau chapitre</p>
        <p>
          Dans la continuité de la première phase, le second chapitre Clé
          Blanche Souissi s&apos;inscrit dans la même philosophie
          d&apos;exigence, de discrétion et de bien-être. Chaque détail est
          pensé pour prolonger cette expérience résidentielle unique à Rabat.
        </p>
      </div>
      <div>
        <Image
          src={"/SiteWeb_TrancheII.jpg"}
          alt="Tranche 1"
          width={650}
          height={650}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Prensetation;
