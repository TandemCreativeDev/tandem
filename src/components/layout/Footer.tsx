import Link from "next/link";
import Time from "../ui/Time";
import SectionLinks from "../ui/SectionLinks";

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="flex grid-cols-12 flex-col border-t-2 border-t-gray-700 bg-black py-10 font-tandem-mono-medium uppercase text-white md:grid"
    >
      <h2 className="col-span-2 col-start-1 mb-10 pl-20 md:mb-0 md:pl-10">
        tandem creative dev
      </h2>
      <div className="col-span-1 col-start-8 overflow-visible whitespace-nowrap h-full pl-20 md:pl-0">
        <h3 className="mb-5 md:mb-20">index</h3>
        <SectionLinks
          className="flex flex-col font-tandem-condensed-medium text-5xl"
          startIndex={0}
        />
      </div>
      <div className="col-span-12 col-start-1 flex py-10">
        <div className="flex w-7/12 flex-col gap-32 pl-10 md:flex-row">
          <div>
            <h3 className="text-gray-400">timezone</h3>
            <Time />
          </div>
        </div>
        <div className="w-5/12">
          <h3 className="text-gray-400">social</h3>
          <div className="flex flex-col gap-4 text-white">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/tandemcreativedev/"}
            >
              linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
