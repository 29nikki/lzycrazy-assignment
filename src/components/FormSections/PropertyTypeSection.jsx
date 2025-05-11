import React, { useState } from 'react';

const PropertyTypeSection = ({ formData, handleRadioChange }) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleOptionClick = (value) => {
    setHasInteracted(true);

    // Toggle logic to allow deselection
    if (formData.propertyType === value) {
      handleRadioChange('propertyType', '');
    } else {
      handleRadioChange('propertyType', value);
    }
  };

  const showError = hasInteracted && !formData.propertyType;

  return (
    <div className="px-6 py-4 border-t border-gray-400">
      <h2 className="font-bold mb-4 text-left">INCLUDE SOME DETAILS</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-left">
          <span className=" font-medium">Type *</span>
        </label>
        <div className="flex flex-col gap-1">
          <div>
            <button
              type="button"
              className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'flats' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
              onClick={() => handleOptionClick('flats')}
            >
              Flats / Apartment
            </button>

            <button
              type="button"
              className={`py-2 px-4 sm:ml-2 mt-2 sm:mt-0 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'independent/builder' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
              onClick={() => handleOptionClick('independent/builder')}
            >
              Independent / Builder Floors
            </button>
          </div>

          <div>
            <button
              type="button"
              className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'farmHouse' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
              onClick={() => handleOptionClick('farmHouse')}
            >
              Farm House
            </button>

            <button
              type="button"
              className={`py-2 px-4 ml-2 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'houseVilla' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
              onClick={() => handleOptionClick('houseVilla')}
            >
              House & Villa
            </button>
          </div>
        </div>

        {showError && (
          <p className="text-red-500 text-xs mt-1">
            Property type is mandatory. Please select an option.
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyTypeSection;
