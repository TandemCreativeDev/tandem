"use client";
import { useState, useEffect, useCallback } from "react";
import nav_items from "@/data/nav_items.json";
import projects from "@/data/projects.json";
import ProjectModal from "@/components/ui/ProjectModal";
import MobileProjectImages from "../ui/MobileProjectImages";
import DesktopProjectImages from "../ui/DesktopProjectImages";

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
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
    <section id={nav_items[3]} className="relative z-20 bg-black">
      <div className="w-10/12 m-auto relative flex md:h-screen grid-cols-12 flex-col py-10 md:py-28 md:grid md:w-full md:items-start">
        <h2 className="col-span-1 col-start-3 font-tandem-mono-medium text-xs uppercase text-white">
          ■ {nav_items[3]}
        </h2>
        <DesktopProjectImages
          selectedProject={selectedProject}
          openModal={openModal}
          setSelectedProject={setSelectedProject}
        />
        <MobileProjectImages
          selectedProject={selectedProject}
          openModal={openModal}
          setSelectedProject={setSelectedProject}
        />
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
