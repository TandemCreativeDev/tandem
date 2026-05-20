import Image from "next/image";

const logos = [
  {
    src: "/client-logos/department-for-education.svg",
    alt: "Department for Education",
    height: 70,
  },
  {
    src: "/client-logos/skills-england-2.jpg",
    alt: "Skills England",
    height: 70,
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
    src: "/client-logos/chirp-2.jpg",
    alt: "University of Warwick",
    height: 50,
  },
  {
    src: "/client-logos/ozeaon.png",
    alt: "University of Warwick",
    height: 45,
  },
];

const allLogos = [...logos, ...secondLogos, ...thirdLogos];

type Logo = { src: string; alt: string; height: number };

function LogoImage({ src, alt, height }: Logo) {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={200}
      style={{ objectFit: "contain", width: "auto", height: `${height}px` }}
      className="grayscale hover:grayscale-0 transition-all duration-300"
    />
  );
}

function LogoRow({ logos }: { logos: Logo[] }) {
  return (
    <div className="flex flex-row items-center justify-center gap-10 md:gap-16">
      {logos.map((logo) => (
        <LogoImage key={logo.src} {...logo} />
      ))}
    </div>
  );
}

export default function LogoBanner() {
  return (
    <div className="b-red-500 px-10 py-8">
      <p className="font-tandem-mono-medium text-xs uppercase text-black text-center mb-6">
        Trusted by
      </p>
      {/* Mobile: flat list with single consistent gap */}
      <div className="flex flex-col gap-10 items-center mb-4 sm:hidden">
        {allLogos.map((logo) => (
          <LogoImage key={logo.src} {...logo} />
        ))}
      </div>
      {/* Desktop: grouped rows */}
      <div className="hidden sm:flex flex-row flex-wrap gap-x-10 gap-y-6 items-center justify-center">
        <LogoRow logos={logos} />
        <LogoRow logos={secondLogos} />
        <LogoRow logos={thirdLogos} />
      </div>
    </div>
  );
}
