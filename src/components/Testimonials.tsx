import Testimonial from "./Testimonial";
export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="grid grid-cols-12 gap-4 pt-20 h-[1000px] w-full"
    >
      <h2 className="uppercase font-tandem-mono-medium text-xs col-start-3 col-span-1">
        ■ Testimonials
      </h2>
      <div className="col-span-5 col-start-7">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}
