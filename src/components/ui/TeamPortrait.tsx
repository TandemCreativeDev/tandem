import Image from "next/image";
import Link from "next/link";

interface TeamPortraitProps {
  teamMember: string;
  otherTeamMember: string;
  activeImage: string;
  href: string;
  setActiveImage: (arg: string) => void;
}

export default function TeamPortrait({
  teamMember,
  otherTeamMember,
  activeImage,
  setActiveImage,
  href,
}: TeamPortraitProps) {
  return (
    <>
      <Link target="_blank" className="flex flex-col" href={href}>
        <button>
          <div
            className={`transition-all duration-700 ${
              activeImage === teamMember
                ? "md:max-w-[500px] md:max-h-[500px]"
                : activeImage === otherTeamMember
                ? "md:max-w-[380px] md:max-h-[380px]"
                : "md:max-w-[400px] md:max-h-[400px]"
            }`}
          >
            <Image
              src={`/portraits/portrait-[${teamMember}].jpg`}
              alt={`Portrait of ${teamMember}, Tandem co-founder`}
              width={500}
              height={500}
              onMouseEnter={() => setActiveImage(teamMember)}
            />
          </div>
        </button>
        <p className="mt-5 md:mt-0">{teamMember}</p>
        <p>Co-Founder \ Full-Stack Developer</p>
      </Link>
    </>
  );
}
