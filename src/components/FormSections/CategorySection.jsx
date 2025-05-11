import React from 'react';

const CategorySection = () => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <h2 className="font-bold mb-4 text-left">SELECTED CATEGORY</h2>
      <div className="text-sm text-gray-600 flex items-center">
        <span>Properties / For Sale : Houses & Apartments</span>
        <button className="ml-2 text-blue-500 font-bold transition-all duration-200 hover:text-blue-700 underline">Change</button>
      </div>
    </div>
  );
};

export default CategorySection;
