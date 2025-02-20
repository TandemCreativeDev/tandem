"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Time from "./Time";
import { BsList } from "react-icons/bs";

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
        ${hasScrolledPastHero ? "fixed top-0 left-0 bg-black pb-5" : "absolute top-0 left-0 bg-none"}
        transition-all 
        duration-300 
        z-50
      `}
    >
      <div className="m-auto w-11/12 flex xl:justify-between items-center justify-center">
        <div className="w-1/3 xl:block hidden">
          <Time />
        </div>
        <div className="w-full xl:w-1/3">
          <h1 className="text-center">tandem creative dev</h1>
        </div>
        <div className="w-1/3 self-end xl:block hidden">
          <Nav />
        </div>
        <BsList
          size={40}
          className="xl:hidden absolute top-3 right-5"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen === true ? (
          <div className="absolute h-screen top-0 left-0 w-screen bg-white flex justify-center items-center text-5xl overflow-hidden">
            <p
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-0 text-black"
            >
              x
            </p>
            <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        ) : undefined}
      </div>
    </header>
  );
}
