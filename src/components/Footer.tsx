import Link from "next/link";
import Time from "./Time";
export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="bg-black text-white flex flex-col md:grid grid-cols-12 uppercase border-t-gray-700 border-t-2 pt-6 font-tandem-mono-medium"
    >
      <span className="md:pl-10 pl-20 mb-10 md:mb-0 col-span-2 col-start-1">
        tandem creative dev
      </span>
      <div className="h-full col-start-8 col-span-1 pl-20 md:pl-0">
        <h2 className="mb-5 md:mb-20">index</h2>
        <div className="flex flex-col text-5xl font-tandem-condensed-medium">
          <Link href={"#home"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#services"}>Services</Link>
          <Link href={"#work"}>Work</Link>
          <Link href={"#testimonials"}>Testimonials</Link>
          <Link href={"#team"}>Team</Link>
        </div>
      </div>
      <div className="flex py-10 col-span-12 col-start-1">
        <div className="w-7/12 flex flex-col md:flex-row gap-32 pl-10">
          <div>
            <h3 className="text-gray-500">timezone</h3>
            <Time />
          </div>
        </div>
        <div className="w-5/12">
          <h3 className="text-gray-500">socials</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <p>instagram</p>
            <p>linkedin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
