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
    "rounded-md bg-black border-2 border-black px-3.5 py-2 text-center font-tandem-mono-regular text-sm font-semibold uppercase text-white shadow-sm hover:bg-white hover:text-black focus:ring-2 focus:ring-inset focus:ring-gray-300";
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
