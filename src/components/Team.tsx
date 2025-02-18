export default function TeamSection() {
  return (
    <section
      id="team"
      className="h-[1000px] w-full grid grid-cols-12 bg-black  pt-10"
    >
      <h3 className="col-span-1 col-start-3">projects</h3>
      <div className="col-start-5 col-span-8">
        <p className="text-4xl font-tandem-block uppercase text-gray-400 mb-20">
          <span className="text-white">Our dedicated team specialises</span> in
          creating impactful digital solutions for arts, music, and community
          focused projects.
        </p>
        <div className="col-start-5 col-span-8">
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
    </section>
  );
}
