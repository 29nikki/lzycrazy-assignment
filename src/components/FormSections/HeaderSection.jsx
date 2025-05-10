import React from 'react';

const HeaderSection = () => {
  return (
    <div className="p-4 border-b border-gray-200 flex items-center">
      <button className="mr-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
      </button>
      <h1 className="text-xl font-bold">Post Your Property</h1>
    </div>
  );
};

export default HeaderSection;
