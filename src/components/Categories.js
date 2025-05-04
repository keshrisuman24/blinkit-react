import React from "react";
import categoriesImage from "../assets/JsonObjects/categoriesImage";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap mt-3 overflow-x-hidden">
      {categoriesImage.map((category) => (
        <img
          onClick={() => navigate("categoryDetail")}
          className="cursor-pointer h-[189px]"
          src={category.url}
        />
      ))}
    </div>
  );
};

export default Categories;
