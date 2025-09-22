import React from "react";
import CountUp from "../ui/CountUp";
import fontTitle from "@/lib/font";

const Numbers = () => {
  const items = [
    {
      number: 7500,
      label: "m² d’espaces verts",
    },
    {
      number: 1200,
      label: "arbres et plantations",
    },
    {
      number: 20,
      label: "œuvres d’art ",
    },
  ];
  return (
    <div
      className="mt-24 bg-cover bg-center"
      style={{ backgroundImage: `url(/e01.webp)` }}
    >
      <div className="py-24 w-full h-full  bg-[#0000008c] transition-opacity duration-700">
        <div className="container mx-auto text-white px-5">
          <div
            className="flex flex-col gap-1 items-center text-center my-12"
            data-aos="fade-up"
          >
            {/* <h2 className="text-sm lg:text-lg">Clé Blanche Souissi</h2> */}
            <p
              className={`text-3xl md:text-[58px] font-semibold text-second ${fontTitle.className}`}
            >
              Un écrin de verdure<br/> promesse de sérénité.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 lg:divide-x-2 divide-white/80  lg:mt-24 lg:border-l-2 lg:border-r-2 lg:border-white/80">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 md:gap-5 justify-center items-center py-3 md:py-12 "
              >
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl lg:text-7xl text-white font-light">
                    +
                  </span>
                  <CountUp
                    from={0}
                    to={item.number}
                    separator=" "
                    direction="up"
                    duration={1}
                    className="text-5xl lg:text-7xl text-white font-light count-up-text"
                  />
                </div>
                <p className="text-xl md:text-3xl text-second mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
