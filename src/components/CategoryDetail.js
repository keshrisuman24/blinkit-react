import React from "react";
import {
  favCategories,
  milkProducts,
  subCategories,
} from "../assets/JsonObjects/productImages";
import SortDropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const CategoryDetail = () => {
  const navigate = useNavigate();
  const milkList = [
    { id: 1, name: "Amul Milk", quantity: "1 Litre", price: "₹ 60" },
    { id: 2, name: "Dairy Craft Milk", quantity: "1 Litre", price: "₹ 65" },
    { id: 3, name: "Nandini Milk", quantity: "1 Litre", price: "₹ 55" },
    { id: 4, name: "Patanjali Milk", quantity: "1 Litre", price: "₹ 50" },
    { id: 5, name: "Mother Dairy Milk", quantity: "1 Litre", price: "₹ 70" },
    { id: 6, name: "Aavin Milk", quantity: "1 Litre", price: "₹ 60" },
    { id: 7, name: "Vallombrosa Milk", quantity: "1 Litre", price: "₹ 80" },
    { id: 8, name: "Dairy Best Milk", quantity: "1 Litre", price: "₹ 75" },
    { id: 9, name: "Saras Milk", quantity: "1 Litre", price: "₹ 55" },
    { id: 10, name: "Vijaya Milk", quantity: "1 Litre", price: "₹ 65" },
  ];

  return (
    <div className="mt-[90px]">
      <div className="border border-b border-gray-200 shadow-md">
        <div className="flex flex-row justify-center items-center w-[85%] mx-auto overflow-y-auto">
          {favCategories.map((category, idx) => (
            <div key={idx} className="px-4 h-[44px] hover:bg-slate-100">
              <p className="font-poppins font-thin text-[14px] text-gray-600 py-[10px]">
                {category}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 w-[84%] mx-auto border border-gray-200">
        <div className="col-span-3 mt-2 max-h-screen overflow-y-auto scrollbar-hide cursor-pointer">
          {subCategories.map((subcat, index) => (
            <div
              key={subcat.id || index}
              className="h-[75px] border border-gray-200 flex items-center"
            >
              {index === 0 && <div className="w-1 h-full bg-buttonGreen"></div>}
              <div className="ml-3 h-[50px] w-[50px] flex justify-center items-center bg-gray-100 rounded-md">
                <img
                  src={subcat.image}
                  alt={subcat.name}
                  className="h-[50px] w-[40px]"
                />
              </div>
              <p className="font-poppins font-medium text-[14px] ml-3">
                {subcat.name}
              </p>
            </div>
          ))}
        </div>

        <div className="col-span-9 bg-gray-100 max-h-screen overflow-y-auto scrollbar-hide">
          <div className="h-[50px] bg-white border border-gray-200 flex justify-between items-center px-3">
            <p className="font-poppins font-semibold text-[16px] tracking-wide">
              Dairy & Breakfast
            </p>
            <div className="flex items-center">
              <p className="font-poppins font-normal text-[13px] tracking-wider text-gray-600 mr-2">
                Sort by
              </p>
              <SortDropdown />
            </div>
          </div>

          <div className="flex flex-wrap">
            {milkProducts.map((product) => (
              <div
                onClick={() => navigate("productDetail")}
                key={product.id}
                className="w-[183px] h-[270px] border border-gray-200 rounded-md shadow-sm bg-white m-1 cursor-pointer"
              >
                <div className="h-[140px] flex items-center justify-center">
                  <img
                    className="h-[140px]"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="h-[110px] px-3">
                  <p className="font-poppins font-semibold text-[12px] line-clamp-2 h-[38px] tracking-wide">
                    {product.name}
                  </p>
                  <p className="font-poppins font-normal text-[11px] text-gray-500 mt-2">
                    {product.quantity}
                  </p>
                  <div className="flex justify-between mt-5">
                    <p className="font-poppins font-semibold mt-1 text-[12px] tracking-wide">
                      {product.price}
                    </p>
                    <button className="h-[32px] w-[60px] rounded-md bg-lightGreen border border-buttonGreen flex justify-center items-center">
                      <p className="font-poppins font-medium text-[13px] text-buttonGreen">
                        ADD
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[84%] mx-auto p-10 border border-gray-200">
        <p className="font-poppins text-[20px] text-gray-600 font-extrabold mt-2">
          Milk
        </p>
        <p className="font-poppins text-[14px] text-gray-800 mt-3 tracking-tightest">
          The richness of milk as nature’s perfect food is demonstrated by its
          widespread usage across households. Whether consumed as a drink or
          used as an ingredient in various culinary creations, it continues to
          be a staple item in Indian kitchens. Milk plays a critical role in
          fulfilling daily nutritional needs.
        </p>

        <p className="font-poppins text-[18px] text-gray-600 font-extrabold mt-8">
          Composition:
        </p>
        <p className="font-poppins text-[14px] text-gray-800 mt-3 tracking-tightest">
          Primarily, milk contains water, proteins, fats, carbohydrates,
          vitamins (such as B12, D), and minerals like calcium, potassium, and
          magnesium. The balance of these nutrients makes milk a complete food
          source especially important for children, athletes, and those with
          nutritional deficiencies.
        </p>

        <p className="font-poppins text-[18px] text-gray-600 font-extrabold mt-8">
          Types of Milk:
        </p>
        <p className="font-poppins text-[14px] text-gray-800 mt-3 tracking-tightest">
          Different types of milk depend on their origin and composition:
        </p>

        <p className="font-poppins text-[17px] text-gray-600 font-extrabold mt-4">
          Cow’s Milk:
        </p>
        <p className="font-poppins text-[13px] text-gray-800 mt-3 tracking-tightest">
          Cow’s milk is regarded as one of the most popular types of milk,
          especially for its digestibility and lower fat content compared to
          buffalo milk. It is rich in calcium and essential amino acids,
          promoting healthy bones and muscle development.
        </p>

        <p className="font-poppins text-[17px] text-gray-600 font-extrabold mt-8">
          Buffalo’s Milk:
        </p>
        <p className="font-poppins text-[13px] text-gray-800 mt-3 tracking-tightest">
          Buffalo's milk can be considered equivalent to cows’ but contains
          higher fat content. It is creamier and thicker, making it suitable for
          preparing dairy products like paneer, ghee, and yogurt.
        </p>

        <div className="flex flex-row h-[300px] justify-between mt-10">
          <div className="w-1/2">
            <p className="font-poppins text-[16px] text-black font-extrabold mt-8">
              Buy Milk at Online grocery store in India
            </p>
            <p className="font-poppins text-[12px] text-gray-600 mt-3 tracking-tightest">
              Are you super fond of online shopping because you hate crowded
              supermarkets? If yes, then Big Grocery is the perfect online store
              for you. From milk, butter, and ghee to yogurt and paneer—you can
              shop all kinds of dairy products from the comfort of your home.
              Order now and get fast delivery at your doorstep.
            </p>
          </div>

          <div className="w-1/2">
            <p className="font-poppins text-[16px] text-black font-extrabold mt-8">
              Milk Price List
            </p>
            <div className="flex justify-between my-3">
              <p className="font-poppins text-[13px] font-bold text-black tracking-tightest">
                Milk
              </p>
              <p className="font-poppins text-[13px] font-bold text-gray-600 tracking-tightest">
                Price
              </p>
            </div>
            {milkList.map((milk) => (
              <div key={milk.id} className="flex justify-between mt-1">
                <p className="font-poppins text-[11px] text-buttonGreen tracking-tightest">
                  {milk.id}. {milk.name}
                </p>
                <p className="font-poppins text-[11px] text-gray-600 tracking-tightest">
                  {milk.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
