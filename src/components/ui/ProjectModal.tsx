import React, { useEffect, useState, useCallback } from "react";
import UrlButton from "./UrlButton";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  services: string[];
  websiteUrl?: string;
  githubUrl?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  services,
  websiteUrl,
  githubUrl,
}: ModalProps) {
  const baseClasses =
    "absolute left-1/2 top-1/2 transform -translate-x-1/2 origin-center bg-white h-[1px] w-3 transition-all motion-reduce:transition-none duration-500 ease-in-out bg-white group-hover:bg-zinc-950/90";

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      setIsClosing(false);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`Project details: ${title}`}
    >
      <div
        className={clsx(
          "absolute inset-0 bg-transparent bg-opacity-60",
          "transition-all duration-1000",
          "motion-reduce:transition-none motion-reduce:backdrop-blur-sm",
          isClosing
            ? "opacity-0 backdrop-blur-none"
            : "opacity-100 backdrop-blur-sm"
        )}
        aria-hidden="true"
        onClick={handleClose}
        tabIndex={-1}
      />

      <div
        className={clsx(
          "relative bg-zinc-950/90 rounded-xl overflow-hidden backdrop-blur-lg",
          "w-11/12 md:w-9/12 lg:w-7/12 max-h-[85vh] p-8 shadow-glow shadow-zinc-900",
          "transition-all duration-300 ease-in-out",
          "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none",
          isClosing
            ? "opacity-0 scale-95 animate-scale-out motion-reduce:animate-none"
            : "opacity-100 scale-100 animate-scale-in motion-reduce:animate-none"
        )}
      >
        <div className="flex justify-between">
          <h2 className="text-white text-3xl uppercase mb-8 font-tandem-condensed-medium truncate">
            {title}
          </h2>
          <div className="flex-shrink-0">
            <button
              className="group relative flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-transparent border-[0.75px] hover:bg-white hover:text-zinc-950/90"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <div
                className={twMerge(baseClasses, "group-hover:rotate-45")}
              ></div>
              <div
                className={twMerge(baseClasses, "group-hover:-rotate-45")}
              ></div>
            </button>
          </div>
        </div>

        <p className="text-zinc-300 mb-6 text-lg">{description}</p>

        <div className="mb-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="w-3 h-3 bg-zinc-500 rounded-sm mr-4"></div>
              <span className="text-zinc-300 uppercase">{service}</span>
            </div>
          ))}
        </div>

        <div>
          {websiteUrl && (
            <UrlButton
              label="Visit Website"
              url={websiteUrl}
              project={title}
              className="mb-4 md:mb-0"
            />
          )}
          {githubUrl && (
            <UrlButton
              label="Inspect Code Repo"
              url={githubUrl}
              project={title}
            />
          )}
        </div>
      </div>
    </div>
  );
}
