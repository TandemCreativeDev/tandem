import Testimonial from "./Testimonial";
export default function TestimonialsSection() {
  const testimonialsArr = [
    {
      client: "Lucy Paul",
      clientPosition: "Managing Director at Itch Film",
      content:
        "Working with Tandem was an absolute pleasure. They had an excellent understanding of our vision and brought creative, interesting suggestions that truly elevated our site. Quick, responsive, and a joy to collaborate with, they delivered beyond expectations. We highly recommend them to anyone looking for exceptional web development.",
      src: "itch",
    },
    {
      client: "Will Wedgwood",
      clientPosition: "Founder at Wedgy Music",
      content:
        "Working with the team at Tandem was a fantastic experience. The site looks amazing, runs smoothly, and perfectly captures our vision. The team's creativity, attention to detail, and dedication made the whole process seamless. It has given us a great platform to share with fans, venues and promoters which is easy to navigate and helps represent the band in a professional way.",
      src: "wedgy",
    },
  ];
  return (
    <section
      id="testimonials"
      className="flex flex-col lg:grid grid-cols-12 gap-4 pt-20 h-[1100px] md:h-[1000px] w-10/12 m-auto lg:w-full"
    >
      <h2 className="uppercase font-tandem-mono-medium text-xs col-start-3 col-span-1">
        ■ Testimonials
      </h2>
      <div className="col-span-5 col-start-7">
        {testimonialsArr.map((testimonial, index) => {
          return (
            <Testimonial
              client={testimonial.client}
              key={index}
              clientPosition={testimonial.clientPosition}
              content={testimonial.content}
              src={testimonial.src}
            />
          );
        })}
      </div>
    </section>
  );
}
