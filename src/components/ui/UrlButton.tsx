import React from "react";
import { twMerge } from "tailwind-merge";

interface UrlButtonProps {
  label: string;
  url: string;
  project: string;
  className?: string;
}

export default function UrlButton({
  label,
  url,
  project,
  className = "",
}: UrlButtonProps) {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      role="link"
      aria-label={`${label} for ${project}`}
      onClick={handleClick}
      className={twMerge(
        "bg-zinc-700 text-white px-8 py-2 rounded-full uppercase hover:bg-zinc-800 font-tandem-mono-regular mr-4",
        className
      )}
    >
      {label}
    </button>
  );
}
