import appIcon from './assets/app-icon.png'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <img src={appIcon} alt="App Icon" className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg mb-6" />
        <h1 className="text-gray-900 text-3xl md:text-5xl font-bold mb-3">EverSince+</h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6">A beautiful way to track your special days.</p>
        <a href="https://apps.apple.com/app/id000000000" target="_blank" rel="noopener noreferrer">
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
            alt="Download on the App Store"
            className="h-14 mx-auto"
          />
        </a>
      </div>
    </div>
  )
}

export default App
