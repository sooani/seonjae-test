
import React from "react";

const Progress = () => {
  return (
    <div className="w-full h-6 bg-white border-2 rounded-xl border-mbti-gray relative">
      <div
        className="absolute w-11 top-1/2 transition-all transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: "10%" }}
      >
        <img
          src="./images/progress.png"
          className="block w-full h-auto"
          alt="status 이미지"
        />
      </div>
      <div className="w-full h-full rounded-xl overflow-hidden">
        <span
          className="block h-full bg-mbti-pink transition-all"
          style={{ width: `calc(10% + 5px)` }}
        ></span>{" "}
        {/* status */}
      </div>
    </div>
  );
};

export default Progress;
