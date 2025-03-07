"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Time from "../ui/Time";
import Link from "next/link";
import clsx from "clsx";
import Burger from "../ui/Burger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

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
      <div className="m-auto w-[98%] flex justify-between items-center h-6">
        <div className="md:block hidden">
          <Time />
        </div>
        <Link
          className={clsx(
            "absolute left-1/2 top-5 transform -translate-x-1/2 z-10",
            isOpen ? "text-black" : "text-white",
          )}
          href={"#home"}
          onClick={() => setIsOpen(false)}
        >
          <h1 className="text-center flex gap-1 group">
            <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              &lt;
            </span>
            tandem creative dev
            <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              /&gt;
            </span>
          </h1>
        </Link>
        <div className="self-end xl:block hidden">
          <Nav setIsOpen={setIsOpen} />
        </div>
        <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        {isOpen === true ? (
          <div className="absolute h-screen top-0 left-0 w-screen bg-white flex justify-center items-center text-5xl overflow-hidden">
            <Nav setIsOpen={setIsOpen} />
          </div>
        ) : undefined}
      </div>
    </header>
  );
}
