"use client";
// BackgroundVideo.tsx
import React from "react";
import LazyVideo from "../ui/LazyVideo";

const BackgroundVideo: React.FC = () => {
  // Use LazyVideo so the heavy media sources are only added when the element
  // intersects the viewport. Keep the container absolutely positioned.
  const sources = [
    { src: "/CLE BLANCHE_compressed.webm", type: "video/webm" },
    { src: "/bg-background-banner.mp4", type: "video/mp4" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <LazyVideo
        className="w-full h-full object-cover"
        sources={sources}
        preload="none"
        muted
        loop
        playsInline
        autoPlay
        lazyAutoPlay={true}
        rootMargin="200px"
        threshold={0.05}
      >
        Your browser does not support the video tag.
      </LazyVideo>
    </div>
  );
};

export default BackgroundVideo;
