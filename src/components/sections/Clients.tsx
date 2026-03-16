import clients from "@/data/clients.json";

export default function ClientsSection() {
  return (
    <section className="px-10 pt-10 pb-36">
      <h2 className="sr-only">Organisations we&apos;ve worked with</h2>
      <p className="font-tandem-condensed-medium text-4xl uppercase leading-tight text-black md:text-6xl lg:text-7xl">
        {clients.join(", ")}
      </p>
    </section>
  );
}
