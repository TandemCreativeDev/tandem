import clsx from "clsx";
import React from "react";

interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Burger = React.forwardRef<HTMLButtonElement, BurgerProps>(
  ({ isOpen, onClick }, ref) => {
    const baseClasses =
      "h-[2.5px] w-full transition-all motion-reduce:transition-none duration-500 ease-in-out";

    return (
      <button
        ref={ref}
        className="mr-2 xl:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50 absolute right-5 top-5"
        role="button"
        onClick={onClick}
        aria-label="Toggle navigation"
      >
        <div
          className={clsx(
            baseClasses,
            isOpen ? "rotate-45 bg-black translate-y-[10px]" : "bg-white"
          )}
        ></div>
        <div
          className={clsx(baseClasses, isOpen ? "opacity-0" : "bg-white")}
        ></div>
        <div
          className={clsx(
            baseClasses,
            isOpen ? "-rotate-45 bg-black -translate-y-[12px]" : "bg-white"
          )}
        ></div>
      </button>
    );
  }
);

Burger.displayName = "Burger";

export default Burger;
