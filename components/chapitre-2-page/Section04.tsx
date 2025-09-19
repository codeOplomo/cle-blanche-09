"use client";
import React, { useRef, useState, useCallback } from "react";
import fontTitle from "@/lib/font";
import "react-before-after-slider-component/dist/build.css";

const Section04: React.FC = () => {
  const [percent, setPercent] = useState<number>(0.5);
  const [dragging, setDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const setPercentFromClientX = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const p = Math.max(0, Math.min(1, x / rect.width));
    setPercent(p);
  }, []);

  // Pointer event handlers (works for mouse + touch + stylus)
  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    // only primary button for mouse
    if ((e as React.PointerEvent).pointerType === "mouse" && e.button !== 0) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setPercentFromClientX(e.clientX);
  };

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!dragging) return;
    setPercentFromClientX(e.clientX);
  };

  const handlePointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    try {
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
    setDragging(false);
  };

  const handlePointerCancel: React.PointerEventHandler<HTMLDivElement> = () => {
    setDragging(false);
  };

  // keyboard accessibility
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const step = 0.05;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPercent((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPercent((p) => Math.min(1, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPercent(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPercent(1);
    }
  };

  // Derived values
  const percentPct = Math.round(percent * 100);

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-0 flex items-center overflow-hidden select-none"
      style={{ margin: "0 0 80px 0" }}
    >
      <div
        ref={sliderRef}
        // responsive heights: small screens small, desktop same as before
        className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[600px] rounded-2xl shadow-xl overflow-hidden flex items-center justify-center"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={() => setDragging(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Comparateur avant / après"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentPct}
        style={{ cursor: dragging ? "grabbing" : "ew-resize", touchAction: "none" }}
      >
        {/* Image avant (left) */}
        <img
          src="/penthouse111.jpeg"
          alt="Avant - vue extérieure du penthouse"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
        />

        {/* Image après (right) clipped from left by percent */}
        <img
          src="/interieurterrassepenthousesoirretouche01635mm-x-412mm300dpi.jpg"
          alt="Après - intérieur / terrasse"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{
            // clip left part proportional to percent
            clipPath: `inset(0 0 0 ${percentPct}%)`,
            WebkitClipPath: `inset(0 0 0 ${percentPct}%)`,
          }}
          draggable={false}
        />

        {/* Overlay gradient — stronger on small screens for contrast */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 sm:from-black/50 via-black/30 to-black/30" />

        {/* Draggable handle */}
        <div
          aria-hidden={false}
          className="absolute z-30 top-0 bottom-0 flex items-center justify-center"
          style={{ left: `${percentPct}%`, transform: "translateX(-50%)" }}
        >
          {/* visual bar */}
          <div
            className={`relative flex items-center justify-center`}
            style={{ width: 44, height: "100%" }}
          >
            {/* vertical bar */}
            <div
              className="w-[2px] h-full bg-white/90 shadow-lg"
              style={{ transform: "translateX(0)" }}
            />
            {/* round handle with larger hit area */}
            <div
              className="absolute -translate-y-1/2 top-1/2 bg-white rounded-full shadow-xl"
              style={{
                width: 44,
                height: 44,
                marginTop: -22,
                border: "3px solid rgba(0,0,0,0.12)",
              }}
            >
              {/* inner circle */}
              <div className="w-3 h-3 rounded-full bg-main m-auto mt-10" />
            </div>
          </div>
        </div>

        {/* Centered title */}
        <div
          data-aos="fade-up"
          className="absolute inset-0 flex items-center justify-center z-20 px-4 text-center"
        >
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-white leading-[1.08] drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] max-w-5xl mx-auto ${fontTitle.className}`}
            style={{ marginBottom: 0 }}
          >
            Le soleil pour invité
            <br />
            des premières lueurs du jour
            <br />
            au crépuscule
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section04;
