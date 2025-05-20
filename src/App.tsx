import appIcon from './assets/app-icon.png'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <img src={appIcon} alt="App Icon" className="w-32 h-32 rounded-2xl shadow-lg mb-6" />
      <h1 className="text-3xl md:text-5xl font-bold mb-2">EverSince+</h1>
      <p className="text-gray-600 text-lg md:text-xl mb-6">A beautiful way to track your special days.</p>
      <a
        href="https://apps.apple.com/app/id6746035992"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          className="h-14"
        />
      </a>
    </div>
  )
}

export default App
