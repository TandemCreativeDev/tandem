import Testimonial from "./Testimonial";
export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="h-[1000px] w-full flex justify-center">
        <div className="w-6/12">
          <h4>Testimonials</h4>
        </div>
        <div className="w-5/12">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  );
}
