"use client";
import clsx from "clsx";
import { useState } from "react";
export default function TeamSection() {
  const [activeImage, setActiveImage] = useState(0);
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
          <div className="flex gap-10 items-end font-tandem-mono uppercase">
            <div className="flex flex-col">
              <div
                onClick={() => setActiveImage(1)}
                className={clsx(`bg-yellow-400 cursor-pointer`, {
                  "h-[300px] w-[300px]": activeImage === 0,

                  "h-[500px] w-[500px]": activeImage === 1,
                })}
              ></div>
              <p>Jack Casstles-Jones</p>
              <p>Co-Founder \ Full-Stack Developer</p>
            </div>
            <div className="flex flex-col">
              <div
                onClick={() => setActiveImage(0)}
                className={clsx(`bg-yellow-400 cursor-pointer`, {
                  "h-[300px] w-[300px]": activeImage === 1,

                  "h-[500px] w-[500px]": activeImage === 0,
                })}
              ></div>
              <p>Maxime Downe</p>
              <p>Co-Founder \ Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
