import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App