import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  ariaLabel?: string;
  onClick?: ComponentProps<typeof Link>["onClick"];
}

export default function LinkButton({
  href,
  label,
  className,
  ariaLabel,
  onClick,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={twMerge(
        "border-2 border-white bg-white font-tandem-mono-regular text-smfont-semibold uppercase text-black transition-colors hover:bg-black hover:text-white",
        className,
      )}
    >
      {label}
    </Link>
  );
}
