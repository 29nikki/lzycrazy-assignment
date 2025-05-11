import { useState } from 'react';
import HeaderSection from './FormSections/HeaderSection';
import CategorySection from './FormSections/CategorySection';
import PropertyTypeSection from './FormSections/PropertyTypeSection';
import BHKSection from './FormSections/BHKSection';
import BathroomSection from './FormSections/BathroomSection';
import DescriptionSection from './FormSections/DescriptionSection';
import PriceSection from './FormSections/PriceSection';
import PhotoUploadSection from './FormSections/PhotoUploadSection';
import LocationSection from './FormSections/LocationSection';
import UserDetailsSection from './FormSections/UserDetailsSection';
import SubmitButtonSection from './FormSections/SubmitButtonSection';

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
  
  // State for uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);

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
    if (!value) {
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
    
    // Create a URL for the image preview
    const imageUrl = URL.createObjectURL(file);
    
    // Update the uploadedImages state
    const newImages = [...uploadedImages];
    newImages[index] = { file, url: imageUrl };
    setUploadedImages(newImages);
    
    console.log(`Uploaded image at index ${index}:`, file.name);
  };
  
  // Handle image removal
  const handleRemoveImage = (index) => {
    const newImages = [...uploadedImages];
    if (newImages[index] && newImages[index].url) {
      URL.revokeObjectURL(newImages[index].url); // Clean up the URL object
    }
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  return (<>
        <HeaderSection />
    <div className="max-w-4xl mx-auto bg-white border-[1px] border-gray-400  overflow-hidden">
      <form onSubmit={handleSubmit}>
        {/* Header Section */}
        
        {/* Category Section */}
        <CategorySection />

        {/* Property Type Section */}
        <PropertyTypeSection formData={formData} handleRadioChange={handleRadioChange} />

        {/* BHK Section */}
        <BHKSection formData={formData} handleRadioChange={handleRadioChange} />

        {/* Bathroom Section */}
        <BathroomSection formData={formData} handleRadioChange={handleRadioChange} />
        
        <div className="px-6 py-4 flex flex-col border-b border-gray-200">
          {/* Add additional sections */}
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
          <div className="gap-4 md:mb-8">
            <label className="block text-sm font-medium mb-2 text-left">
              <span className=" font-medium">Super Builtup area sqft *</span>
            </label>
            <input
              type="text"
              name="superBuiltupArea"
              value={formData.superBuiltupArea}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`"w-full md:w-[60%] p-2 py-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${touched.superBuiltupArea && !formData.superBuiltupArea ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
              placeholder="Enter super builtup area"
              required
            />
            {errors.superBuiltupArea && touched.superBuiltupArea && (
              <p className="mt-1 text-sm text-red-600">Please enter super builtup area in square feet</p>
            )}
          </div>

          {/* Carpet Area */}
          <div className="gap-4 md:mb-8 ">
            <label className="block text-sm font-medium mb-2 text-left">
              Carpet Area sqft <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="carpetArea"
              name="carpetArea"
              value={formData.carpetArea}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`mt-1 "w-full md:w-[60%] p-2 py-3 border-[1px] border-gray-400  block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${touched.carpetArea && !formData.carpetArea ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
              placeholder="Enter carpet area in sq ft"
              min="0"
              required
            />
            {touched.carpetArea && !formData.carpetArea && (
              <p className="mt-1 text-sm text-red-600">Please enter carpet area in square feet</p>
            )}
          </div>
          <div className="gap-4 md:mb-8">
            <label className="block text-sm font-medium mb-2 text-left">
              Maintenance (Monthly)
            </label>
            <input
              type="text"
              name="maintenance"
              value={formData.maintenance}
              onChange={handleInputChange}
              className="w-full md:w-[60%] p-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter maintenance amount"
            />
          </div>
          <div className="gap-4 md:mb-8">
            <label className="block text-sm font-medium mb-2 text-left">
              Total Floors
            </label>
            <input
              type="text"
              name="totalFloors"
              value={formData.totalFloors}
              onChange={handleInputChange}
              className="w-full md:w-[60%] p-2 py-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter total floors"
            />
          </div>
          <div className="gap-4 md:mb-8">
            <label className="block text-sm font-medium mb-2 text-left">
              Floor No
            </label>
            <input
              type="text"
              name="floorNo"
              value={formData.floorNo}
              onChange={handleInputChange}
              className="w-full md:w-[60%] p-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter floor number"
            />
          </div>
          <div className="mb-4 md:mb-8">
            <label className="block text-sm font-medium mb-2 text-left">Car Parking</label>
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3, '3+'].map((value) => (
                <button 
                  key={value}
                  type="button"
                  className={`py-2 px-7 border rounded-md text-sm transition-all duration-200 ${formData.carParking === value.toString() ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50/50'}`}
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
              className="w-full md:w-[60%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full md:w-[60%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter project name"
            />
            <div className="text-xs text-right text-gray-500 mt-1">0 / 70</div>
          </div>
        </div>

        {/* Ad title */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-bold mb-4 text-left">TITLE & DESCRIPTION</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-left">
              <span className="font-medium">Ad title *</span>
            </label>
            <input
              type="text"
              name="adTitle"
              value={formData.adTitle}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full md:w-[60%] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${touched.adTitle && !formData.adTitle ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
              placeholder="Enter ad title"
              required
            />
            <div className="text-xs text-gray-500 mt-1">Mention the key features of your item (e.g. brand, model, age, type)</div>
            <div className="text-xs text-right text-gray-500">0 / 70</div>
            {touched.adTitle && !formData.adTitle && (
              <p className="text-red-500 text-xs mt-1">Ad title is mandatory. Please complete the required field.</p>
            )}
          </div>
          
          {/* Description section is now outside this div */}
        </div>
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
        <LocationSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
          handleRadioChange={handleRadioChange} 
          handleBlur={handleBlur}
          touched={touched}
        />

        {/* Review Your Details */}
        <UserDetailsSection 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />

        {/* Post Now Button */}
        <SubmitButtonSection />
      </form>
    </div></>
  );
};

export default PropertyForm;
