"use client";
import Image from "next/image";
import projects from "@/data/projects.json";

interface MobileProjectImagesProps {
  selectedProject: number;
  openModal: () => void;
  setSelectedProject: (index: number) => void;
}

export default function MobileProjectImages({
  openModal,
  setSelectedProject,
}: MobileProjectImagesProps) {
  return (
    <div className="md:hidden text-white flex flex-col justify-center items-center">
      {projects.map((project, index) => (
        <div key={index} className="pt-10 w-full">
          {project.renderOnMobile ? (
            <h3 className="uppercase text-2xl font-tandem-medium mb-2">
              {project.title}
            </h3>
          ) : (
            <button
              onClick={() => {
                setSelectedProject(index);
                openModal();
              }}
              className="uppercase text-2xl font-tandem-medium mb-2 text-left hover:text-gray-300 transition-colors"
            >
              {project.title}
            </button>
          )}
          {project.renderOnMobile && (
            <Image
              priority
              sizes="100vw"
              height={300}
              width={380}
              alt={`Mockup of ${project.title}`}
              src={`/mobile/${project.src}.jpg`}
              onClick={() => {
                setSelectedProject(index);
                openModal();
              }}
              className="cursor-pointer"
            />
          )}
        </div>
      ))}
    </div>
  );
}