"use client";
// BackgroundVideo.tsx
import React, { useRef } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        //   preload="none"
        className="w-full h-full object-cover"
      >
        <source src="https://cle-blance-09-ua53.vercel.app/main-video.webm" type="video/webm" />

        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
