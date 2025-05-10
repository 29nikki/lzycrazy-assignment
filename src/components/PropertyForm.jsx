import { useState } from 'react';

const PropertyForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    propertyType: '',
    bhk: '',
    bathrooms: '',
    furnishing: '',
    projectStatus: '',
    listedBy: '',
    superBuiltupArea: '',
    carpetArea: '',
    maintenance: '',
    totalFloors: '',
    floorNo: '',
    carParking: '',
    facing: '',
    projectName: '',
    adTitle: '',
    description: '',
    price: '',
    photos: [],
    locationType: 'list',
    state: '',
    name: '',
    phoneNumber: ''
  });
  


  const [touched, setTouched] = useState({
    propertyType: false,
    bhk: false,
    description: false,
    area: false,
    price: false,
    superBuiltupArea: false,
    carpetArea: false,
    maintenance: false,
    totalFloors: false,
    floorNo: false,
    carParking: false,
    facing: false,
    projectName: false,
    adTitle: false,
    propertyType: false,
    bhk: false,
    bathrooms: false,
    furnishing: false,
    projectStatus: false,
    listedBy: false,
    phoneNumber: false
  });

  const [errors, setErrors] = useState({
    title: false,
    floorNo: false,
    carParking: false,
    facing: false,
    projectName: false,
    adTitle: false,
    description: false,
    price: false
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error if field has value
    if (value) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Check if field is empty and touched
    if (!value && touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: true
      }));
    }
  };

  // Handle radio button selections
  const handleRadioChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error if field has value
    if (value) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You'd typically send this data to a server
    console.log('Form submitted:', formData);
    // Reset form or redirect user
  };
  
  // Handle image upload
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    
    console.log(`Uploaded image at index ${index}:`, file.name);
    // Here you would typically handle the file upload
    // For example, create a preview and store the file in state
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
      {/* No back button as requested */}
      
      <form onSubmit={handleSubmit}>
        {/* Post Your Ad Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-center">POST YOUR AD</h1>
        </div>

        {/* Selected Category */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-bold mb-2 text-left">SELECTED CATEGORY</h2>
          <div className="text-sm text-gray-600 flex items-center">
            <span>Properties / For Sale / Houses & Apartments</span>
            <button className="ml-2 text-blue-500 transition-all duration-200 hover:text-blue-700 hover:underline">Change</button>
          </div>
        </div>

        {/* Include Some Details */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-bold mb-4 text-left">INCLUDE SOME DETAILS</h2>
          

          
          {/* Property Type */}
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
                Flats / Apartments
              </button>
              <button 
                type="button"
                className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.propertyType === 'independent' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
                onClick={() => handleRadioChange('propertyType', 'independent')}
              >
                Independent / Builder Floors
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

          {/* BHK */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">BHK</label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, '4+'].map((value) => (
                <button 
                  key={value}
                  type="button"
                  className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bhk === value.toString() ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
                  onClick={() => handleRadioChange('bhk', value.toString())}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">Bathrooms</label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, '4+'].map((value) => (
                <button 
                  key={value}
                  type="button"
                  className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.bathrooms === value.toString() ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
                  onClick={() => handleRadioChange('bathrooms', value.toString())}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Furnishing */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">Furnishing</label>
            <div className="flex flex-wrap gap-2">
              {['Furnished', 'Semi-Furnished', 'Unfurnished'].map((value) => (
                <button 
                  key={value}
                  type="button"
                  className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.furnishing === value ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
                  onClick={() => handleRadioChange('furnishing', value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Project Status */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">Project Status</label>
            <div className="flex flex-wrap gap-2">
              {['New Launch', 'Ready to Move', 'Under Construction'].map((value) => (
                <button 
                  key={value}
                  type="button"
                  className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.projectStatus === value ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
                  onClick={() => handleRadioChange('projectStatus', value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Listed by */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">Listed by</label>
            <div className="flex flex-wrap gap-2">
              {['Builder', 'Dealer', 'Owner'].map((value) => (
                <button 
                  key={value}
                  type="button"
                  className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.listedBy === value ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
                  onClick={() => handleRadioChange('listedBy', value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Super Builtup area */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">
              <span className="text-red-500 font-medium">Super Builtup area sqft *</span>
            </label>
            <input
              type="text"
              name="superBuiltupArea"
              value={formData.superBuiltupArea}
              onChange={handleInputChange}
              onBlur={() => setFormData({ ...formData, superBuiltupAreaTouched: true })}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formData.superBuiltupAreaTouched && !formData.superBuiltupArea && 'border-red-500 bg-red-50'}`}
              placeholder="Enter super builtup area"
              required
            />
            {errors.superBuiltupArea && touched.superBuiltupArea && (
              <p className="mt-1 text-sm text-red-600">Please enter super builtup area in square feet</p>
            )}
          </div>

          {/* Carpet Area */}
          <div className="mb-4">
            <label htmlFor="carpetArea" className="block text-sm font-medium text-gray-700">
              Carpet Area sqft <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="carpetArea"
              name="carpetArea"
              value={formData.carpetArea}
              onChange={handleInputChange}
              onBlur={() => setFormData({ ...formData, carpetAreaTouched: true })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                formData.carpetAreaTouched && !formData.carpetArea && 'border-red-300 bg-red-50'
              }`}
              placeholder="Enter carpet area in sq ft"
              min="0"
              required
            />
            {formData.carpetAreaTouched && !formData.carpetArea && (
              <p className="mt-1 text-sm text-red-600">Please enter carpet area in square feet</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">
              Maintenance (Monthly)
            </label>
            <input
              type="text"
              name="maintenance"
              value={formData.maintenance}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter maintenance amount"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">
              Total Floors
            </label>
            <input
              type="text"
              name="totalFloors"
              value={formData.totalFloors}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter total floors"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">
              Floor No
            </label>
            <input
              type="text"
              name="floorNo"
              value={formData.floorNo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter floor number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">Car Parking</label>
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3, '3+'].map((value) => (
                <button 
                  key={value}
                  type="button"
                  className={`py-2 px-4 border rounded-md text-sm transition-all duration-200 ${formData.carParking === value.toString() ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
                  onClick={() => handleRadioChange('carParking', value.toString())}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">
              Facing
            </label>
            <select
              name="facing"
              value={formData.facing}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select facing</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="northeast">North East</option>
              <option value="northwest">North West</option>
              <option value="southeast">South East</option>
              <option value="southwest">South West</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter project name"
            />
            <div className="text-xs text-right text-gray-500 mt-1">0 / 70</div>
          </div>
        </div>

        {/* Ad title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-left">
            <span className="text-red-500 font-medium">Ad title *</span>
          </label>
          <input
            type="text"
            name="adTitle"
            value={formData.adTitle}
            onChange={handleInputChange}
            onBlur={() => setFormData({ ...formData, adTitleTouched: true })}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${formData.adTitleTouched && !formData.adTitle && 'border-red-500 bg-red-50'}`}
            placeholder="Enter ad title"
            required
          />
          <div className="text-xs text-gray-500 mt-1">Mention the key features of your item (e.g. brand, model, age, type)</div>
          <div className="text-xs text-right text-gray-500">0 / 70</div>
          {formData.adTitleTouched && !formData.adTitle && (
            <p className="text-red-500 text-xs mt-1">Ad title is mandatory. Please complete the required field.</p>
          )}
        </div>

        {/* Description */}
        <DescriptionSection 
          formData={formData} 
          setFormData={setFormData} 
          handleInputChange={handleInputChange} 
        />

        {/* Set a Price */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-bold mb-4 text-left">SET A PRICE</h2>
          <PriceSection 
            formData={formData} 
            setFormData={setFormData} 
            handleInputChange={handleInputChange} 
          />
        </div>

        {/* Upload Photos */}
        <PhotoUploadSection 
          uploadedImages={uploadedImages} 
          handleImageUpload={handleImageUpload} 
          handleRemoveImage={handleRemoveImage} 
        />

        {/* Confirm Your Location */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-bold mb-4 text-left">CONFIRM YOUR LOCATION</h2>
          <div className="border-b border-gray-200 pb-4">
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
                <span className="text-red-500 font-medium">State *</span>
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
                <option value="delhi">Delhi</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
                <option value="tamilnadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
              </select>
              {!formData.state && (
                <p className="text-red-500 text-xs mt-1">This field is mandatory</p>
              )}
            </div>
          </div>
        </div>

        {/* Review Your Details */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-bold mb-4 text-left">REVIEW YOUR DETAILS</h2>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1 text-left">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="OLX User"
              />
              <div className="text-xs text-right text-gray-500 mt-1">8 / 30</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3">
              <label className="block text-sm text-left">Your phone number</label>
            </div>
            <div className="w-2/3">
              <span className="text-sm">+917015734771</span>
            </div>
          </div>
        </div>

        {/* Post Now Button */}
        <div className="px-6 py-4">
          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-500 py-2 rounded-md font-medium transition-all duration-200 hover:bg-gray-300 hover:text-gray-700 active:bg-gray-400 active:scale-[0.98]"
          >
            Post now
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
