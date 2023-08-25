import React from 'react';

const StoreBreadcrump = () => {
  return (
    <div className="bg-white border border-gray-400 p-2 text-gray-400 text-sm flex justify-between items-center">
      <div>
        <p>
          خانه / <span className=" text-gray-800">فروشگاه</span>
        </p>
      </div>

      <select
        className="border-b outline-none bg-white border-gray-400 focus:border-red-400 text-gray-800 lightFont"
        name="sort"
        id="sort"
      >
        <option value="newest">جدیدترین</option>
        <option value="cheapest">ارزانترین</option>
        <option value="expensive">گرانترین</option>
        <option value="popular">محبوب ترین</option>
      </select>
    </div>
  );
};

export default StoreBreadcrump;
