"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  settings?: Partial<Parameters<typeof AOS.init>[0]>;
};

export default function AOSInit({ settings }: Props) {
  useEffect(() => {
    AOS.init({
      // set defaults, you can override via settings prop
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
      offset: 120,
      ...settings,
    });

    // optionally, could refresh on route change, etc.
    // AOS.refresh();
  }, [settings]);

  return null;
}
