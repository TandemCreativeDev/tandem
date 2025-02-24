"use client";

import services from "../data/services.json";
import { useState } from "react";
import clsx from "clsx";

export default function Accordion() {
  const [openAccordionSection, setOpenAccordionSection] = useState(20);
  const [hoveredAccordion, setHoveredAccordion] = useState(20);

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
              className="border-[1px] border-t-black bg-white text-center text-black "
            >
              <button
                className={`relative w-full py-10 font-tandem-condensed-medium text-4xl uppercase md:text-7xl overflow-hidden ${
                  hoveredAccordion === index ? "bg-black text-white" : ""
                }`}
                onClick={() => handleContentClick(index)}
                onMouseEnter={() => setHoveredAccordion(index)}
                onMouseLeave={() => setHoveredAccordion(20)}
              >
                {hoveredAccordion === index ? (
                  <div className="whitespace-nowrap animate-marquee">
                    {Array(8).fill(` ${section.title} </> `).join("")}
                  </div>
                ) : (
                  section.title
                )}
              </button>
              <div
                className={clsx(
                  "text-lg w-10/12 md:w-3/4 m-auto flex flex-col lg:flex-row justify-start py-10 text-left md:gap-20 gap-10",
                  {
                    block: openAccordionSection === index,
                    hidden: openAccordionSection !== index,
                  },
                )}
              >
                <div className="flex flex-col gap-5 text-pretty lg:w-1/2">
                  <p className="mb-5">{section.content}</p>
                  <h3 className="text-2xl">{section.secondaryTitle}</h3>
                  <p>{section.secondaryContent}</p>
                </div>
                <div className="flex flex-col md:w-1/4">
                  {section.serviceList.map((item, index) => {
                    return (
                      <p
                        className="mb-3 text-pretty md:text-nowrap"
                        key={index}
                      >{`■ ${item}`}</p>
                    );
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
