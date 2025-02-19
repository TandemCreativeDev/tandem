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
                ? "w-[500px] h-[500px]"
                : activeImage === otherTeamMember
                  ? "w-[380px] h-[380px]"
                  : "w-[400px] h-[400px]"
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
