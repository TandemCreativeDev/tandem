"use client";

import { useState } from "react";

import clsx from "clsx";

export default function Accordion() {
  const accordionSections = [
    {
      title: "full-stack development",
      content:
        "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    },
    {
      title: "web design",
      content:
        "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    },
    {
      title: "technical consultations",
      content:
        "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    },
    {
      title: "full-stack development",
      content:
        "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    },
    {
      title: "accessibility",
      content:
        "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    },
    {
      title: "user research",
      content:
        "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    },
    {
      title: "support & maintenace",
      content:
        "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    },
  ];

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
        {accordionSections.map((section, index) => {
          return (
            <div
              key={`accordion-${index}`}
              className="bg-white text-black text-center border-t-black border-[1px] py-10"
            >
              <h3
                className="text-7xl uppercase font-tandem-block font-normal hover:bg-black hover:text-white"
                onClick={() => handleContentClick(index)}
              >
                {section.title}
              </h3>
              <p
                className={clsx("text-red-400", {
                  block: openAccordionSection === index,
                  hidden: openAccordionSection !== index,
                })}
              >
                {section.content}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
