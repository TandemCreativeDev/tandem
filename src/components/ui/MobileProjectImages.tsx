"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";
import nav_items from "@/data/nav_items.json";
import projects from "@/data/projects.json";
import ProjectModal from "@/components/ui/ProjectModal";
export default function MobileProjectImages({ selectedProject }) {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <div
        className={clsx(
          "absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black via-transparent to-black",
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
  );
}
