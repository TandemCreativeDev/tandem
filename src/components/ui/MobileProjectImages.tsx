"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";
import nav_items from "@/data/nav_items.json";
import projects from "@/data/projects.json";
import ProjectModal from "@/components/ui/ProjectModal";
export default function MobileProjectImages({
  selectedProject,
  openModal,
  setSelectedProject,
}) {
  return (
    <div className="md:hidden text-white flex flex-col justify-center items-center">
      {projects.map((project, index) => (
        <div key={index} className="pt-10">
          <h3 className="uppercase text-2xl font-tandem-medium mb-2">
            {project.title}
          </h3>
          <Image
            priority
            sizes="100vw"
            height={300}
            width={380}
            alt={`Mockup of ${project.title}`}
            src={`/mobile/${project.src}.png`}
            onClick={() => {
              setSelectedProject(index);
              openModal();
            }}
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}
