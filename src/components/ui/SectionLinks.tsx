"use client";

import Link from "next/link";
import nav_items from "@/data/nav_items.json";
import { twMerge } from "tailwind-merge";

interface SectionLinksProps {
  className: string;
  startIndex?: number;
  onClick?: (isOpen: boolean) => void;
}

export default function SectionLinks({
  className,
  startIndex = 1,
  onClick = () => {},
}: SectionLinksProps) {
  return (
    <ul className={twMerge(className, "group")}>
      {nav_items.map((item, index) => (
        <li
          key={index}
          className="relative list-none transition-all motion-reduce:transition-none duration-500 group-hover:text-gray-500 hover:!text-black"
        >
          {index >= startIndex && (
            <Link
              href={`#${item}`}
              className="
                relative z-10
                before:absolute before:top-0 before:left-0 before:w-full before:h-full
                before:bg-white before:z-[-1] before:transition-transform motion-reduce:before:transition-none before:duration-500
                before:origin-right before:scale-x-0 before:scale-y-75
                hover:before:origin-left hover:before:scale-x-100
              "
              onClick={() => onClick(false)}
            >
              {item}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
