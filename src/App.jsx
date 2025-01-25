import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/:name" element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default App;
