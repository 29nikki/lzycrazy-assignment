
import './App.css'
import PropertyForm from './components/PropertyForm'

// Main app component that renders our property listing form
function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6">
      {/* Render the property form component */}
      <PropertyForm />
    </div>
  )
}

export default App
