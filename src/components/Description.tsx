import Image from "next/image";
export default function DescriptionSection() {
  return (
    <>
      <section className="grid grid-cols-12 h-[700px]">
        <div className="col-span-7">
          <Image
            src="/laptop-image.png"
            alt="laptop showcasing different work by Tandem"
            height={700}
            width={900}
          ></Image>
        </div>
        <div className="border-t-4 border-t-black h-full col-span-5 col-start-8 bg-white">
          <p className="w-1/2 m-auto mt-20 text-black text-lg">
            Fonthill is a digital agency started by Jack and Max, two full-stack
            developers who met at Founders and Coders and have a shared passion
            for driving positive change through digital innovation.
          </p>
          <p className="w-1/2 m-auto mt-10 text-black text-lg">
            We believe in the power of thoughtful design to resonate with users.
            Our approach ensures that every project reflects our commitment to
            enhancing user experience.
          </p>
        </div>
      </section>
    </>
  );
}
