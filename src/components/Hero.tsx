import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <div className=" ">
        <Image
          src={"/hero-img.jpg"}
          alt="Our hero image"
          width={10000}
          height={10000}
          className="absolute top-0 left-0 -z-50"
        />
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <h2 className="text-7xl max-w-[1000px]  text-pretty m-auto text-center uppercase font-tandem-block font-normal leading-tight ">
          Technology with purpose, impact with power.
        </h2>
      </div>
    </div>
  );
}
