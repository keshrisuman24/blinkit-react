import React from "react";
import { productByCategories } from "../assets/JsonObjects/productImages";
import Products from "./Products";

const CategoriesProducts = () => {
  
  return (
    <div>
      {productByCategories.map((proCat) => (
        <div className="mt-3" key={proCat.id}>
          <div className="flex justify-between mt-6 px-4">
            <p className="font-poppins font-extrabold text-[22px]">
              {proCat.categoryName}
            </p>
            <p className="text-buttonGreen font-semibold text-[18px]">
              see all
            </p>
          </div>
          <Products proCat={proCat} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesProducts;
