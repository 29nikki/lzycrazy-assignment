import React from 'react';

const BathroomSection = ({ formData, handleRadioChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 text-left">
        <span className="text-red-500 font-medium">Bathrooms *</span>
      </label>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <button 
          type="button"
          className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bathrooms === '1' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
          onClick={() => handleRadioChange('bathrooms', '1')}
        >
          1
        </button>
        <button 
          type="button"
          className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bathrooms === '2' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
          onClick={() => handleRadioChange('bathrooms', '2')}
        >
          2
        </button>
        <button 
          type="button"
          className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bathrooms === '3' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
          onClick={() => handleRadioChange('bathrooms', '3')}
        >
          3
        </button>
        <button 
          type="button"
          className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bathrooms === '4+' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
          onClick={() => handleRadioChange('bathrooms', '4+')}
        >
          4+
        </button>
      </div>
      {!formData.bathrooms && (
        <p className="text-red-500 text-xs mt-1">Bathrooms count is mandatory. Please select an option.</p>
      )}
    </div>
  );
};

export default BathroomSection;
