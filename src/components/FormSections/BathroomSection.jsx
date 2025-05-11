import React, { useState, useEffect } from 'react';

const BathroomSection = ({ formData, handleRadioChange }) => {
  const [touched, setTouched] = useState(false);

  const handleOptionClick = (value) => {
    setTouched(true);
    if (formData.bathrooms === value) {
      handleRadioChange('bathrooms', '');
    } else {
      handleRadioChange('bathrooms', value);
    }
  };

  return (
    <div className="mb-4 px-6">
      <label className="block text-sm font-medium mb-2 text-left">
        <span className=" font-medium">Bathrooms </span>
      </label>
      <div className="flex gap-2">
        {['1', '2', '3','4', '4+'].map((value) => (
          <button 
            key={value}
            type="button"
            className={`py-2 px-7 border rounded-md text-sm transition-all duration-200 ${
              formData.bathrooms === value
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

export default BathroomSection;
