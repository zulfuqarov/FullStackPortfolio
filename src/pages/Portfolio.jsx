import React from "react";
import HeaderLeft from "../components/HeaderLeft";
import Home from "../components/Home";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
const Portfolio = () => {
  return (
    <div className="flex min-h-screen w-full subpixel-antialiased">
      <HeaderLeft />

      <main className="flex-[3] justify-center items-center overflow-y-auto   w-full h-screen max-[768px]:pt-[87px]">
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;
