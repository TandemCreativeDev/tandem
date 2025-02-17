import Link from "next/link";
export default function FooterSection() {
  return (
    <section
      id="footer"
      className="h-[1000px] uppercase border-t-gray-700 border-t-2 pt-6"
    >
      <div className="flex w-full h-full">
        <div className="h-full w-7/12">
          <p className="font-tandem-mono pl-10">tandem creative dev</p>
        </div>
        <div className="h-full w-5/12">
          <p className="mb-20">index</p>
          <div className="flex flex-col text-5xl font-tandem-block ">
            <Link href={"#home"}>Home</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"#work"}>Work</Link>
            <Link href={"#clients"}>Clients</Link>
            <Link href={"#Team"}>Team</Link>
          </div>
        </div>
      </div>
      <footer className="flex font-tandem-mono pt-10">
        <div className="w-7/12 h-32 flex gap-32 pl-10">
          <div>
            <p>timezone</p>
            <p>london</p>
          </div>
          <div>
            <p>Location</p>
            <p>london uk</p>
          </div>
        </div>
        <div className="w-5/12 h-32 ">
          <div>
            <p>socials</p>
            <p>linkedin</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
