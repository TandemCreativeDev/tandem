import Testimonial from "../ui/Testimonial";

import nav_items from "@/data/nav_items.json";

export default function TestimonialsSection() {
  const testimonialsArr = [
    {
      client: "Lucy Paul",
      clientPosition: "Managing Director at Itch Film",
      content:
        "Tandem were super lovely to work with. They showed an excellent understanding of our brief, interpreting our vision into a new website that we are immensely happy and proud of. Their design talents brought creative and interesting suggestions that really elevated our new site. They are also quick and responsive, which makes the whole process extra enjoyable. I would without hesitation highly recommend them to anyone looking for exceptional web development.",
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
      id={nav_items[4]}
      className="m-auto flex w-10/12 grid-cols-12 flex-col gap-4 py-28  pt-20 lg:grid lg:w-full"
    >
      <h2 className="col-span-1 col-start-3 font-tandem-mono-medium text-xs uppercase">
        ■ {nav_items[4]}
      </h2>
      <div className="col-span-5 col-start-7 flex flex-col gap-20">
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
