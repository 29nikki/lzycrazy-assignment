import React from 'react';

const PriceSection = ({ formData, setFormData, handleInputChange }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <h2 className="font-bold mb-4 text-left">SET A PRICE</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-left">
          <span className="text-red-500 font-medium">Price *</span>
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
            ₹
          </span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            onBlur={() => setFormData({ ...formData, priceTouched: true })}
            className={`w-full p-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formData.priceTouched && !formData.price && 'border-red-500 bg-red-50'}`}
            placeholder="Enter price"
            required
          />
        </div>
        {formData.priceTouched && !formData.price && (
          <p className="text-red-500 text-xs mt-1">Price is mandatory. Please complete the required field.</p>
        )}
      </div>
    </div>
  );
};

export default PriceSection;
