import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ContextPortfolio from "./context/ContextPortfolio";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ContextPortfolio>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/:name" element={<Portfolio />} />
        </Routes>
      </ContextPortfolio>
    </>
  );
};

export default App;
