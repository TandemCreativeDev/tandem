import React, { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";

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

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  services,
  websiteUrl,
}: ModalProps) {
  const [userInput, setUserInput] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle terminal cursor blinking
  useEffect(() => {
    if (!isOpen) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isOpen]);

  // Auto-focus the input when prompt appears
  useEffect(() => {
    if (showPrompt && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPrompt]);

  // Show the website prompt after a delay
  useEffect(() => {
    if (!isOpen) return;

    const promptTimer = setTimeout(() => {
      setShowPrompt(true);
    }, 500);

    return () => clearTimeout(promptTimer);
  }, [isOpen]);

  // Handle escape key
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalisedInput = userInput.trim().toLowerCase();

    if (["y", "yes"].includes(normalisedInput) && websiteUrl) {
      window.open(websiteUrl, "_blank", "noopener,noreferrer");
    } else if (["n", "no"].includes(normalisedInput)) {
      onClose();
    }

    setUserInput("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-tandem-mono-regular">
      <div
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={clsx(
          "relative bg-black bg-opacity-50 rounded-md overflow-hidden shadow-blue-800 shadow-glow border border-blue-500",
          "w-11/12 md:w-9/12 lg:w-7/12 h-4/5 md:h-auto max-h-[85vh]",
          "flex flex-col"
        )}
      >
        {/* Terminal header */}
        <div className="bg-blue-900 px-4 py-2 flex items-center justify-between">
          <div className="font-tandem-mono-regular uppercase text-white text-xs">
            tandem/{title}
          </div>
          <button
            className="w-3 h-3 rounded-full bg-gray-400 border border-white hover:bg-black"
            onClick={onClose}
          ></button>
        </div>

        {/* Terminal body */}
        <div className="p-4 md:p-6 text-white flex-col">
          <p className="text-white mb-4">
            ❯<span className="text-gray-400"> cat project_details.txt </span>
            --description
          </p>
          <p className="mt-1 pl-2 border-l-2 border-white mb-6">
            {description}
          </p>
          <p className="text-white mb-4">
            ❯<span className="text-gray-400"> cat project_details.txt </span>
            --services
          </p>
          <ul className="uppercase pl-2 mb-6">
            {services.map((service, index) => (
              <li key={index} className="text-white mb-1">
                ■ {service}
              </li>
            ))}
          </ul>

          {/* Interactive prompt */}
          {websiteUrl && showPrompt && (
            <form onSubmit={handleSubmit} className="flex flex-col items-start">
              <p className="flex items-center mb-2">
                <span className="text-black bg-gray-400 px-2">
                  ~/tandem/{title.toLowerCase().replace(/\s+/g, "-")}
                </span>
                <span className="text-black bg-green-600 px-2">main</span>{" "}
              </p>
              <div className="flex items-left">
                <label htmlFor="visit-website" className="text-white pr-2">
                  ❯ Would you like to visit the website? [y/n]
                </label>
                <span
                  className={`h-4 w-2 bg-white my-1 ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
                <input
                  ref={inputRef}
                  id="visit-website"
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  className="bg-transparent border-none outline-none text-gray-400 w-12 focus:ring-0"
                  autoFocus
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
