import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoYoutube,
} from "react-icons/bi";
const Home = ({ data }) => {
  return (
    <div
      id="Home"
      className="flex min-h-screen w-full items-center justify-center "
    >
      <div className="flex flex-col items-center justify-center gap-6 p-4 text-center">
        <img
          src={`${
            data.img
              ? data.img
              : "https://i.pinimg.com/originals/1f/28/c6/1f28c68d2c35f389966b5a363b992d06.png"
          }`}
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-lg object-cover"
        />

        <div className="space-y-2 sm:space-y-4">
          <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold">
            {data.firstname} {data.lastname}
          </h1>
          <h3 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-medium">
            {data.position.toUpperCase()}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-[650px] leading-relaxed">
            {data.bio}
          </p>
        </div>

        <div className="flex gap-3">
          <Link to={data.githubUrl} target="_blank">
            <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          </Link>

          <Link to={data.linkedinUrl} target="_blank">
            <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          </Link>

          <Link to={data.instagramUrl} target="_blank">
            <BiLogoInstagram className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          </Link>

          <Link to={data.facebookUrl} target="_blank">
            <BiLogoFacebook className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          </Link>

          <Link target="_blank" to={data.youtubeUrl}>
            <BiLogoYoutube className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
