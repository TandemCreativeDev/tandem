"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
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
      <Link
        href="#reviews"
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-1 border border-white/40 px-4 py-3 text-white transition-colors hover:border-white/70 hover:text-white/70"
      >
        <span className="text-sm tracking-widest" aria-hidden="true">
          ★★★★★
        </span>
        <span className="font-tandem-mono-regular text-xs uppercase tracking-widest">
          5.0 · Google
        </span>
      </Link>
      <div className="relative z-10 h-screen flex flex-col justify-center items-center pointer-events-none">
        <div className="relative flex flex-col items-center">
          <div
            className="absolute inset-0 -m-16 rounded-full bg-black/80 blur-3xl"
            aria-hidden="true"
          />
          <span className="relative pointer-events-auto text-white text-7xl max-w-[1000px] text-pretty text-center uppercase font-tandem-condensed-medium leading-tight">
            From discovery to deployment, <br /> we run in tandem with you
          </span>
          <span className="relative pointer-events-auto text-xl text-white w-10/12 xl:w-1/3 text-center mt-5 text-pretty font-tandem-regular">
            End to end full-stack development and AI engineering
          </span>
        </div>
        <Link
          href="#contact"
          onClick={(e) => e.stopPropagation()}
          className="relative pointer-events-auto mt-10 bg-white px-8 py-3 font-tandem-mono-regular text-sm uppercase text-black transition-colors hover:bg-gray-100"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
