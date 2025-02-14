import Nav from "./Nav";
import Time from "./Time";
export default function Header() {
  return (
    <div className=" bg-none -z-50 flex justify-between w-11/12 m-auto uppercase font-tandem-mono font-medium pt-5">
      <div className="w-1/3">
        <Time />
      </div>
      <div className="w-1/3">
        <h1 className="text-center">tandem creative dev</h1>
      </div>
      <div className="w-1/3 self-end">
        <Nav />
      </div>
    </div>
  );
}
