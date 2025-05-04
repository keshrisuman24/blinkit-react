import React from "react";
import Categories from "./Categories";
import CategoriesProducts from "./CategoriesProducts";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  return (
    <div className="w-[85%] mx-auto mt-24 overflow-y-auto">
      <img
        onClick={() => navigate("/comingsoon")}
        className="cursor-pointer"
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
      />
      <div className="flex flex-row px-[18px] mt-3">
        <img
          onClick={() => navigate("/comingsoon")}
          className="cursor-pointer h-[195px]"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
        />
        <img
          onClick={() => navigate("/comingsoon")}
          className="cursor-pointer h-[195px] mx-5"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
        />
        <img
          onClick={() => navigate("/comingsoon")}
          className="cursor-pointer h-[195px]"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
        />
      </div>
      <Categories />
      <CategoriesProducts />
      
    </div>
  );
};

export default Body;
