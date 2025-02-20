import Image from "next/image";
export default function DescriptionSection() {
  return (
    <section className="flex flex-col md:grid grid-cols-12  border-t-4 border-t-black ">
      <div className="col-span-7 relative">
        <Image
          src="/wedgy-laptop-image.jpeg"
          alt="laptop showcasing different work by Tandem"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        ></Image>
      </div>
      <div className="h-full col-span-5 col-start-8 bg-white pb-10">
        <p className="w-10/12 md:w-1/2 m-auto mt-20 text-black text-lg">
          Tandem Creative Dev was started by Jack and Max, two full-stack
          developers who met at Founders and Coders and have a shared passion
          for driving positive change through digital innovation.
        </p>
        <p className="w-10/12 md:w-1/2 m-auto mt-10 text-black text-lg">
          We believe in the power of thoughtful design to resonate with users.
          Our approach ensures that every project reflects our commitment to
          enhancing user experience.
        </p>
      </div>
    </section>
  );
}
