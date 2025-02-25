import SectionLinks from "../ui/SectionLinks";

interface NavProps {
  setIsOpen: (arg: boolean) => void;
}

export default function Nav({ setIsOpen }: NavProps) {
  return (
    <nav className="justify-end gap-1 text-black xl:text-white">
      <SectionLinks
        className="flex flex-col gap-6 xl:flex-row"
        onClick={() => setIsOpen(false)}
        padded
      />
    </nav>
  );
}
