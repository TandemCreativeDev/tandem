import Image from "next/image";
export default function Hero() {
  return (
    <section>
      <div className="absolute h-screen w-screen top-0 left-0 -z-40">
        <Image
          src={"/hero-img.jpg"}
          alt="Our hero image"
          fill
          sizes="100vw" // Important for responsiveness/fill={true}
          className="absolute top-0 left-0 -z-50"
          style={{ objectFit: "cover" }} // Ensures the image covers the entire container
        />
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <h2 className="text-7xl max-w-[1000px]  text-pretty m-auto text-center uppercase font-tandem-block font-normal leading-tight ">
          Technology with purpose, impact with power.
        </h2>
      </div>
    </section>
  );
}
