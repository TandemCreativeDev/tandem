"use client";
import TeamPortrait from "./TeamPortrait";
import { useState } from "react";

export default function TeamSection() {
  const [activeImage, setActiveImage] = useState("");
  return (
    <section id="team" className="bg-black">
      <div className="m-auto flex  w-10/12 grid-cols-12 flex-col py-28 md:grid  md:w-full">
        <h2 className="col-span-1 col-start-3 mb-10 font-tandem-mono-medium text-xs uppercase text-white md:mb-0">
          ■ Team
        </h2>
        <div className="col-span-8 col-start-5">
          <p className="font-tandem-condensed-medium text-4xl uppercase text-gray-400 md:mb-20">
            <span className="text-white">Our dedicated team specialises</span>{" "}
            in creating impactful digital solutions for arts, music, and
            community focused projects.
          </p>
          <div className="col-span-8 col-start-5">
            <div className="font-tandem-mono mt-20 flex  flex-col items-end gap-10 uppercase text-white md:mt-0 md:flex-row">
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
      </div>
    </section>
  );
}
