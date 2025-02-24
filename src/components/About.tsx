export default function AboutSection() {
  return (
    <section
      id="about"
      className="m-auto flex  w-10/12 flex-col gap-10 py-20 md:grid md:w-screen md:auto-rows-auto md:grid-cols-12 md:gap-0 md:py-28"
    >
      <h2 className="col-span-1 col-start-3 font-tandem-mono-medium text-xs uppercase">
        ■ About
      </h2>
      <p className="col-span-7 col-start-5  text-pretty font-tandem-condensed-medium text-3xl uppercase text-gray-500 md:text-4xl">
        <span className="text-black">We prioritise human-centered design</span>
        &nbsp;to create inclusive solutions. Our commitment to usability and
        accessibility ensures that every user feels valued and understood.
      </p>
    </section>
  );
}
