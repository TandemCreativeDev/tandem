"use client";

import { useState } from "react";
import Image from "next/image";

export default function TeamSection() {
  const [activeImage, setActiveImage] = useState(100);
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
            <div className="flex flex-col">
              <button>
                <div
                  className={`transition-all duration-700 ${
                    activeImage === 0
                      ? "w-[500px] h-[500px]"
                      : activeImage === 1
                        ? "w-[380px] h-[380px]"
                        : "w-[400px] h-[400px]"
                  }`}
                >
                  <Image
                    src="/portraits/portrait-jack.jpg"
                    alt="Portrait of Jack, one of the Tandem founders"
                    layout="intrinsic"
                    width={500}
                    height={500}
                    onMouseEnter={() => setActiveImage(0)}
                  />
                </div>
              </button>
              <p>Jack Casstles-Jones</p>
              <p>Co-Founder \ Full-Stack Developer</p>
            </div>
            <div className="flex flex-col">
              <button>
                <div
                  className={`transition-all duration-700 ${
                    activeImage === 1
                      ? "w-[500px] h-[500px]"
                      : activeImage === 0
                        ? "w-[380px] h-[380px]"
                        : "w-[400px] h-[400px]"
                  }`}
                >
                  <Image
                    src={`/portraits/portrait-max.jpg`}
                    alt="Portrait of Jack, one of the Tandem founders"
                    layout="intrinsic"
                    width={500}
                    height={500}
                    onMouseEnter={() => setActiveImage(1)}
                  ></Image>
                </div>
              </button>
              <p className="text-right">Maxime Downe</p>
              <p className="text-right">Co-Founder \ Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
