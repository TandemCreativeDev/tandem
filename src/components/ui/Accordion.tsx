"use client";

import services from "../../data/services.json";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const PIXELS_PER_SECOND = 100;

function MarqueeTitle({ title }: { title: string }) {
  const trackRef = useRef<HTMLHeadingElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const track = trackRef.current;
    const container = track?.closest("button") as HTMLButtonElement | null;
    if (!track || !container) return;

    const trackWidth = track.offsetWidth; // 16 units = 2 copies of 8
    const copyWidth = trackWidth / 2;
    const containerWidth = container.offsetWidth;
    const duration = copyWidth / PIXELS_PER_SECOND;

    const firstTitle = track.querySelector(
      "[data-title]",
    ) as HTMLElement | null;
    if (!firstTitle) return;

    const titleCenter = firstTitle.offsetLeft + firstTitle.offsetWidth / 2;
    // Translate needed to put title center at container center
    let startX = containerWidth / 2 - titleCenter;
    // Normalise to negative value within one copy's range
    startX = ((startX % copyWidth) - copyWidth) % copyWidth;
    const delay = (startX / copyWidth) * duration;

    setStyle({
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    });
  }, []);

  return (
    <h3
      ref={trackRef}
      className="motion-safe:animate-marquee w-max whitespace-nowrap"
      style={style}
    >
      {Array.from({ length: 16 }, (_, i) => (
        <span key={i}>
          {" "}
          {i === 0 ? (
            <span data-title="">{title.toUpperCase()}</span>
          ) : (
            <span>{title.toUpperCase()}</span>
          )}{" "}
          &lt;/&gt;
        </span>
      ))}
    </h3>
  );
}

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
                className={`${
                  hoveredAccordion === index ? "bg-black text-white" : ""
                } relative w-full overflow-hidden py-10 font-tandem-condensed-medium text-4xl uppercase
                md:text-7xl`}
                aria-expanded={openAccordionSection === index}
                aria-controls={`panel-${index}`}
                id={`button-${index}`}
                onClick={() => handleContentClick(index)}
                onMouseEnter={() => setHoveredAccordion(index)}
                onMouseLeave={() => setHoveredAccordion(20)}
              >
                {hoveredAccordion === index ? (
                  <MarqueeTitle title={section.title} />
                ) : (
                  <h3>{section.title}</h3>
                )}
              </button>
              <div
                id={`panel-${index}`}
                aria-labelledby={`button-${index}`}
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
                  <h4 className="text-2xl">{section.secondaryTitle}</h4>
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
