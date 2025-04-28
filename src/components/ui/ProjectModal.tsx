import React, { useEffect } from "react";
import UrlButton from "./UrlButton";

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
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`Project details: ${title}`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
        tabIndex={-1}
      />

      <div className="relative bg-zinc-950/90 rounded-xl overflow-hidden w-11/12 md:w-9/12 lg:w-7/12 max-h-[85vh] p-8 shadow-glow shadow-zinc-900">
        <div className="flex justify-between">
          <h2 className="text-white text-3xl uppercase mb-8 font-tandem-condensed-medium truncate">
            {title}
          </h2>
          <div className="flex-shrink-0">
            <button
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-transparent border-[0.75px] text-white hover:bg-white hover:text-zinc-950/90"
              onClick={onClose}
              aria-label="Close modal"
            >
              <span className="text-lg">X</span>
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
  );
}
