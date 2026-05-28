"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import LinkButton from "@/components/ui/LinkButton";
import nav_items from "@/data/nav_items.json";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";

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
      <GoogleReviewBadge
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-8 right-8 z-20 hidden sm:flex items-end"
      />
      <div className="relative z-10 h-screen flex flex-col justify-center items-center pointer-events-none">
        <div className="relative flex flex-col items-center">
          <div
            className="absolute inset-0 -m-16 rounded-full bg-black/80 blur-3xl"
            aria-hidden="true"
          />
          <span className="relative pointer-events-auto text-white text-5xl sm:text-7xl max-w-[1000px] text-pretty text-center uppercase font-tandem-condensed-medium leading-tight">
            From discovery to deployment, <br /> we run in tandem with you
          </span>
          <span className="relative pointer-events-auto text-xl text-white w-10/12 xl:w-1/3 text-center mt-5 text-pretty font-tandem-regular">
            End to end full-stack development and AI engineering
          </span>
        </div>
        <LinkButton
          href="#contact"
          label="Get in touch"
          ariaLabel="Scroll to contact"
          onClick={(e) => e.stopPropagation()}
          className="relative pointer-events-auto mt-10 px-8 py-3"
        />
        <GoogleReviewBadge
          onClick={(e) => e.stopPropagation()}
          className="relative pointer-events-auto mt-6 sm:hidden items-center"
        />
      </div>
    </section>
  );
}
