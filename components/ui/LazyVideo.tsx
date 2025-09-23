"use client";
import React, { useEffect, useRef, useState } from "react";

type Source = {
  src: string;
  type?: string;
};

type Props = React.ComponentPropsWithoutRef<'video'> & {
  sources?: Source[];
  src?: string; // fallback single src
  rootMargin?: string;
  threshold?: number | number[];
  lazyAutoPlay?: boolean; // whether to attempt autoplay when visible
};

const LazyVideo: React.FC<Props> = ({
  sources,
  src,
  rootMargin = '0px',
  threshold = 0.1,
  lazyAutoPlay = true,
  preload = 'none',
  className,
  poster,
  muted,
  autoPlay,
  loop,
  controls,
  playsInline,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoadedSrc, setHasLoadedSrc] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    // If any source is already set server-side, consider it loaded
    if (el.querySelector('source')) {
      setHasLoadedSrc(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  useEffect(() => {
    if (!isVisible || hasLoadedSrc) return;
    const el = ref.current;
    if (!el) return;

    // add source elements when visible
    if (sources && sources.length > 0) {
      for (const s of sources) {
        const sourceEl = document.createElement('source');
        sourceEl.src = s.src;
        if (s.type) sourceEl.type = s.type;
        el.appendChild(sourceEl);
      }
    } else if (src) {
      const sourceEl = document.createElement('source');
      sourceEl.src = src;
      el.appendChild(sourceEl);
    }

    // trigger load
    try {
      el.load();
      setHasLoadedSrc(true);
      // autoplay attempt if requested and muted (browsers typically allow muted autoplay)
      if (lazyAutoPlay && (muted || el.muted) && (autoPlay || el.autoplay)) {
        el.play().catch(() => {
          // ignore play rejection
        });
      }
    } catch (e) {
      void e;
    }
  }, [isVisible, sources, src, hasLoadedSrc, lazyAutoPlay, muted, autoPlay]);

  return (
    <video
      ref={ref}
      preload={preload}
      className={className}
      poster={poster}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      controls={controls}
      playsInline={playsInline}
      {...rest}
    >
      {/* If someone passed children (like fallback <p>), render them */}
      {children}
    </video>
  );
};

export default LazyVideo;
