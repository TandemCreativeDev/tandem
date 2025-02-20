"use client";
import TeamPortrait from "./TeamPortrait";
import { useState } from "react";

export default function TeamSection() {
  const [activeImage, setActiveImage] = useState("");
  return (
    <div className="bg-black">
      <section
        id="team"
        className="h-[1530px] md:h-[1000px] w-10/12 m-auto md:w-full flex flex-col md:grid grid-cols-12 pt-10"
      >
        <h2 className="uppercase text-white font-tandem-mono-medium text-xs md:mb-0 mb-10 col-start-3 col-span-1">
          ■ Team
        </h2>
        <div className="col-start-5 col-span-8">
          <p className="text-4xl font-tandem-condensed-medium uppercase text-gray-400 md:mb-20">
            <span className="text-white">Our dedicated team specialises</span>{" "}
            in creating impactful digital solutions for arts, music, and
            community focused projects.
          </p>
          <div className="col-start-5 col-span-8">
            <div className="flex md:flex-row flex-col md:mt-0 mt-20 gap-10 items-end font-tandem-mono uppercase text-white h-[550px]">
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
    </div>
  );
}
