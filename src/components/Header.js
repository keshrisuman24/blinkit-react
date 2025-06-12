import React from "react";
import { useNavigate } from "react-router-dom";

import downArrow from "../assets/Images/downarrow.png";
import searchIcon from "../assets/Images/search.png";
import cartIcon from "../assets/Images/cart.png";

const Header = (props) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="h-[90px] fixed top-0 left-0 w-full bg-white flex border-b border-gray-200 z-10">
      {/* Logo */}
      <div className="w-1.5/12 flex justify-center items-center border-r border-gray-200">
        <img
          onClick={() => navigate("/")}
          src="https://www.thehealthfactory.in/cdn/shop/files/BLINKIT_876a5ffa-38b0-4f7b-8c54-0c3b56d69c38.png?crop=center&height=2048&v=1697781264&width=2048"
          className="h-[40px] cursor-pointer"
          alt="Blinkit Logo"
        />
      </div>

      {/* Delivery Info */}
      <div className="w-2.5/12 flex flex-col justify-center items-center cursor-pointer">
        <p className="font-poppins font-extrabold text-[18px]">
          Delivery in 8 minutes
        </p>
        <div className="flex items-center">
          <p className="font-poppins text-[13px]">
            Kharar, Punjab 140301, India
          </p>
          <img
            src={downArrow}
            className="h-[14px] w-[14px] ml-[4px] mt-[1px]"
            alt="Dropdown"
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-5.5/12 flex justify-center items-center">
        <div className="h-[44px] w-[95%] bg-gray-100 border rounded-lg flex flex-row items-center px-2">
          <img
            src={searchIcon}
            className="h-[20px] w-[20px]"
            alt="Search"
          />
          <input
            type="text"
            className="w-[92%] bg-transparent h-[44px] ml-2 focus:outline-none font-poppins text-[14px]"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Login & Cart */}
      <div className="w-2.5/12 flex justify-around items-center">
        <div className="ml-2 cursor-pointer">
          <p className="font-poppins font-thin text-[18px]">Login</p>
        </div>
        <div
          onClick={() => props.openCart()}
          className="h-[50px] w-[100px] rounded-lg bg-buttonGreen flex items-center justify-center cursor-pointer space-x-2"
        >
          <img
            src={cartIcon}
            className="h-[30px] w-[30px]"
            alt="Cart"
          />
          <p className="font-poppins font-bold text-[14px] text-white">
            My Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
