import Link from "next/link";

export default function Nav() {
  const items = ["about", "services", "work", "testimonials", "team"];

  return (
    <nav className="flex justify-end gap-5">
      {items.map((item, index) => (
        <Link key={index} href={`#${item}`}>
          {item}
        </Link>
      ))}
    </nav>
  );
}
