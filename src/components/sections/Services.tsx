import Accordion from "../ui/Accordion";

import nav_items from "@/data/nav_items.json";

export default function ServicesSection() {
  return (
    <section id={nav_items[2]}>
      <h2 className="sr-only">{nav_items[2]}</h2>
      <Accordion />
    </section>
  );
}
