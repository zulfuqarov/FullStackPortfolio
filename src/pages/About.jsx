// AboutPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import ImgPortfolio from "../assets/img/25.01.2025_13.57.51_REC.png";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-7xl flex flex-col md:flex-row lg:flex-row xl:flex-row">
        {/* Left Section - Information */}
        <div className="flex-1 p-6 md:p-12 lg:p-16">
          <h1 className="text-4xl font-bold text-teal-800 mb-6">
            Why Create a Professional Portfolio?
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            A portfolio is your personal brand. It showcases your skills,
            projects, and experience in a way that helps you stand out.
          </p>
          <p className="text-md text-gray-600 mb-8">
            Whether you're an aspiring professional or an industry expert, a
            strong portfolio can open doors to new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="http://localhost:5174/Login"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300 w-full sm:w-auto text-center"
              target="_blank"
            >
              Get Started
            </Link>
            <Link
              to="http://localhost:5174/Register"
              className="inline-block px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition duration-300 w-full sm:w-auto text-center"
              target="_blank"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>

        {/* Right Section - Portfolio Image */}
        <div className="flex-1 p-6 md:p-12 lg:p-16 flex justify-center items-center">
          <img
            src={ImgPortfolio}
            alt="Portfolio Example"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
