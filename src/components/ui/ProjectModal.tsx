import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrls?: string[];
  description: string;
  services: string[];
  githubUrl?: string;
  websiteUrl?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  imageUrls = [],
  description,
  services,
  githubUrl,
  websiteUrl,
}: ModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const linkClasses =
    "flex items-center gap-2 rounded-md bg-black border-2 border-black px-3.5 py-2 font-tandem-mono-regular text-sm font-semibold uppercase text-white shadow-sm hover:bg-white hover:text-black focus:ring-2 focus:ring-inset focus:ring-gray-300 md:w-1/2";

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

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

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div
        className={clsx(
          "relative bg-black bg-opacity-50 rounded-lg overflow-y-auto",
          "w-10/12 h-10/12 md:w-8/12 md:h-auto max-h-screen"
        )}
      >
        <button
          onClick={onClose}
          className={twMerge(
            "absolute top-4 right-4 text-white",
            "hover:text-gray-300 transition-colors"
          )}
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>

        <div className="p-6 md:p-8 text-white">
          <h3 className="text-2xl font-tandem-condensed-medium uppercase md:text-3xl font-bold mb-6">
            {title}
          </h3>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {imageUrls.length > 0 && (
              <div className="md:w-1/2 relative">
                <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={imageUrls[currentImageIndex]}
                    alt={`${title} image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {imageUrls.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className={twMerge(
                          "absolute left-2 top-1/2 -translate-y-1/2",
                          "bg-black bg-opacity-50 rounded-full p-2 text-white",
                          "hover:bg-opacity-70 transition-all"
                        )}
                        aria-label="Previous image"
                      >
                        <FaArrowLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className={twMerge(
                          "absolute right-2 top-1/2 -translate-y-1/2",
                          "bg-black bg-opacity-50 rounded-full p-2 text-white",
                          "hover:bg-opacity-70 transition-all"
                        )}
                        aria-label="Next image"
                      >
                        <FaArrowRight size={20} />
                      </button>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {imageUrls.map((_, index) => (
                          <div
                            key={index}
                            className={clsx(
                              "w-2 h-2 rounded-full",
                              index === currentImageIndex
                                ? "bg-white"
                                : "bg-gray-400"
                            )}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            <div
              className={clsx(
                "text-gray-400",
                imageUrls.length > 0 ? "md:w-1/2" : "w-full"
              )}
            >
              <p>{description}</p>
              <br />
              <ul>
                {services.map((service, index) => (
                  <li
                    className="font-tandem-mono-regular uppercase"
                    key={index}
                  >
                    ■ {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {(githubUrl || websiteUrl) && (
            <div className="flex flex-col md:flex-row gap-4">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Repo for ${title}`}
                  role="link"
                  className={linkClasses}
                >
                  <FaGithub size={20} />
                  <span>GitHub Repository</span>
                </Link>
              )}

              {websiteUrl && (
                <Link
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Website for ${title}`}
                  role="link"
                  className={linkClasses}
                >
                  <FaExternalLinkAlt size={20} />
                  <span>Visit Website</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
