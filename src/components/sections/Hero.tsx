"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import nav_items from "@/data/nav_items.json";

const NodeGraph = dynamic(() => import("./NodeGraph"), { ssr: false });

export default function Hero() {
  const [seed, setSeed] = useState(0);

  return (
    <section
      id={nav_items[0]}
      className="relative h-screen overflow-hidden bg-black"
      onClick={() => setSeed((s) => s + 1)}
    >
      <h2 className="hidden">{nav_items[0]}</h2>
      <div className="absolute inset-0" aria-hidden="true">
        <NodeGraph seed={seed} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="relative z-10 h-screen flex flex-col justify-center items-center pointer-events-none">
        <span className="pointer-events-auto text-white text-7xl max-w-[1000px] text-pretty text-center uppercase font-tandem-condensed-medium leading-tight">
          From discovery to deployment, <br /> we run in tandem with you.
        </span>
        <span className="pointer-events-auto text-xl text-white w-10/12 xl:w-1/3 text-center mt-5 text-pretty font-tandem-regular">
          End to end full-stack development and AI engineering
        </span>
      </div>
    </section>
  );
}
