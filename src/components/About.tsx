export default function AboutSection() {
  return (
    <>
      <section id="about" className="bg-white w-full pt-36">
        <div className="flex justify-between px-32 h-96">
          <h2 className="uppercase text-black font-semibold text-xs" id="about">
            ■ About
          </h2>
          <p className="text-[#A5A5A5] font-tandem-block uppercase text-5xl w-3/4 max-h-10 text-pretty">
            <span className="text-black">
              We prioritise human-centered design
            </span>
            &nbsp;to create inclusive solutions. Our commitment to usability and
            accessibility ensures that every user feels valued and understood.
          </p>
        </div>
        <div className="flex h-[700px]">
          <div className="bg-green-400 w-7/12 h-[700px]"></div>
          <div className="border-t-4 border-t-black h-full w-5/12">
            <p className="w-1/2 m-auto mt-20 text-black text-lg">
              Fonthill is a digital agency started by Jack and Max, two
              full-stack developers who met at Founders and Coders and have a
              shared passion for driving positive change through digital
              innovation.
            </p>
            <p className="w-1/2 m-auto mt-10 text-black text-lg">
              We believe in the power of thoughtful design to resonate with
              users. Our approach ensures that every project reflects our
              commitment to enhancing user experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
