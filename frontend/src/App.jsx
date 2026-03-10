import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Analyzer from './pages/Analyzer'

function App() {
  return (
    <div className="app-container min-vh-100 position-relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyzer />} />
      </Routes>
    </div>
  )
}

export default App
