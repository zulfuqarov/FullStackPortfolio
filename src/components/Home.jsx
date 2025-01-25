import React from "react";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoYoutube,
} from "react-icons/bi";
const Home = () => {
  return (
    <div
      id="Home"
      className="flex min-h-screen w-full items-center justify-center bg-gray-100"
    >
      <div className="flex flex-col items-center justify-center gap-6 p-4 text-center">
        <img
          src="https://avatars.mds.yandex.net/i?id=032389f94f3c561128b21fa7211ac77a_l-7467285-images-thumbs&n=13"
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-lg object-cover"
        />

        <div className="space-y-2 sm:space-y-4">
          <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold">
            Harrison Morgan
          </h1>
          <h3 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-medium">
            Web Developer
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-[650px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            quaerat id tempore nobis ex facilis itaque, assumenda tempora in?
            Neque odit eum tempora? Quae sapiente esse omnis laborum
            voluptatibus illum.
          </p>
        </div>

        <div className="flex gap-3">
          <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />

          <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />

          <BiLogoInstagram className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />

          <BiLogoFacebook className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />

          <BiLogoYoutube className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12" />
        </div>
      </div>
    </div>
  );
};

export default Home;
