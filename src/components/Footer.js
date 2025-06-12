import React from "react";
import { footerLinks } from "../assets/JsonObjects/footerContent";

const Footer = () => {
  return (
    <div className="w-[85%] mx-auto mt-24 overflow-y-auto">
      <div className="flex flex-col md:flex-row">
        {/* Useful Links */}
        <div className="md:w-5/12">
          <p className="font-poppins font-bold text-[17px]">Useful Links</p>
          <div className="flex flex-wrap mt-3 overflow-x-hidden">
            {footerLinks.sections.map((link, index) => (
              <p
                key={`link-${index}`}
                className="tracking-wide cursor-pointer w-4/12 font-poppins font-normal text-[14px] mt-3 text-gray-500"
              >
                {link}
              </p>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="md:w-7/12 mt-10 md:mt-0">
          <div className="flex flex-row">
            <p className="font-poppins font-bold text-[17px]">Categories</p>
            <p className="text-buttonGreen font-medium text-[15px] ml-3">
              see all
            </p>
          </div>
          <div className="flex flex-wrap mt-6 overflow-x-hidden">
            {footerLinks.categories.map((category, index) => (
              <p
                key={`category-${index}`}
                className="tracking-wide cursor-pointer w-4/12 font-poppins font-normal text-[14px] mt-3 text-gray-500"
              >
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* App download & social icons */}
      <div className="h-[90px] w-[98%] flex flex-col md:flex-row mx-auto bg-gray-100 mt-14 justify-center items-center">
        {/* Copyright */}
        <div className="md:w-4/12 text-center mb-4 md:mb-0">
          <p className="tracking-wide font-poppins font-normal text-[12px] text-gray-500">
            © Blinkit Clone, Suman Kumar Keshari
          </p>
        </div>

        {/* App download */}
        <div className="md:w-4/12 flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0">
          <p className="tracking-wide text-center font-poppins font-bold text-[12px] text-gray-500 mb-2 md:mb-0">
            Download App
          </p>
          <div className="flex justify-center items-center ml-0 md:ml-4">
            <img
              src="https://blinkit.com/d61019073b700ca49d22.png"
              alt="Play Store"
              className="h-[30px] w-[92px]"
            />
            <img
              src="https://blinkit.com/8ed033800ea38f24c4f0.png"
              alt="App Store"
              className="h-[30px] w-[92px] ml-5"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="md:w-4/12">
          <div className="flex space-x-4 p-4 rounded-full justify-center md:justify-end">
            {/** Facebook */}
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white">
              <svg
                className="w-6 h-6"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="50" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2Z"
                  fill="#1F1F1F"
                />
              </svg>
            </div>

            {/** Twitter */}
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#1F1F1F]">
              <svg
                className="w-6 h-6"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="50" fill="#1F1F1F" />
                <path
                  d="M75 34.6178C73.4015 35.5058 71.4479 36.0386 69.6718 36.2162C71.6255 34.973 73.0463 33.0193 73.7568 30.7104C71.9807 31.7761 70.027 32.6641 67.7181 33.1969C65.9421 31.2432 63.6332 30 60.9691 30C55.8185 30 51.556 34.4402 51.556 40.1236C51.556 40.834 51.556 41.722 51.7336 42.4324C43.9189 42.0772 36.9923 37.9923 32.3745 31.9537C31.4865 33.3745 31.1313 35.1506 31.1313 37.1042C31.1313 40.6564 32.7297 43.6757 35.2162 45.4517C33.6178 45.4517 32.1969 44.9189 30.9537 44.2085V44.3861C30.9537 49.1815 34.1506 53.2664 38.4131 54.332C37.7027 54.5097 36.8147 54.6873 35.9266 54.6873C35.3938 54.6873 34.6834 54.6873 34.1506 54.5097C35.3938 58.5946 38.7683 61.4363 42.8533 61.4363C39.6564 64.1004 35.5714 65.6988 31.3089 65.6988C30.5985 65.6988 29.888 65.6988 29 65.5212C33.0849 68.3629 38.0579 70.139 43.3861 70.139C60.6139 70.139 70.027 54.8649 70.027 41.5444C70.027 41.1892 70.027 40.6564 70.027 40.3012C72.1583 38.5251 73.7568 36.749 75 34.6178Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Add other icons similarly with proper className */}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="my-6">
        <p className="tracking-wide text-center font-poppins font-normal text-[12px] text-gray-500">
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and
          is not related, linked or interconnected in whatsoever manner or
          nature, to “GROFFR.COM” which is a real estate services business
          operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </div>
  );
};

export default Footer;
