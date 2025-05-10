import React from 'react';

const PropertyTypeSection = ({ formData, handleRadioChange }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <h2 className="font-bold mb-4 text-left">INCLUDE SOME DETAILS</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-left">
          <span className="text-red-500 font-medium">Type *</span>
        </label>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <button 
            type="button"
            className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'flats' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
            onClick={() => handleRadioChange('propertyType', 'flats')}
          >
            Flats
          </button>
          <button 
            type="button"
            className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'apartment' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
            onClick={() => handleRadioChange('propertyType', 'apartment')}
          >
            Apartment
          </button>
          <button 
            type="button"
            className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'farmHouse' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
            onClick={() => handleRadioChange('propertyType', 'farmHouse')}
          >
            Farm House
          </button>
          <button 
            type="button"
            className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'houseVilla' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
            onClick={() => handleRadioChange('propertyType', 'houseVilla')}
          >
            House & Villa
          </button>
        </div>
        {!formData.propertyType && (
          <p className="text-red-500 text-xs mt-1">Property type is mandatory. Please select an option.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyTypeSection;
