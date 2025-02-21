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
                  "md:text-lg text-xl w-10/12 md:w-3/4 m-auto flex flex-col lg:flex-row justify-start py-10 text-left md:gap-20 gap-10",
                  {
                    block: openAccordionSection === index,
                    hidden: openAccordionSection !== index,
                  },
                )}
              >
                <div className="lg:w-1/2 text-pretty flex flex-col gap-5">
                  <p className="mb-5">{section.content}</p>
                  <h3 className="text-2xl">{section.secondaryTitle}</h3>
                  <p>{section.secondaryContent}</p>
                </div>
                <div className="flex flex-col md:w-1/4">
                  {section.serviceList.map((item, index) => {
                    return (
                      <p
                        className="mb-3 md:text-nowrap text-pretty"
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
