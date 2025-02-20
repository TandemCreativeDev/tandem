"use client";
import { useState } from "react";
import Nav from "./Nav";
import Time from "./Time";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-white bg-none flex justify-between w-full m-auto uppercase font-tandem-mono-medium pt-5 absolute top-0 left-0 z-50">
      <div className="m-auto w-11/12 flex justify-between">
        <div className="w-1/3">
          <Time />
        </div>
        <div className="w-1/3">
          <h1 className="text-center">tandem creative dev</h1>
        </div>
        <div className="w-1/3 self-end xl:block hidden">
          <Nav />
        </div>
        <p
          className="xl:hidden sticky top-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          uhambuuuuurger
        </p>
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
