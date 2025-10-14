"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { decode } from "blurhash";

import nav_items from "@/data/nav_items.json";

const HERO_BLURHASH = "LQFq2y}uGE5REMNawJn%RQaeso$*";

function blurhashToBase64(blurhash: string, width = 32, height = 32): string {
  const pixels = decode(blurhash, width, height);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL("image/jpeg", 0.5);
}

export default function Hero() {
  const [blurDataURL, setBlurDataURL] = useState<string>("");

  useEffect(() => {
    setBlurDataURL(blurhashToBase64(HERO_BLURHASH, 32, 21));
  }, []);

  return (
    <section id={nav_items[0]}>
      <h2 className="hidden">{nav_items[0]}</h2>
      <div className="absolute h-screen w-screen top-0 left-0 -z-40 bg-black">
        <Image
          src={"/hero-img.jpg"}
          alt=""
          fill
          sizes="100vw"
          className="absolute top-0 left-0 -z-50  brightness-50"
          style={{ objectFit: "cover" }}
          priority={true}
          fetchPriority="high"
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL || undefined}
        />
      </div>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <span className="text-white text-7xl max-w-[1000px]  text-pretty -auto text-center uppercase font-tandem-condensed-medium leading-tight">
          Technology with purpose, impact with power
        </span>
        <span className="text-xl text-white w-10/12 xl:w-1/3 text-center mt-5 text-pretty font-tandem-regular">
          At Tandem, we blend full-stack development with thoughtful,
          accessible, and aesthetically refined design
        </span>
      </div>
    </section>
  );
}
