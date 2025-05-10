import React from 'react';

const UserDetailsSection = ({ formData, handleInputChange }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <h2 className="font-bold mb-4 text-left">REVIEW YOUR DETAILS</h2>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-1 text-left">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="OLX User"
          />
          <div className="text-xs text-right text-gray-500 mt-1">8 / 30</div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-1/3">
          <label className="block text-sm text-left">Your phone number</label>
        </div>
        <div className="w-2/3">
          <span className="text-sm">+917015734771</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsSection;
