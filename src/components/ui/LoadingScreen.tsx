"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after the page has fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // Small delay to ensure smooth transition
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

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
      <h1 className="text-8xl uppercase text-white font-tandem-mono-regular ">
        loading
      </h1>
    </div>
  );
}
