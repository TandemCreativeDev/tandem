"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."));
    }, 300);
    
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500",
        {
          "opacity-100": isLoading,
          "opacity-0 pointer-events-none": !isLoading,
        },
      )}
    >
      <div className="relative inline-block">
        <span className="text-4xl md:text-6xl lg:text-8xl uppercase text-white font-tandem-mono-regular">loading</span>
        <span className="text-4xl md:text-6xl lg:text-8xl uppercase text-white font-tandem-mono-regular absolute left-full">{dots}</span>
      </div>
    </div>
  );
}
