import React from 'react';

const BHKSection = ({ formData, handleRadioChange }) => {
  const handleOptionClick = (value) => {
    // If already selected, deselect it
    if (formData.bhk === value) {
      handleRadioChange('bhk', '');
    } else {
      handleRadioChange('bhk', value);
    }
  };

  return (
    <div className="mb-4 px-6">
      <label className="block text-sm font-medium mb-2 text-left">
        <span className="font-medium">BHK</span>
      </label>
      <div className="flex gap-2">
        {['1', '2', '3', '4', '4+'].map((value) => (
          <button
            key={value}
            type="button"
            className={`py-2 px-7 border rounded-md text-sm transition-all duration-200 ${
              formData.bhk === value
                ? 'border-black bg-gray-100'
                : 'border-gray-300 hover:border-black hover:bg-gray-50'
            }`}
            onClick={() => handleOptionClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BHKSection;
