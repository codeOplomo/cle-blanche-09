"use client";
import fontTitle from "@/lib/font";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const chapitre2Images = [
  "/Galeriee/Appartement-temoin/IMG_7957-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_7974-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_7910-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_7920-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_8141-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_8154-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_8021-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_8109-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_8050-1.jpg",
  "/Galeriee/Appartement-temoin/IMG_8082-1.jpg",
];

const TemoinSection = () => {
  return (
    <section className="mb-8">
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        {/* Title */}
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-main-black mb-4 text-center ${fontTitle.className}`}
        >
          Notre appartement témoin
        </h2>
        <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl mb-8">
          {`Clé Blanche vous ouvre les portes de son appartement témoin. Un espace aménagé avec soin pour vous permettre de visualiser votre futur quotidien, de ressentir l'harmonie des volumes, la qualité des finitions et la chaleur des intérieurs.`}
        </p>

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
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
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
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/70 hover:bg-white/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg">
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

          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/70 hover:bg-white/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg">
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

export default TemoinSection;