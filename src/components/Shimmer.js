import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmar-card mx-28 my-16 justify-start p-4 max-w-[265px] bg-gray-100 rounded-lg shadow-lg ">
      <div className="w-[235px] h-40 bg-gray-300 shimmer rounded-lg mb-4"></div>
      <div className="space-y-2">
        <div className="w-3/4 h-6 bg-gray-300 shimmer rounded"></div>
        <div className="w-1/2 h-6 bg-gray-300 shimmer rounded"></div>
        <div className="w-5/6 h-6 bg-gray-300 shimmer rounded"></div>
        <div className="w-2/3 h-6 bg-gray-300 shimmer rounded"></div>
      </div>
    </div>
  );
};

export default Shimmer;
