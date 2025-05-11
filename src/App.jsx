
import './App.css'
import Navbar from './components/FormSections/Navbar'
import PropertyForm from './components/PropertyForm'

// Main app component that renders our property listing form
function App() {
  return (
    < div className='pb-20'>
      <Navbar/>
    <div className="min-h-screen   sm:px-6">
      {/* Render the property form component */}
      <PropertyForm />
    </div>
    </div>
  )
}

export default App
