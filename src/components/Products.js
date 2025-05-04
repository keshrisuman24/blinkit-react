import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ proCat }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScroll(); // Check initial scroll position
    const element = scrollContainerRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className="relative px-4">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          onClick={() => scroll("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}

      {/* Scrolling Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll no-scrollbar mt-3 mb-2 scroll-smooth space-x-5"
      >
        {proCat.products.map((product) => (
          <div
            key={product.id}
            className="min-w-[179px] h-[270px] border border-gray-200 rounded-md shadow-sm"
          >
            {product.off && (
              <div className="relative ml-3">
                <svg
                  className="absolute inset-0"
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
                    fill="#538CEE"
                  ></path>
                </svg>
                <div className="absolute flex items-center justify-center p-[6px]">
                  <p className="font-poppins text-wrap font-bold text-[9px] text-white line-clamp-2">
                    {product.off}
                  </p>
                </div>
              </div>
            )}
            <div className="h-[140px] flex items-center justify-center">
              <img
                onClick={() => navigate("/categoryDetail/productDetail")}
                className="cursor-pointer h-[140px]"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <div className="h-[110px] px-3">
              <p className="font-poppins font-semibold text-[12px] line-clamp-2 h-[38px] tracking-wide">
                {product.name}
              </p>
              <p className="font-poppins font-normal text-[11px] tracking-wider mt-2 text-gray-500">
                {product.grams}
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

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          onClick={() => scroll("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Products;
