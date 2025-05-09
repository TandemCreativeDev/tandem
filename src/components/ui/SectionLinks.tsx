"use client";

import Link from "next/link";
import nav_items from "@/data/nav_items.json";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface SectionLinksProps {
  className: string;
  startIndex?: number;
  onClick?: (isOpen: boolean) => void;
  padded?: boolean;
}

export default function SectionLinks({
  className,
  startIndex = 1,
  onClick = () => {},
  padded = false,
}: SectionLinksProps) {
  return (
    <ul
      role="navigation"
      className={twMerge("group pointer-events-none", className)}
    >
      {nav_items.map((item, index) => (
        <li
          key={index}
          className="relative list-none transition-all motion-reduce:transition-none duration-500 group-hover:text-gray-500 pointer-events-auto"
        >
          {index >= startIndex && (
            <Link
              href={`#${item}`}
              aria-label={`Scroll to ${item}`}
              className={clsx(
                `relative z-10
                before:absolute before:top-0 before:left-0 before:w-full before:h-full
                before:bg-white before:z-[-1] before:transition-transform motion-reduce:before:transition-none before:duration-500
                before:origin-right before:scale-x-0 before:scale-y-75
                hover:before:origin-left hover:before:scale-x-100 hover:!text-black
                px-1`,
                padded && "py-[2px]"
              )}
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
