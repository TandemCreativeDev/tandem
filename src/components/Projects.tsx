"use client";
import clsx from "clsx";
import { useState } from "react";
export default function ProjectsSection() {
  const projects = [
    "wedgy music",
    "clark's bowling club",
    "thing we do",
    "ruby kiwinda",
  ];
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <>
      <div className="h-[1000px] w-full bg-gray-600  pt-10">
        <div className="h-1/4 flex justify-between w-3/4 m-auto ">
          <h3>projects</h3>
          <div className="flex flex-col">
            {projects.map((project, index) => {
              return (
                <button
                  key={`project-${index}`}
                  onClick={() => setSelectedProject(index)}
                  className={clsx("text-start text-3xl uppercase ", {
                    "<text-white</text-white:w> ": selectedProject === index,
                    "text-gray-400 hover:text-gray-300":
                      selectedProject !== index,
                  })}
                >
                  {project}
                </button>
              );
            })}
          </div>
        </div>
        <h4 className="text-7xl ml-96">{projects[selectedProject]}</h4>
      </div>
    </>
  );
}
