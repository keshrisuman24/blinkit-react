import React, { useState } from "react";

const ProductDetail = () => {
  const blinkitFeatures = [
    {
      id: 1,
      title: "Superfast Delivery",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you.",
      icon: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png",
    },
    {
      id: 2,
      title: "Best Prices & Offers",
      description:
        "Best price destination with offers directly from the manufacturers.",
      icon: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png",
    },
    {
      id: 3,
      title: "Wide Assortment",
      description:
        "Choose from 5000+ products across food, personal care, household & other categories.",
      icon: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png",
    },
  ];

  const productImages = [
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/da/cms-assets/cms/product/5254e3b4-8d70-4ef6-9170-3a4ace931932.jpg?ts=1738923608",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/da/cms-assets/cms/product/78bd34fc-8b85-4be4-b16f-72cd50abe14d.jpg?ts=1738923608",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/da/cms-assets/cms/product/7dde5612-b861-47ac-9a61-e7cba2b55d55.jpg?ts=1738923608",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/da/cms-assets/cms/product/30bd18d4-f33f-47a4-927c-2c0a49cf116d.jpg?ts=1738923608",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/da/cms-assets/cms/product/aacb72e6-9c58-4a5d-b1bf-99b45c700a0c.jpg?ts=1738923609",
  ];

  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  return (
    <div className="mt-[90px] w-[80%] mx-auto flex">
      <div className="w-[55%] border-b border-r pb-6">
        <div className="flex justify-center items-center h-[400px] w-full">
          <img
            src={selectedImage}
            alt="Product"
            className="h-[400px] w-[400px] object-cover"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          {productImages.map((image) => (
            <img
              key={image}
              src={image}
              alt="Product Thumbnail"
              className={`h-[80px] w-[80px] object-cover cursor-pointer rounded-md mx-2 ${
                selectedImage === image
                  ? "border-2 border-buttonGreen"
                  : "border border-gray-400"
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="border-b mt-6" />
        <div className="mt-10">
          <p className="font-poppins text-[21px] text-black font-extrabold mt-2">
            Product Details
          </p>
          <div className="mt-4 pr-8">
            <p className="font-poppins text-[13px] text-black font-bold mt-2">
              Fresh Milk
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">Type</p>
            <p className="font-poppins text-[13px] text-black font-bold mt-3">
              Unit
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">1L</p>
            <p className="font-poppins text-[13px] text-black font-bold mt-3">
              FSSAI License
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">
              10012063000143
            </p>
            <p className="font-poppins text-[13px] text-black font-bold mt-3">
              Shelf Life
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">
              2 days
            </p>
            <p className="font-poppins text-[13px] text-black font-bold mt-3">
              Return Policy
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">
              The product is non-returnable. For a damaged, defective, expired
              or incorrect item, you can request a replacement within 24 hours
              of delivery. In case of an incorrect item, you may raise a
              replacement or return request only if the item is sealed/
              unopened/ unused and in original condition.
            </p>
            <p className="font-poppins text-[13px] text-black font-bold mt-3">
              Manufacturer's Name and Address
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">
              The Ropar District Co-op Milk Producer’s Union Ltd., Verka Mohali
              Dairy, S.A.S. Nagar, Mohali-160055
            </p>
            <p className="font-poppins text-[13px] text-black font-bold mt-3">
              Marketed By
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">
              The Punjab State Co-op Milk Producer's Union Federation Ltd., Sco
              No. 153-155, Sector-34A, Chandigarh-160022
            </p>

            <p className="font-poppins text-[13px] text-black font-bold mt-3">
              Country of Origin
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">India</p>
            <p className="font-poppins text-[13px] text-black font-bold mt-3">
              Customer Care Details
            </p>
            <p className="font-poppins text-[13px] text-gray-500 mt-1">
              Email: info@blinkit.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[45%] h-screen border-b px-[40px] py-[50px]">
        <p className="font-poppins text-[12px] text-gray-700 font-medium">
          Home / Milk / <span className="text-gray-400">Verka Toned Milk</span>
        </p>
        <p className="font-poppins text-[22px] text-black font-extrabold mt-2">
          Verka Toned Milk
        </p>
        <div className="h-[25px] w-[60px] bg-gray-100 flex justify-center items-center mt-2 rounded-sm">
          <img
            src="http://cdn.grofers.com/assets/eta-icons/15-mins.png"
            height="12"
            width="12"
          />
          <p className="font-poppins text-[11px] text-black font-bold mt-[1px] ml-1">
            11 MIN
          </p>
        </div>
        <div className="flex mt-2">
          <p className="font-poppins text-[18px] text-buttonGreen font-medium mt-[4px]">
            View all by Verka
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4 mt-2 text-buttonGreen"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="border-b mt-4" />
        <div className="mt-4 flex justify-between">
          <div>
            <p className="font-poppins text-[12px]">400 g</p>
            <p className="font-poppins text-[14px] text-black font-bold">
              <b>MRP </b>₹ 199
            </p>
            <p className="font-poppins text-[10px] text-gray-500">
              (Inclusive of all taxes)
            </p>
          </div>
          <div>
            <div className="h-[32px] w-[60px] rounded-md bg-lightGreen border border-buttonGreen flex flex-row justify-center items-center">
              <p className="font-poppins font-medium text-[13px] text-buttonGreen">
                ADD
              </p>
            </div>
          </div>
        </div>
        <div className="items-start mt-10">
          <p className="font-poppins text-[18px] font-semibold">
            Why shop from blinkit?
          </p>
          <div>
            {blinkitFeatures.map((feature) => (
              <div className="flex mt-4 items-center" key={feature.id}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-[50px] w-[50px]"
                />
                <div className="ml-3">
                  <p className="font-poppins text-[12px]">{feature.title}</p>
                  <p className="font-poppins text-[11px] text-gray-500 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
