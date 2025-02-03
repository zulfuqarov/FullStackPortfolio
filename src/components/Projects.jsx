import React from "react";
import { Link } from "react-router-dom";
const Projects = ({ data }) => {
  return (
    <div
      id="Projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 "
    >
      <h1 className="text-center text-5xl font-light">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        {data.projects &&
          data.projects.map((prj, index) => (
            <Link
              to={`${prj.projectUrl}`}
              target="_blank"
              key={index}
              className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50"
            >
              <h1 className="text-3xl font-semibold">{prj.title}</h1>
              <h3 className="text-xl text-gray-600">{prj.position}</h3>
              <p className="text-sm text-gray-600">{prj.description}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Projects;
