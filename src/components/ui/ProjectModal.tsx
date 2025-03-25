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
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  // Focus trap implementation
  useEffect(() => {
    if (!isOpen) return;

    // Store the element that had focus before opening the modal
    const previouslyFocusedElement = document.activeElement as HTMLElement;

    const getFocusableElements = () => {
      // This function ensures we get the latest DOM state
      return Array.from(
        modalRef.current?.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) || []
      ) as HTMLElement[];
    };

    // Set initial focus after a small delay to ensure the modal is fully rendered
    setTimeout(() => {
      // Always prioritize the input field if prompt is shown
      if (showPrompt && inputRef.current) {
        inputRef.current.focus();
      } else if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      } else {
        const elements = getFocusableElements();
        if (elements.length > 0) {
          elements[0].focus();
        }
      }
    }, 50);

    const handleTabKey = (e: KeyboardEvent) => {
      // Only process tab navigation if the modal is open
      if (!isOpen) return;

      if (e.key === "Tab") {
        // Get fresh references to focusable elements
        const elements = getFocusableElements();
        if (elements.length === 0) return;

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        // If shift + tab and focus is on first element, move to last element
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        // If tab and focus is on last element, move to first element
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
        // If we detect focus is outside the modal, bring it back
        else if (!modalRef.current?.contains(document.activeElement)) {
          e.preventDefault();
          // If tab was going forward, focus first element; otherwise focus last
          if (e.shiftKey) {
            lastElement.focus();
          } else {
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
      // Restore focus when modal closes
      if (previouslyFocusedElement && previouslyFocusedElement.focus) {
        previouslyFocusedElement.focus();
      }
    };
  }, [isOpen, showPrompt]);

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

  // Manage document body overflow
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
    const normalizedInput = userInput.trim().toLowerCase();

    if (["y", "yes"].includes(normalizedInput) && websiteUrl) {
      window.open(websiteUrl, "_blank", "noopener,noreferrer");
    } else if (["n", "no"].includes(normalizedInput)) {
      onClose();
    }

    setUserInput("");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 font-tandem-mono-regular"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
        tabIndex={-1}
      />

      <div
        ref={modalRef}
        className={clsx(
          "relative bg-gray-900 bg-opacity-50 rounded-md overflow-hidden shadow-gray-700 shadow-glow border border-gray-400",
          "w-11/12 md:w-9/12 lg:w-7/12 h-4/5 md:h-auto max-h-[85vh]",
          "flex flex-col"
        )}
      >
        {/* Terminal header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <div
            id="modal-title"
            className="font-tandem-mono-regular uppercase text-white text-xs"
          >
            tandem/{title}
          </div>
          <button
            ref={closeButtonRef}
            className="w-3 h-3 rounded-full bg-gray-400 border border-white hover:bg-gray-500"
            onClick={onClose}
            aria-label="Close modal"
            role="button"
            tabIndex={0}
          ></button>
        </div>

        {/* Terminal body */}
        <div className="p-4 md:p-6 text-white flex-col">
          <p className="text-white mb-4">
            ❯
            <span className="text-gray-400 aria-hidden=true">
              {" "}
              cat project_details.txt{" "}
            </span>
            --description
          </p>
          <p className="mt-1 pl-2 border-l-2 border-white mb-6">
            {description}
          </p>
          <p className="text-white mb-4">
            ❯
            <span className="text-gray-400 aria-hidden=true">
              {" "}
              cat project_details.txt{" "}
            </span>
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
              <p className="flex items-center mb-2" aria-hidden="true">
                <span className="text-black bg-gray-400 px-2">
                  ~/tandem/{title.toLowerCase().replace(/\s+/g, "-")}
                </span>
                <span className="text-black bg-green-600 px-2">main</span>{" "}
              </p>
              <div className="flex items-left">
                <label htmlFor="visit-website" className="text-white pr-2">
                  ❯ Would you like to visit the website? [y/n]
                </label>
                <div className="relative flex items-center">
                  <span
                    className={`h-4 w-2 bg-white my-1 absolute left-0 ${
                      cursorVisible &&
                      document.activeElement === inputRef.current
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  ></span>
                  <input
                    ref={inputRef}
                    id="visit-website"
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    className="bg-transparent border-none outline-none text-gray-400 w-12 focus:ring-0 pl-3"
                    autoFocus
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
