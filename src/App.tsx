import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
