import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  fullWidth?: boolean;
}

export default function Button({
  label,
  fullWidth = true,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "bg-black border-2 border-black px-3.5 py-3 min-h-[24px] text-center font-tandem-mono-regular text-sm font-semibold uppercase text-white shadow-sm hover:bg-white hover:text-black";
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={twMerge(baseStyles, widthStyles, className)}
      {...props}
    >
      {label}
    </button>
  );
}
