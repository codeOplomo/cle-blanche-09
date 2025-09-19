"use client";

import fontTitle from "@/lib/font";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const chapitre2Images = [
  "/Galeriee/Chapitre 02/E01.jpg",
  "/Galeriee/Chapitre 02/E02.jpg",
  "/Galeriee/Chapitre 02/E03.jpg",
  "/Galeriee/Chapitre 02/E04.jpg",
  "/Galeriee/Chapitre 02/SALLE DE SPORT.jpg",
];

const Chapitre2Section = () => {
  return (
    <section className="py-12" data-aos="fade-up">
      <div className="flex flex-col items-center justify-center">
        {/* Title */}
        <div className="w-full max-w-4xl mx-auto px-4">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-main-black mb-4 text-center ${fontTitle.className}`}
          >
            Un deuxième et dernier chapitre qui perpétue l&apos;esprit Clé Blanche phase II.
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Des espaces revisités, où chaque détail contribue à réécrire
            l&apos;art de vivre contemporain.
          </p>
        </div>

        {/* Swiper with navigation arrows */}
        <div className="w-full max-w-4xl mx-auto relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom-chapitre2",
              prevEl: ".swiper-button-prev-custom-chapitre2",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1440: { slidesPerView: 1 },
            }}
            className="w-full"
          >
            {chapitre2Images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-video">
                  <Image
                    src={src}
                    alt={`Chapitre 2 image ${idx + 1}`}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom-chapitre2 absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/70 hover:bg-white/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="swiper-button-next-custom-chapitre2 absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/70 hover:bg-white/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapitre2Section;
