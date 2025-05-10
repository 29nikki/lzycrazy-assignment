import React from 'react';

const SubmitButtonSection = ({ isFormValid }) => {
  return (
    <div className="px-6 py-4">
      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-md text-white font-medium ${
          isFormValid
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-blue-300 cursor-not-allowed'
        }`}
        disabled={!isFormValid}
      >
        Post now
      </button>
    </div>
  );
};

export default SubmitButtonSection;
