import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import './navBar.css'
import './home.css'
import './header.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import CharacterForm from './components/CharacterForm.jsx'
import About from './components/About.jsx'

function App() {
  

  return (
    <>
      <Router>
      <NavBar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<CharacterForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
