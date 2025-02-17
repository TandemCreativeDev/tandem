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
      title: "technical consultantions",
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

  const [showContent, setShowContent] = useState(false);

  const handleContentClick = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      <div className="flex flex-col">
        {accordionSections.map((section, index) => {
          return (
            <div className="bg-white text-black text-center border-t-black border-[1px] py-10">
              <h3
                className="text-7xl uppercase font-tandem-block font-normal"
                onClick={handleContentClick}
              >
                {section.title}
              </h3>
              <p
                className={clsx("text-red-400", {
                  block: showContent,
                  hidden: !showContent,
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
