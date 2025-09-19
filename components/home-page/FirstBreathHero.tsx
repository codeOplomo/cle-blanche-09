import fontTitle from "@/lib/font";

const FirstBreathHero = () => {
  return (
    <>
      <div className="py-12 gap-10  z-10">
        <div className="flex flex-col gap-5 lg:w-3/4 text-center my-4 container mx-auto text-sm md:text-[20px] px-4">
          <h2
            data-aos="fade-up"
            className={`text-3xl md:text-[58px]  text-main-black ${fontTitle.className}`}
          >
            Saraya Holding & A.Lazrak Group
            <span className="block">Un partenariat d’excellence</span>
          </h2>
          <div
            className="flex flex-col gap-3 md:gap-2 text-black mt-3 md:mt-5 pb-12 w-full max-w-4xl mx-auto"
            data-aos="fade-right"
          >
            <p>
              L’innovation et l’authenticité ne sont pas des choix. Elles sont
              inscrites dans l’âme de ceux qui font cette marque. Chaque jour,
              nos mains bâtissent, inventent, repoussent les frontières du
              possible. Autour de Clé Blanche, un pacte se noue : celui d’une
              exigence absolue. De cette alliance naissent des projets
              d’exception, où la qualité rencontre l’audace, où l’habitat se
              réinvente. Une vision partagée. Un engagement sans compromis.
            </p>
            <p>
              Une vision partagée. Un engagement sans compromis.
            </p>
          </div>
        </div>
        <div
          className="relative w-full h-[400px] md:h-[760px] bg-fixed
"
          style={{ backgroundImage: `url(/saraya.webp)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default FirstBreathHero;
