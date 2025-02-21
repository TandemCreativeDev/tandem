"use client";
import services from "../data/services.json";

import { useState } from "react";

import clsx from "clsx";

export default function Accordion() {
  const [openAccordionSection, setOpenAccordionSection] = useState(20);

  const handleContentClick = (index: number) => {
    if (openAccordionSection === index) {
      setOpenAccordionSection(20);
    } else {
      setOpenAccordionSection(index);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        {services.map((section, index) => {
          return (
            <div
              key={`accordion-${index}`}
              className="bg-white text-black text-center border-t-black border-[1px] "
            >
              <button
                className="md:text-7xl text-4xl uppercase font-tandem-condensed-medium w-full hover:bg-black hover:text-white py-10"
                onClick={() => handleContentClick(index)}
              >
                {section.title}
              </button>
              <div
                className={clsx(
                  "text-lg w-3/4 m-auto flex flex-col md:flex-row justify-center py-10 text-left gap-20",
                  {
                    block: openAccordionSection === index,
                    hidden: openAccordionSection !== index,
                  },
                )}
              >
                <p className="md:w-1/2 text-pretty ">{section.content}</p>
                <div className="flex flex-col md:w-1/4">
                  {section.serviceList.map((item, index) => {
                    return <p className="mb-3" key={index}>{`■ ${item}`}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
