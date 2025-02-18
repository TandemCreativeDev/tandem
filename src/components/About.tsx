import Image from "next/image";
export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="bg-white w-screen pt-36 grid grid-cols-12 h-[500px]"
      >
        <h2
          className="uppercase text-black font-semibold text-xs col-start-3 col-span-1"
          id="about "
        >
          ■ About
        </h2>
        <p className="text-gray-500 font-tandem-block uppercase text-4xl max-h-10 text-pretty col-start-5 col-span-7">
          <span className="text-black">
            We prioritise human-centered design
          </span>
          &nbsp;to create inclusive solutions. Our commitment to usability and
          accessibility ensures that every user feels valued and understood.
        </p>
      </section>
    </>
  );
}
