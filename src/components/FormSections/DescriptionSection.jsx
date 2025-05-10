import React from 'react';

const DescriptionSection = ({ formData, setFormData, handleInputChange }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <h2 className="font-bold mb-4 text-left">INCLUDE DESCRIPTION</h2>
      <div className="mb-4">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          onBlur={() => setFormData({ ...formData, descriptionTouched: true })}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] ${formData.descriptionTouched && !formData.description && 'border-red-500 bg-red-50'}`}
          placeholder="Include condition, features and reason for selling"
        ></textarea>
        <div className="text-right text-sm text-gray-500">
          {formData.description ? formData.description.length : 0} / 4096
        </div>
        {formData.descriptionTouched && !formData.description && (
          <p className="text-red-500 text-xs mt-1">Description is mandatory. Please complete the required field.</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionSection;
