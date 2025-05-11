import React from 'react';

const LocationSection = ({ formData, setFormData, handleInputChange, handleRadioChange }) => {
  return (
    <div className="px-6 py-4 border-b w-full md:w-[60%] border-gray-200">
      <h2 className="font-bold mb-4 text-left">CONFIRM YOUR LOCATION</h2>
      <div className="flex mb-4">
        <button 
          type="button"
          className={`py-2 px-4 text-sm transition-all duration-200 ${formData.locationType === 'list' ? 'border-b-2 border-blue-500 font-medium' : 'hover:text-blue-500'}`}
          onClick={() => handleRadioChange('locationType', 'list')}
        >
          LIST
        </button>
        <button 
          type="button"
          className={`py-2 px-4 text-sm transition-all duration-200 ${formData.locationType === 'current' ? 'border-b-2 border-blue-500 font-medium' : 'hover:text-blue-500'}`}
          onClick={() => handleRadioChange('locationType', 'current')}
        >
          CURRENT LOCATION
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-left">
          <span className="font-medium">State *</span>
        </label>
        <select
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          onBlur={() => setFormData({ ...formData, stateTouched: true })}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formData.stateTouched && !formData.state && 'border-red-500 bg-red-50'}`}
          required
        >
          <option value="">Select state</option>
<option value="andhra-pradesh">Andhra Pradesh</option>
<option value="arunachal-pradesh">Arunachal Pradesh</option>
<option value="assam">Assam</option>
<option value="bihar">Bihar</option>
<option value="chhattisgarh">Chhattisgarh</option>
<option value="goa">Goa</option>
<option value="gujarat">Gujarat</option>
<option value="haryana">Haryana</option>
<option value="himachal-pradesh">Himachal Pradesh</option>
<option value="jharkhand">Jharkhand</option>
<option value="karnataka">Karnataka</option>
<option value="kerala">Kerala</option>
<option value="madhya-pradesh">Madhya Pradesh</option>
<option value="maharashtra">Maharashtra</option>


        </select>
        {formData.stateTouched && !formData.state && (
          <p className="text-red-500 text-xs mt-1">This field is mandatory</p>
        )}
      </div>
    </div>
  );
};

export default LocationSection;
