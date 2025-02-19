"use client";
import TeamPortrait from "./TeamPortrait";
import { useState } from "react";

export default function TeamSection() {
  const [activeImage, setActiveImage] = useState("");
  return (
    <section
      id="team"
      className="h-[1000px] w-full grid grid-cols-12 bg-black  pt-10"
    >
      <h2 className="uppercase text-white font-tandem-mono-medium text-xs col-start-3 col-span-1">
        ■ Team
      </h2>
      <div className="col-start-5 col-span-8">
        <p className="text-4xl font-tandem-condensed-medium uppercase text-gray-400 mb-20">
          <span className="text-white">Our dedicated team specialises</span> in
          creating impactful digital solutions for arts, music, and community
          focused projects.
        </p>
        <div className="col-start-5 col-span-8">
          <div className="flex gap-10 items-end font-tandem-mono uppercase text-white h-[550px]">
            <TeamPortrait
              teamMember={"Jack Casstles-Jones"}
              otherTeamMember={"Maxime Downe"}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
            <TeamPortrait
              teamMember={"Maxime Downe"}
              otherTeamMember={"Jack Casstles-Jones"}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
