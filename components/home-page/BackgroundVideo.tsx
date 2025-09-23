"use client";
// BackgroundVideo.tsx
import React from "react";
import LazyVideo from "@/components/ui/LazyVideo";

const BackgroundVideo = () => {
  const src = "https://cleblanche-wine.vercel.app/bg-background-banner.mp4";

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <LazyVideo
        className="w-full h-full object-cover"
        preload="none"
        muted
        autoPlay
        loop
        playsInline
        lazyAutoPlay={true}
        sources={[{ src, type: 'video/mp4' }]}
      >
        Your browser does not support the video tag.
      </LazyVideo>
    </div>
  );
};

export default BackgroundVideo;
