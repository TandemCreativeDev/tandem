import Testimonial from "./Testimonial";
export default function TestimonialsSection() {
  return (
    <>
      <div className="h-[1000px] w-full flex justify-between">
        <h4>Testimonials</h4>
        <div className="w-1/2">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </>
  );
}
