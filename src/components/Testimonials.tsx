import Testimonial from "./Testimonial";
export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="grid grid-cols-12 gap-4 pt-20 h-[1000px] w-full"
    >
      <h4 className="col-span-1 col-start-3">Testimonials</h4>
      <div className="col-span-5 col-start-7">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}
