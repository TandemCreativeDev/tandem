export default function TeamSection() {
  return (
    <>
      <div className="h-[1000px] w-full bg-black  pt-10">
        <div className="h-1/4 flex justify-between w-3/4 m-auto ">
          <h3>projects</h3>
          <div className="w-3/4">
            <p className="text-4xl font-tandem-block uppercase text-gray-400 mb-20">
              <span className="text-white">Our dedicated team specialises</span>{" "}
              in creating impactful digital soltuions for arts, music, and
              community focused projects.
            </p>
            <div className="flex gap-10 items-end font-tandem-mono uppercase">
              <div className="flex flex-col">
                <div className="h-[333px] w-[333px] bg-yellow-400"></div>
                <p>Jack Casstles-Jones</p>
                <p>Co-Founder \ Full-Stack Developer</p>
              </div>
              <div className="flex flex-col">
                <div className="h-[570px] w-[570px] bg-yellow-400"></div>
                <p>Maxime Downe</p>
                <p>Co-Founder \ Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
