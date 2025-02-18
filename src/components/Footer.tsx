import Link from "next/link";
export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="bg-black text-white grid grid-cols-12 uppercase border-t-gray-700 border-t-2 pt-6 font-tandem-mono-medium"
    >
      <span className="pl-10 col-span-2 col-start-1">tandem creative dev</span>
      <div className="h-full col-start-8 col-span-1">
        <h2 className="mb-20">index</h2>
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
        <div className="w-7/12 flex gap-32 pl-10">
          <div>
            <h3 className="text-gray-500">timezone</h3>
            <p>london (uk) 4:44PM</p>
          </div>
          <div>
            <h3 className="text-gray-500">Location</h3>
            <p>london, uk</p>
          </div>
        </div>
        <div className="w-5/12">
          <h3 className="text-gray-500">socials</h3>
          <div className="flex flex-row gap-4">
            <p>instagram</p>
            <p>linkedin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
