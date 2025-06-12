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
    <div className="mt-24 w-4/5 mx-auto flex">
      {/* Left Column - Product Images and Details */}
      <div className="w-[55%] border-b border-r pb-6">
        <div className="flex justify-center items-center h-[400px] w-full">
          <img src={selectedImage} alt="Product" className="h-[400px] w-[400px] object-cover" />
        </div>
        <div className="flex justify-center items-center mt-4">
          {productImages.map((image) => (
            <img
              key={image}
              src={image}
              alt="Thumbnail"
              className={`h-20 w-20 object-cover cursor-pointer rounded-md mx-2 ${
                selectedImage === image ? "border-2 border-buttonGreen" : "border border-gray-400"
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Product Description */}
        <div className="mt-10 px-6">
          <h2 className="text-xl font-extrabold text-black">Product Details</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-bold text-black">Fresh Milk</p>
              <p>Type</p>
            </div>
            <div>
              <p className="font-bold text-black">Unit</p>
              <p>1L</p>
            </div>
            <div>
              <p className="font-bold text-black">FSSAI License</p>
              <p>10012063000143</p>
            </div>
            <div>
              <p className="font-bold text-black">Shelf Life</p>
              <p>2 days</p>
            </div>
            <div>
              <p className="font-bold text-black">Return Policy</p>
              <p>The product is non-returnable. Replacements are available within 24 hours for damaged, expired, or incorrect items (sealed/unopened/unused only).</p>
            </div>
            <div>
              <p className="font-bold text-black">Manufacturer</p>
              <p>The Ropar District Co-op Milk Producer’s Union Ltd., Verka Mohali Dairy, S.A.S. Nagar, Mohali-160055</p>
            </div>
            <div>
              <p className="font-bold text-black">Marketed By</p>
              <p>The Punjab State Co-op Milk Producer's Union Federation Ltd., SCO No. 153-155, Sector-34A, Chandigarh-160022</p>
            </div>
            <div>
              <p className="font-bold text-black">Country of Origin</p>
              <p>India</p>
            </div>
            <div>
              <p className="font-bold text-black">Customer Care</p>
              <p>Email: info@blinkit.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Product Summary and Features */}
      <div className="w-[45%] h-full px-10 py-12 border-b">
        <p className="text-xs text-gray-700 font-medium">
          Home / Milk / <span className="text-gray-400">Verka Toned Milk</span>
        </p>
        <h1 className="text-2xl font-extrabold text-black mt-2">Verka Toned Milk</h1>

        <div className="h-6 w-16 bg-gray-100 flex justify-center items-center mt-2 rounded-sm">
          <img
            src="http://cdn.grofers.com/assets/eta-icons/15-mins.png"
            height="12"
            width="12"
            alt="ETA"
          />
          <span className="text-xs font-bold text-black ml-1">11 MIN</span>
        </div>

        <div className="flex items-center mt-2 text-buttonGreen cursor-pointer">
          <p className="text-lg font-medium">View all by Verka</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <div className="border-b mt-4" />

        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-xs">400 g</p>
            <p className="text-base font-bold text-black">MRP ₹ 199</p>
            <p className="text-[10px] text-gray-500">(Inclusive of all taxes)</p>
          </div>
          <button className="h-8 w-16 rounded-md bg-lightGreen border border-buttonGreen text-buttonGreen font-medium text-sm">
            ADD
          </button>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Why shop from blinkit?</h3>
          <div className="mt-4 space-y-4">
            {blinkitFeatures.map(({ id, title, description, icon }) => (
              <div key={id} className="flex items-center">
                <img src={icon} alt={title} className="h-[50px] w-[50px]" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-black">{title}</p>
                  <p className="text-xs text-gray-500 mt-1">{description}</p>
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
