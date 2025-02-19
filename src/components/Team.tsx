"use client";

import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

export default function TeamSection() {
  const [activeImage, setActiveImage] = useState(0);
  const bigSize = 500;
  const smallSize = 300;
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
          <div className="flex gap-10 items-end font-tandem-mono uppercase text-white">
            <div className="flex flex-col">
              <Image
                src={`/portraits/portrait-jack.jpg`}
                alt="Portrait of Jack, one of the Tandem founders"
                height={activeImage === 0 ? bigSize : smallSize}
                width={activeImage === 0 ? bigSize : smallSize}
                onClick={() => setActiveImage(0)}
              ></Image>
              <p>Jack Casstles-Jones</p>
              <p>Co-Founder \ Full-Stack Developer</p>
            </div>
            <div className="flex flex-col">
              <Image
                src={`/portraits/portrait-max.jpg`}
                alt="Portrait of Jack, one of the Tandem founders"
                height={activeImage === 1 ? bigSize : smallSize}
                width={activeImage === 1 ? bigSize : smallSize}
                onClick={() => setActiveImage(1)}
              ></Image>
              <p>Maxime Downe</p>
              <p>Co-Founder \ Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
