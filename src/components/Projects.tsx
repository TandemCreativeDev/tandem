export default function ProjectsSection() {
  const projects = [
    "wedgy music",
    "clark's bowling club",
    "thing we do",
    "ruby kiwinda",
  ];

  return (
    <>
      <div className="h-[1000px] w-full bg-gray-600  pt-10">
        <div className="h-1/4 bg-red-400 flex justify-between w-3/4 m-auto ">
          <h3>projects</h3>
          <div className="flex flex-col">
            {projects.map((project, index) => {
              return (
                <button className="text-start text-3xl uppercase bg-blue-400">
                  {project}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
