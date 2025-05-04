import React, { useState } from "react";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Relevance");

  const options = [
    "Relevance",
    "Price: Low to High",
    "Price: High to Low",
    "Popularity",
    "Newest First",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button to open/close dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" inline-flex items-center justify-between w-[200px] h-[30px] px-4 font-medium text-buttonGreen font-poppins text-[12px] bg-white border border-gray-200 rounded-sm shadow-sm hover:bg-gray-50"
      >
        {selectedOption}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[200px] rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100 transform opacity-100 scale-100">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <a
                key={index}
                onClick={() => handleOptionClick(option)}
                className=" font-poppins text-[12px] block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
