import React from "react";
import LazyVideo from "@/components/ui/LazyVideo";
// import fontTitle from "@/lib/font";

const Chapitre1Section = () => {
  return (
    <section className="pt-16 bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .video-container * {
            line-height: 1.2 !important;
          }
          
          .scroll-reveal-video {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-reveal-video.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        `,
        }}
      />

      {/* Text section */}
      {/* <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center min-h-[30vh]">
          <p
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-main-black mb-4 text-center ${fontTitle.className}`}
          >
            Clé Blanche a ouvert son histoire avec une première phase livrée,
            <br />
            symbole de rigueur, d&apos;excellence et de raffinement
          </p>
        </div>
      </div> */}

      {/* Full width video */}
      <div className="video-container w-full relative">
        <div className="w-full">
          <div className="w-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Lazy-load the video when the container scrolls into view */}
            <div>
              <LazyVideo
                className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] object-cover"
                preload="none"
                controls
                muted
                autoPlay
                loop
                playsInline
                lazyAutoPlay={true}
                sources={[{ src: '/CLE BLANCHE_compressed.webm', type: 'video/webm' }]}
              >
                <p>Your browser doesn&apos;t support HTML5 video.</p>
              </LazyVideo>
            </div>
          </div>
        </div>
      </div>

      {/* Reveal effect */}
      <script
        dangerouslySetInnerHTML={{
            __html: `
          if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');

                  // Try to load and autoplay any video inside the observed container.
                  try {
                    const video = entry.target.querySelector && entry.target.querySelector('video');
                    if (video) {
                      // make sure it's muted (browsers allow muted autoplay)
                      try { video.muted = true; } catch (e) {}
                      try { video.load(); } catch (e) {}
                      video.play && video.play().catch(() => {});
                    }
                  } catch (e) {
                    // ignore
                  }
                }
              });
            }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

            const initAnimation = () => {
              const videoContainer = document.querySelector('.video-container > div');
              if (videoContainer) {
                videoContainer.classList.add('scroll-reveal-video');
                observer.observe(videoContainer);
              }
            };

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initAnimation);
            } else {
              initAnimation();
            }
          }
        `,
        }}
      />
    </section>
  );
};

export default Chapitre1Section;
