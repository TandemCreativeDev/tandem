import Link from "next/link";

interface NavProps {
  setIsOpen: (arg: boolean) => void;
}

export default function Nav({ setIsOpen }: NavProps) {
  const items = ["about", "services", "work", "testimonials", "team"];

  return (
    <nav
      className={`flex xl:flex-row flex-col justify-end gap-5 text-black xl:text-white`}
    >
      {items.map((item, index) => (
        <Link onClick={() => setIsOpen(false)} key={index} href={`#${item}`}>
          {item}
        </Link>
      ))}
    </nav>
  );
}
