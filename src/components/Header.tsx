import Nav from "./Nav";
import Time from "./Time";
export default function Header() {
  return (
    <header className="text-white bg-none flex justify-between w-full m-auto uppercase font-tandem-mono-medium pt-5 absolute top-0 left-0 z-50">
      <div className="m-auto w-11/12 flex justify-between">
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
    </header>
  );
}
