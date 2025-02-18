"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
export default function ProjectsSection() {
  const projects = [
    { title: "wedgy music", src: "wedgy" },
    { title: "clark's bowling club", src: "cbc" },
    { title: "things we do", src: "twd" },
    { title: "ruby kiwinda", src: "ruby" },
    { title: "itch film", src: "itch" },
  ];
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section
      id="projects"
      className="h-[1000px] relative w-full pt-10 grid grid-cols-12"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          className="-z-40 block"
          //width={1000}
          fill={true}
          height={0}
          alt="project"
          src={`/projects/${projects[selectedProject].src}.jpeg`}
        ></Image>
      </div>
      <h3 className="col-start-3 col-span-1">projects</h3>
      <div className=" col-start-8 col-span-3 flex flex-col z-30">
        {projects.map((project, index) => {
          return (
            <button
              key={`project-${index}`}
              onClick={() => setSelectedProject(index)}
              className={clsx("text-start text-3xl uppercase ", {
                "<text-white</text-white:w> ": selectedProject === index,
                "text-gray-900 hover:text-gray-300": selectedProject !== index,
              })}
            >
              {project.title}
            </button>
          );
        })}
      </div>
    </section>
  );
}
