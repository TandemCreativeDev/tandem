"use client";
import Image from "next/image";
import clsx from "clsx";
import projects from "@/data/projects.json";
interface DesktopProjectImagesProps {
  selectedProject: number;
  setSelectedProject: (index: number) => void;
  openModal: () => void;
}

export default function DesktopProjectImages({
  selectedProject,
  setSelectedProject,
  openModal,
}: DesktopProjectImagesProps) {
  return (
    <>
      <div className="absolute left-0 top-0 z-30 hidden h-full w-full md:block">
        <div
          className={clsx(
            "absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black via-transparent to-black -z-10",
            projects[selectedProject].title === "things we do"
              ? ""
              : "opacity-75",
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
              selectedProject === index ? "opacity-100" : "opacity-0",
            )}
            style={{
              objectFit: "cover",
            }}
            alt={`Mockup of ${project.title}`}
            src={`/projects/${project.src}.jpg`}
          />
        ))}
      </div>

      <div className="z-40 mr-6 hidden flex-col pt-10 md:col-span-3 md:col-start-10 md:flex md:pt-0">
        <ul role="navigation">
          {projects.map((project, index) => {
            return (
              <li key={index} className="list-non relative">
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
                    },
                  )}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
