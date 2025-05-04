import React from "react";

function ComingSoon() {
  return (
    <div className="w-[85%] h-[300px] mx-auto mt-24 overflow-y-auto flex justify-center items-center">
      <div>
        <img
          src={require("../assets/Images/coming-soon.png")}
          className="h-[150px] w-[150px]"
        />
        <p className="text-center font-bold font-poppins text-black text-[14px] mt-2">
          Stay tuned
        </p>
      </div>
    </div>
  );
}

export default ComingSoon;
