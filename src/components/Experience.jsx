import React from "react";

const Experience = ({ data }) => {
  return (
    <div
      id="Experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 "
    >
      <h1 className="text-center text-5xl font-light">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 w-full">
        {data.experience &&
          data.experience.map((exp, index) => (
            <div className="relative space-y-4 border-l p-8 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">{exp.role}</h3>
              <p className="font-light text-lg text-gray-600">{exp.jobTitle}</p>
              <p className="text-sm text-gray-600">{exp.description}</p>
              <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500"></span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
