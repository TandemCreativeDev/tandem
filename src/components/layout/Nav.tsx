import Link from "next/link";

interface NavProps {
  setIsOpen: (arg: boolean) => void;
}

export default function Nav({ setIsOpen }: NavProps) {
  const items = [
    "about",
    "services",
    "work",
    "testimonials",
    "team",
    "contact",
  ];

  return (
    <nav className="justify-end gap-5 text-black xl:text-white">
      <ul className="flex flex-col gap-6 group md:flex-row">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative list-none transition-all motion-reduce:transition-none duration-500 group-hover:text-gray-500 hover:!text-black"
          >
            <Link
              onClick={() => setIsOpen(false)}
              href={`#${item}`}
              className="
                before:absolute before:top-0 before:left-0 before:w-full before:h-full
                before:bg-white before:z-[-1] before:transition-transform motion-reduce:before:transition-none before:duration-500
                before:origin-right before:scale-x-0
                hover:before:origin-left hover:before:scale-x-100
              "
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
