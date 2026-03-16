import Image from "next/image";

import nav_items from "@/data/nav_items.json";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id={nav_items[1]}>
      <div className="m-auto flex w-10/12 flex-col gap-10 py-20 md:grid md:w-screen md:auto-rows-auto md:grid-cols-12 md:gap-0 md:py-28">
        <h2 className="col-span-1 col-start-3 font-tandem-mono-medium text-xs uppercase">
          ■ {nav_items[1]}
        </h2>
        <p className="col-span-7 col-start-5 text-pretty font-tandem-condensed-medium text-3xl uppercase text-gray-500 md:text-4xl">
          <span className="text-black">
            Good software starts with understanding the problem,
          </span>
          &nbsp;not estimating the solution.
        </p>
      </div>
      <div className="grid-cols-12 flex-col border-y border-black md:grid ">
        <div className="relative col-span-7 h-[300px] md:h-full">
          <Image
            src="/jackandmax.jpg"
            alt="Laptop showcasing work by Tandem"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          ></Image>
        </div>
        <div className="col-span-6 col-start-8 bg-white md:py-28 py-10 md:px-24 flex flex-col gap-10">
          <p className="m-auto  w-10/12">
            We&apos;re a two-person agency. The people you brief are the people
            who build, and we care deeply about what we hand over. The
            architecture is considered, the code is maintainable, the design is
            polished, and everything ships to production standards.
          </p>
          <p className="m-auto  w-10/12">
            We are drawn to problems that live at the intersection of software
            and the real world — health, safety, education, climate. Every
            project pulls us into a new domain, forces us to think beyond the
            code, and brings us back to the architecture with a much clearer
            picture of what actually needs to exist. If you think we can add
            value to your project,{" "}
            <Link
              href="#contact"
              className="font-bold text-blue-600 focus:ring-blue-600 focus-visible:ring-2 focus:outline-none hover:underline"
            >
              we&apos;d love to hear from you
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
