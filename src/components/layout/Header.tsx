"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Time from "../ui/Time";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  const hamburgerClasses =
    "h-[2.5px] w-full transition-all motion-reduce:transition-none duration-500 ease-in-out";
  const bunClasses = "rotate-45 bg-black";

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setHasScrolledPastHero(scrollPosition > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className={`
        text-white
        flex 
        justify-between 
        items-center
        w-full 
        m-auto 
        uppercase 
        font-tandem-mono-medium 
        pt-5
        ${
          hasScrolledPastHero
            ? "fixed top-0 left-0 bg-black pb-5"
            : "absolute top-0 left-0 bg-none"
        }
        transition-all 
        duration-300 
        z-50
      `}
    >
      <div className="m-auto w-11/12 flex xl:justify-between items-center justify-center">
        <div className="w-1/3 xl:block hidden">
          <Time />
        </div>
        <Link
          className={clsx(
            "w-full xl:w-1/3 justify-center z-10",
            isOpen ? "text-black" : "text-white"
          )}
          href={"#home"}
        >
          <h1 className="text-center">tandem creative dev</h1>
        </Link>
        <div className="w-1/3 self-end xl:block hidden">
          <Nav setIsOpen={setIsOpen} />
        </div>
        <button
          className="mr-2 lg:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50 absolute right-5 top-5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <div
            className={clsx(
              hamburgerClasses,
              isOpen ? `${bunClasses} translate-y-[10px]` : "bg-white"
            )}
          ></div>
          <div
            className={clsx(
              hamburgerClasses,
              isOpen ? "opacity-0" : "bg-white"
            )}
          ></div>
          <div
            className={clsx(
              hamburgerClasses,
              isOpen ? `-${bunClasses} -translate-y-[12px]` : "bg-white"
            )}
          ></div>
        </button>
        {isOpen === true ? (
          <div className="absolute h-screen top-0 left-0 w-screen bg-white flex justify-center items-center text-5xl overflow-hidden">
            <Nav setIsOpen={setIsOpen} />
          </div>
        ) : undefined}
      </div>
    </header>
  );
}
