import Image from "next/image";
interface TeamPortraitProps {
  teamMember: string;
  otherTeamMember: string;
  activeImage: string;
  setActiveImage: (arg: string) => void;
}
export default function TeamPortrait({
  teamMember,
  otherTeamMember,
  activeImage,
  setActiveImage,
}: TeamPortraitProps) {
  return (
    <>
      <div className="flex flex-col">
        <button>
          <div
            className={`transition-all duration-700 ${
              activeImage === teamMember
                ? "max-w-[500px] max-h-[500px]"
                : activeImage === otherTeamMember
                  ? "max-w-[380px] max-h-[380px]"
                  : "max-w-[400px] max-h-[400px]"
            }`}
          >
            <Image
              src={`/portraits/portrait-[${teamMember}].jpg`}
              alt={`Portrait of ${teamMember}, one of the Tandem founders`}
              layout="intrinsic"
              width={500}
              height={500}
              onMouseEnter={() => setActiveImage(teamMember)}
            />
          </div>
        </button>
        <p>{teamMember}</p>
        <p>Co-Founder \ Full-Stack Developer</p>
      </div>
    </>
  );
}
