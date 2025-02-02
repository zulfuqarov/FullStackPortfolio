import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ContextPortfolio from "./context/ContextPortfolio";
const App = () => {
  return (
    <>
      <ContextPortfolio>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/:name" element={<Portfolio />} />
        </Routes>
      </ContextPortfolio>
    </>
  );
};

export default App;
