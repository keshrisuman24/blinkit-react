import React from "react";
import Categories from "./Categories";
import CategoriesProducts from "./CategoriesProducts";
import { useNavigate } from "react-router-dom";

const imageUrl =
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/";

const Body = () => {
  const adsData = [
    {
      id: 1,
      img: "2023-07/pharmacy-WEB.jpg",
      marginX: 0,
      height: 195,
    },
    {
      id: 2,
      img: "2023-07/Pet-Care_WEB.jpg",
      marginX: 5,
      height: 195,
    },
    {
      id: 3,
      img: "2023-03/babycare-WEB.jpg",
      marginX: 0,
      height: 195,
    },
  ];

  return (
    <div className="w-[85%] mx-auto mt-24 overflow-y-auto">
      <Ads img="2022-05/Group-33704.jpg" />

      <div className="flex flex-row px-[18px] mt-3">
        {adsData.map((ad) => (
          <Ads
            key={ad.id}
            img={ad.img}
            marginX={ad.marginX}
            height={ad.height}
          />
        ))}
      </div>

      <Categories />
      <CategoriesProducts />
    </div>
  );
};

const Ads = ({ img, marginX = 0, height }) => {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate("/comingsoon")}
      className={`cursor-pointer ${marginX ? "mx-5" : "mx-0"} ${
        height ? `h-[${height}px]` : "h-auto"
      }`}
      src={`${imageUrl}${img}`}
      alt="Advertisement"
    />
  );
};

export default Body;
