import React from "react";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 "
    >
      <h1 className="text-center text-5xl font-light">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project</h1>
          <h3 className="text-xl text-gray-600">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            tempore porro blanditiis eius officiis ullam similique perferendis
            consequatur cupiditate incidunt.
          </p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project</h1>
          <h3 className="text-xl text-gray-600">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            tempore porro blanditiis eius officiis ullam similique perferendis
            consequatur cupiditate incidunt.
          </p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project</h1>
          <h3 className="text-xl text-gray-600">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            tempore porro blanditiis eius officiis ullam similique perferendis
            consequatur cupiditate incidunt.
          </p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className="text-3xl font-semibold">Project</h1>
          <h3 className="text-xl text-gray-600">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            tempore porro blanditiis eius officiis ullam similique perferendis
            consequatur cupiditate incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
