import Image from "next/image";

const logos = [
  {
    src: "/client-logos/department-for-education.svg",
    alt: "Department for Education",
    height: 70,
  },
  {
    src: "/client-logos/skills-england.jpg",
    alt: "Skills England",
    height: 130,
  },
];
const secondLogos = [
  { src: "/client-logos/BRC.png", alt: "British Red Cross", height: 50 },
  {
    src: "/client-logos/warwick.jpg",
    alt: "University of Warwick",
    height: 80,
  },
];

const thirdLogos = [
  {
    src: "/client-logos/chirp.jpg",
    alt: "University of Warwick",
    height: 100,
  },
  {
    src: "/client-logos/ozeaon.png",
    alt: "University of Warwick",
    height: 45,
  },
];

const logosSecondRow = [
  {
    src: "/client-logos/omnifolio.png",
    alt: "University of Warwick",
    height: 30,
  },
  {
    src: "/client-logos/amagi.png",
    alt: "University of Warwick",
    height: 100,
  },
];

type Logo = { src: string; alt: string; height: number };

function LogoRow({
  logos,
  className,
  imageClassName = "grayscale hover:grayscale-0 transition-all duration-300",
}: {
  logos: Logo[];
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`flex sm:flex-row flex-col  items-center justify-center gap-10 md:gap-16 ${className ?? ""}`}
    >
      {logos.map(({ src, alt, height }) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          height={height}
          width={200}
          style={{ objectFit: "contain", width: "auto", height: `${height}px` }}
          className={imageClassName}
        />
      ))}
    </div>
  );
}

export default function LogoBanner() {
  return (
    <div className="bg-white px-10 py-8">
      <p className="font-tandem-mono-medium text-xs uppercase text-black text-center mb-6">
        Trusted by
      </p>
      <div className="flex sm:flex-row flex-col flex-wrap gap-x-8 items-center justify-center">
        <LogoRow logos={logos} className="m2" />
        <LogoRow logos={secondLogos} className="m2" />
        <LogoRow logos={thirdLogos} className="m2" />
      </div>
    </div>
  );
}
