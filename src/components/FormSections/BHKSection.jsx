import React from 'react';

const BHKSection = ({ formData, handleRadioChange }) => {
  return (
    <div className="mb-4 px-6">
      <label className="block text-sm font-medium mb-2 text-left">
        <span className="text-red-500 font-medium">BHK *</span>
      </label>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <button 
          type="button"
          className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bhk === '1' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
          onClick={() => handleRadioChange('bhk', '1')}
        >
          1 BHK
        </button>
        <button 
          type="button"
          className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bhk === '2' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
          onClick={() => handleRadioChange('bhk', '2')}
        >
          2 BHK
        </button>
        <button 
          type="button"
          className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bhk === '3' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
          onClick={() => handleRadioChange('bhk', '3')}
        >
          3 BHK
        </button>
        <button 
          type="button"
          className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bhk === '4+' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
          onClick={() => handleRadioChange('bhk', '4+')}
        >
          4+ BHK
        </button>
      </div>
      {!formData.bhk && (
        <p className="text-red-500 text-xs mt-1">BHK is mandatory. Please select an option.</p>
      )}
    </div>
  );
};

export default BHKSection;
