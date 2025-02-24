import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="m-auto flex w-10/12 flex-col gap-10 py-20 md:grid md:w-screen md:auto-rows-auto md:grid-cols-12 md:gap-0 md:py-28">
        <h2 className="col-span-1 col-start-3 font-tandem-mono-medium text-xs uppercase">
          ■ About
        </h2>
        <p className="col-span-7 col-start-5 text-pretty font-tandem-condensed-medium text-3xl uppercase text-gray-500 md:text-4xl">
          <span className="text-black">
            We prioritise human-centered design
          </span>
          &nbsp;to create inclusive solutions. Our commitment to usability and
          accessibility ensures that every user feels valued and understood.
        </p>
      </div>
      <div className="grid-cols-12 flex-col border-b-[1px] border-t-2 border-black md:grid ">
        <div className="relative col-span-6">
          <Image
            src="/itch-laptop-image.jpeg"
            alt="Laptop showcasing work by Tandem"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          ></Image>
        </div>
        <div className="col-span-5 col-start-8  bg-white py-28 flex flex-col gap-10">
          <p className="m-auto  w-10/12 text-lg text-black md:w-1/2">
            Tandem Creative Dev was started by Jack and Max, two full-stack
            developers who met at Founders and Coders and have a shared passion
            for driving positive change through digital innovation.
          </p>
          <p className="m-auto  w-10/12 text-lg text-black md:w-1/2">
            We believe in the power of thoughtful design to resonate with users.
            Our approach ensures that every project reflects our commitment to
            enhancing user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
