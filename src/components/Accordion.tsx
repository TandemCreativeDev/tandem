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
  return (
    <>
      <div className="flex flex-col">
        {accordionSections.map((section, index) => {
          return (
            <div className="bg-white text-black text-center border-t-black border-[1px]">
              <h3 className="text-3xl uppercase font-tandem-block font-normal">
                {section.title}
              </h3>
              <p className="hidden text-white">{section.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
