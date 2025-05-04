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
    {
      id: 1,
      name: "Amul Milk",
      quantity: "1 Litre",
      price: "₹ 60",
    },
    {
      id: 2,
      name: "Dairy Craft Milk",
      quantity: "1 Litre",
      price: "₹ 65",
    },
    {
      id: 3,
      name: "Nandini Milk",
      quantity: "1 Litre",
      price: "₹ 55",
    },
    {
      id: 4,
      name: "Patanjali Milk",
      quantity: "1 Litre",
      price: "₹ 50",
    },
    {
      id: 5,
      name: "Mother Dairy Milk",
      quantity: "1 Litre",
      price: "₹ 70",
    },
    {
      id: 6,
      name: "Aavin Milk",
      quantity: "1 Litre",
      price: "₹ 60",
    },
    {
      id: 7,
      name: "Vallombrosa Milk",
      quantity: "1 Litre",
      price: "₹ 80",
    },
    {
      id: 8,
      name: "Dairy Best Milk",
      quantity: "1 Litre",
      price: "₹ 75",
    },
    {
      id: 9,
      name: "Saras Milk",
      quantity: "1 Litre",
      price: "₹ 55",
    },
    {
      id: 10,
      name: "Vijaya Milk",
      quantity: "1 Litre",
      price: "₹ 65",
    },
  ];
  return (
    <div className="mt-[90px]">
      <div className="border border-b border-gray-200 shadow-md">
        <div className="flex flex-row justify-center items-center w-[85%] mx-auto overflow-y-auto">
          {favCategories.map((category) => (
            <div className="px-4 h-[44px] hover:bg-slate-100">
              {category == "More"}
              <p className="font-poppins font-thin text-[14px] text-gray-600 py-[10px]">
                {category}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 w-[84%] mx-auto border border-gray-200">
        <div className="col-span-3 mt-2 h-screen overflow-y-scroll scrollbar-hide cursor-pointer">
          {subCategories.map((subcat, index) => (
            <div
              key={index}
              className="h-[75px] border border-gray-200 flex items-center"
            >
              {index == 0 ? (
                <div className="w-1 h-[100%] bg-buttonGreen"></div>
              ) : null}
              <div className="ml-3 h-[50px] w-[50px] flex flex-row justify-center items-center bg-gray-100 rounded-md">
                <img src={subcat.image} className="h-[50px] w-[40px]" />
              </div>

              <p className="font-poppins font-medium text-[14px] ml-3">
                {subcat.name}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-9 bg-gray-100 h-screen overflow-y-scroll scrollbar-hide">
          <div className="h-[50px] bg-white border border-gray-200 flex flex-row justify-between items-center px-3">
            <p className="font-poppins font-semibold text-[16px] line-clamp-2 tracking-wide">
              Dairy & Breakfast
            </p>

            <div className="flex flex-row justify-center items-center">
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
                className="w-[183px] h-[270px] border border-gray-200 rounded-md shadow-sm bg-white m-1"
              >
                <div className="h-[140px] flex items-center justify-center">
                  <img
                    className="cursor-pointer h-[140px]"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="h-[110px] px-3">
                  <p className="font-poppins font-semibold text-[12px] line-clamp-2 h-[38px] tracking-wide">
                    {product.name}
                  </p>
                  <p className="font-poppins font-normal text-[11px] tracking-wider mt-2 text-gray-500">
                    {product.quantity}
                  </p>
                  <div className="flex justify-between mt-5">
                    <p className="font-poppins font-semibold mt-1 text-[12px] line-clamp-2 h-[38px] tracking-wide">
                      {product.price}
                    </p>
                    <div className="h-[32px] w-[60px] rounded-md bg-lightGreen border border-buttonGreen flex flex-row justify-center items-center">
                      <p className="font-poppins font-medium text-[13px] text-buttonGreen">
                        ADD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[84%] mx-auto p-10  border border-gray-200">
        <>
          <p className="font-poppins text-[20px] text-gray-600 font-extrabold mt-2">
            Milk
          </p>
          <p className="font-poppins text-[14px] text-gray-800 mt-3 tracking-tightest">
            The richness of milk as nature’s perfect food is demonstrated by its
            high content of essential nutrients, variety in cooking, and most
            importantly its indispensable role in sustaining life. Milk has been
            more than just a biological necessity for human consumption since it
            originated as an essential diet for young mammals.
          </p>
          <p className="font-poppins text-[18px] text-gray-600 font-extrabold mt-8">
            Composition:
          </p>
          <p className="font-poppins text-[14px] text-gray-800 mt-3 tracking-tightest">
            Primarily, milk contains water, proteins, fats, carbohydrates,
            vitamins, and minerals that together determine its nutritive value
            and sensory properties. Water accounts for about 87% of the total
            volume of milk making it a major component. Proteins such as casein
            and whey contain all the necessary amino acids required for growth
            and development (Tungland & Meyer 2018). The lipid components
            contain saturated fats, monounsaturated fats, and polyunsaturated
            fats which are responsible for taste enhancement in milk but also
            act as carriers for fat-soluble vitamins including A, D, E and K
            among others. Primarily lactose is the principal carbohydrate
            providing an energy source while facilitating mineral absorption
            (Young et al., 2013). Besides these elements, there are other vital
            minerals such as calcium, phosphorus, potassium, and magnesium,
            which help to retain good muscle function, bone health processes
            along metabolic processes
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
            Cow’s milk is regarded as one of the most popular types of milk
            globally both in terms of consumption and recognition. It holds
            great importance because it consists of proteins calcium vitamins
            among many others needed by our bodies. Furthermore; cow’s milk is
            used in diverse culinary creations ranging from healthy breakfast
            cereals to heavenly desserts due to its creamy texture with mild
            flavor (Bowen et al., 2016).
          </p>
          <p className="font-poppins text-[17px] text-gray-600 font-extrabold mt-8">
            Buffalo’s Milk:
          </p>
          <p className="font-poppins text-[13px] text-gray-800 mt-3 tracking-tightest">
            Buffalo's milk can be considered equivalent to cows’ but it is
            richer or creamier than such kind. Having slightly different
            components from those found in bovine versions buffalo's have higher
            fat contents hence they are used to make creamy dairy products for
            example cheese and yoghurt (Tungland & Meyer 2018). Additionally,
            buffalo’s milk tends to be tastier thus enhancing the flavor of
            different meals from sweet treats to savory foods.
          </p>
        </>
        <div className="flex flex-row h-[300px] justify-between mt-10">
          <div className="w-1/2">
            <p className="font-poppins text-[16px] text-black font-extrabold mt-8">
              Buy Milk at Online grocery store in india
            </p>
            <p className="font-poppins text-[12px] text-gray-600 mt-3 tracking-tightest">
              Are you super fond of online shopping because you hate crowded
              supermarkets? Now you don't need to be worry as Blinkit is
              delivering Milk at your doorstep superfast with easy returns for
              your complete peace of mind. Get Milk delivered to your home in
              minutes. you can check Milk price before buying. We deliver Milk
              at Delhi, Gurgaon, Kolkata, Lucknow, Mumbai, Bengaluru, Ahmedabad,
              Noida, Ghaziabad, Faridabad, Hyderabad, Jaipur, Pune, Chennai,
              Chandigarh, Ludhiana, Vadodara, Meerut, Kanpur, Panchkula, Kharar,
              Amritsar, Bhopal, Indore, Zirakpur, Jalandhar, Dehradun, Agra,
              Mohali, Goa, Patiala, Sonipat, Bhiwadi, Kota, Rohtak, Bahadurgarh,
              Haridwar, Bathinda, Kochi, Jodhpur Buy from several popular brands
              like Verka.
            </p>
          </div>
          <div className="w-1/2">
            <p className="font-poppins text-[16px] text-black font-extrabold mt-8">
              Milk Price List
            </p>
            <div className="flex flex-row justify-between my-3">
              <p className="font-poppins text-[13px] text-black tracking-tightest font-bold">
                Milk
              </p>
              <p className="font-poppins text-[13px] text-gray-600 tracking-tightest font-bold">
                Price
              </p>
            </div>
            {milkList.map((milk) => (
              <div key={milk.id} className="flex flex-row justify-between mt-1">
                <p className="font-poppins text-[11px] text-buttonGreen tracking-tightest">
                  {milk.id}
                  {"."} {milk.name}
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
