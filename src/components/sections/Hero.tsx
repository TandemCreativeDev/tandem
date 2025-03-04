import Image from "next/image";

import nav_items from "@/data/nav_items.json";

export default function Hero() {
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
        />
      </div>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <span className="text-white text-7xl max-w-[1000px]  text-pretty -auto text-center uppercase font-tandem-condensed-medium leading-tight">
          Technology with purpose, impact with power.
        </span>
        <span className="text-xl text-white w-10/12 xl:w-1/3 text-center mt-5 text-pretty font-tandem-regular">
          At Tandem, we blend full-stack development with thoughtful,
          accessible, and aesthetically refined design
        </span>
      </div>
    </section>
  );
}
