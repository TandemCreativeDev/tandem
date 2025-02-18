"use client";

import { useState } from "react";

import clsx from "clsx";

//import AccordionContent from "./AccordionContent";

export default function Accordion() {
  const accordionSections = [
    {
      title: "full-stack development",
      content:
        "With a wealth of experience in both front end and back end development, we are well equipped to deliver a product that meets your needs. When combined with our web design services, we are able to take you from your initial project concept, all the way through to deployment of a complete full-stack web application or website.",
    },
    {
      title: "web design",
      content:
        "We love building beautiful user interfaces. However, we don't think there's any point in building something that isn't usable and accessible. Therefore, we strive to keep real human users at the centre of everything we do, without sacrificing aesthetic excellence.",
    },
    {
      title: "technical consultations",
      content:
        "Let us use our technical expertise to help you narrow down your vision. Working on a project with demonstrable social value? We believe in the power of technology to improve real people's live, and are able to offer technical consultantions free of charge for projects that meet these requirements.",
    },
    {
      title: "data analytics",
      content:
        "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    },
    {
      title: "accessibility",
      content:
        "The web is a huge part of our lives and should be accessible to all. Our team of Accessibility experts can consult on best practices and audit your website to make sure that it conforms with accessibility laws and regulations. We also believe that accessibility goes further than ticking boxes, and with first-hand knowledge of the requirements of users with accessibility issues, we are able to make sure that your website is truly accessible, rather than just ticking the boxes of the guidelines. We put you, and your users, first.",
    },
    //{
    //  title: "user research",
    //  content:
    //    "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    //},
    //{
    //  title: "support & maintenace",
    //  content:
    //    "Exercitation velit aute velit ex eiusmod amet laborum eu est esse culpa. Cillum quis esse eiusmod occaecat enim culpa est adipisicing nostrud laboris proident dolore incididunt culpa. Fugiat deserunt Lorem aliquip exercitation consectetur ex nostrud ex tempor excepteur sit irure voluptate. Cupidatat ad dolore deserunt.",
    //},
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
              className="bg-white text-black text-center border-t-black border-[1px] "
            >
              <button
                className="text-7xl uppercase font-tandem-condensed-medium w-full hover:bg-black hover:text-white py-10"
                onClick={() => handleContentClick(index)}
              >
                {section.title}
              </button>
              <div
                className={clsx("text-lg w-3/4 text-center m-auto flex py-10", {
                  block: openAccordionSection === index,
                  hidden: openAccordionSection !== index,
                })}
              >
                <p className="w-1/2 text-pretty text-left">{section.content}</p>
                <div className="flex flex-col w-1/2">
                  <p>test</p>
                  <p>test2</p>
                  <p>test3</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
