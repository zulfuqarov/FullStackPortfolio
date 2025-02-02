import React, { useContext, useEffect } from "react";
import HeaderLeft from "../components/HeaderLeft";
import Home from "../components/Home";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { PortfolioContext } from "../context/ContextPortfolio";
import { useParams, Link } from "react-router-dom";
const Portfolio = () => {
  const { data, getPorfolio, loading } = useContext(PortfolioContext);
  const { name } = useParams();

  useEffect(() => {
    getPorfolio(name);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return data ? (
    <div className="flex min-h-screen w-full subpixel-antialiased">
      <HeaderLeft />

      <main className="flex-[3] justify-center items-center overflow-y-auto   w-full h-screen max-[768px]:pt-[87px]">
        <Home data={data} />
        <Experience data={data} />
        <Projects data={data} />
        <Contact data={data} />
      </main>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Portfolio Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find the portfolio for the user you are looking
          for. Please check the information you entered or try a different
          username.
        </p>
        <div className="text-center">
          <Link
            to="/"
            className="inline-block text-white bg-teal-500 hover:bg-teal-600 rounded-lg py-2 px-6"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
