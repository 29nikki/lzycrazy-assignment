import React from 'react';

const PhotoUploadSection = ({ uploadedImages, handleImageUpload, handleRemoveImage }) => {
  const totalSlots = 20;

  return (
    <div className="px-6 py-4 border-b border-gray-200 md:pr-[40%]">
      <h2 className="font-bold mb-4 text-left">UPLOAD UP TO 20 PHOTOS</h2>
      <div className="grid grid-cols-4 gap-2">
        {[...Array(totalSlots)].map((_, index) => {
          const image = uploadedImages[index];

          return (
            <div
              key={index}
              className="relative border border-gray-300 rounded-md flex items-center justify-center h-[100px] overflow-hidden group"
            >
              {image ? (
                <>
                  <img
                    src={image.preview}
                    alt={`Uploaded ${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-red-100"
                  >
                    <svg
                      className="w-4 h-4 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, index)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex flex-col items-center text-gray-400">
                    <svg
                      className="w-6 h-6 mb-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                      />
                    </svg>
                    {index === 0 && <span className="text-sm">Add Photo</span>}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoUploadSection;
