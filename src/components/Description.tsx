import Image from "next/image";
export default function DescriptionSection() {
  return (
    <section className="flex grid-cols-12 flex-col border-b-[1px]  border-t-2 border-black md:grid ">
      <div className="relative col-span-6">
        <Image
          src="/itch-laptop-image.jpeg"
          alt="laptop showcasing different work by Tandem"
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
    </section>
  );
}
