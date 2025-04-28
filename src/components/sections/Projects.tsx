"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect, useCallback } from "react";
import nav_items from "@/data/nav_items.json";
import projects from "@/data/projects.json";
import ProjectModal from "@/components/ui/ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setModalVisible(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);

    setTimeout(() => {
      setModalVisible(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      const mainContent = document.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const originalTabIndices = new Map();

      mainContent.forEach((element) => {
        if (element.closest('[role="dialog"]')) return;

        originalTabIndices.set(element, element.getAttribute("tabindex"));
        element.setAttribute("tabindex", "-1");
      });

      return () => {
        mainContent.forEach((element) => {
          const originalValue = originalTabIndices.get(element);
          if (originalValue === null) {
            element.removeAttribute("tabindex");
          } else if (originalValue !== undefined) {
            element.setAttribute("tabindex", originalValue);
          }
        });
      };
    }
  }, [isModalOpen]);

  return (
    <section id={nav_items[3]} className="relative">
      <div className="absolute left-0 top-0 h-full w-full">
        <div
          className={clsx(
            "absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black via-transparent to-black",
            projects[selectedProject].title === "things we do"
              ? ""
              : "opacity-75"
          )}
        ></div>
        {projects.map((project, index) => (
          <Image
            key={`project-image-${index}`}
            fill
            priority
            sizes="100vw"
            className={clsx(
              "absolute left-0 top-0 -z-50",
              selectedProject === index ? "opacity-100" : "opacity-0"
            )}
            style={{
              objectFit: "cover",
            }}
            alt={`Mockup of ${project.title}`}
            src={`/projects/${project.src}.jpg`}
          />
        ))}
      </div>
      <div className="w-10/12 m-auto relative flex h-screen grid-cols-12 flex-col py-28 md:grid md:w-full md:items-start">
        <h2 className="col-span-1 col-start-3 font-tandem-mono-medium text-xs uppercase text-white">
          ■ {nav_items[3]}
        </h2>
        <div className="z-30 flex flex-col pt-10 md:col-span-3 md:col-start-10 md:pt-0">
          <ul role="navigation">
            {projects.map((project, index) => {
              return (
                <li key={index} className="relative list-non">
                  <button
                    key={`project-${index}`}
                    onMouseEnter={() => setSelectedProject(index)}
                    onFocus={() => setSelectedProject(index)}
                    onClick={openModal}
                    aria-label={`Website for ${project.title}`}
                    role="button"
                    className={clsx(
                      "font-tandem-medium text-start text-3xl uppercase ",
                      {
                        "text-white ": selectedProject === index,
                        "text-gray-300 hover:text-gray-200":
                          selectedProject !== index,
                      }
                    )}
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {modalVisible && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={projects[selectedProject].title}
          description={projects[selectedProject].description}
          services={projects[selectedProject].services}
          githubUrl={projects[selectedProject].githubUrl}
          websiteUrl={projects[selectedProject].websiteUrl}
        />
      )}
    </section>
  );
}
