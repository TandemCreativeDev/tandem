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
    <section id="work" className="relative">
      <div className="absolute left-0 top-0 h-full w-full">
        <div
          className={clsx(
            "absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black via-transparent to-black",
            projects[selectedProject].title === "things we do"
              ? ""
              : "opacity-75"
          )}
        ></div>
        <Image
          fill
          sizes="100vw" // Important for responsiveness/fill={true}
          className="absolute left-0 top-0 -z-50"
          style={{ objectFit: "cover" }} // Ensures the image covers the entire container
          alt={`Mockup of ${projects[selectedProject].title}`}
          src={`/projects/${projects[selectedProject].src}.jpeg`}
        ></Image>
      </div>
      <div className="w-10/12 m-auto relative flex h-screen grid-cols-12 flex-col py-28 md:grid md:w-full md:items-start">
        <h2 className="col-span-1 col-start-3 font-tandem-mono-medium text-xs uppercase text-white">
          ■ Projects
        </h2>
        <div className="z-30 flex flex-col pt-10 md:col-span-3 md:col-start-10 md:pt-0">
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
                  }
                )}
              >
                {project.title}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
