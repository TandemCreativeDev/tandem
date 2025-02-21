"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
export default function ProjectsSection() {
  const projects = [
    { title: "clark's bowling club", src: "cbc" },
    { title: "itch film", src: "itch" },
    { title: "wedgy music", src: "wedgy" },
    { title: "things we do", src: "twd" },
    //{ title: "ruby kiwinda", src: "ruby" },
  ];
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section
      id="work"
      className="h-screen relative w-full pt-10 flex flex-col justfy-center items-center md:grid grid-cols-12"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          fill
          sizes="100vw" // Important for responsiveness/fill={true}
          className="absolute top-0 left-0 -z-50 brightness-50 md:brightness-100"
          style={{ objectFit: "cover" }} // Ensures the image covers the entire container
          alt={`Mockup of ${projects[selectedProject].title}`}
          src={`/projects/${projects[selectedProject].src}.jpeg`}
        ></Image>
      </div>
      <h2 className="uppercase text-white font-tandem-mono-medium text-xs col-start-3 col-span-1">
        ■ Projects
      </h2>
      <div className="pt-10 md:pt-0 md:col-start-10 md:col-span-3 flex flex-col z-30">
        {projects.map((project, index) => {
          return (
            <button
              key={`project-${index}`}
              onMouseEnter={() => setSelectedProject(index)}
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
          );
        })}
      </div>
    </section>
  );
}
