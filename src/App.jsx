import { useEffect, useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import CharacterForm from './components/CharacterForm.jsx'
import About from './components/About.jsx'
import './App.css'
import './index.css'
import './navBar.css'
import './home.css'
import './header.css'
import './characterDetails.css'
import './buildCharacter.css'
import './backstory.css'

const baseUrl = 'https://www.dnd5eapi.co/api/2014';
console.log(baseUrl)

function App() {
  const [gameData, setGameData] = useState({
    races: [],
    classes: [],
    spells: [],
    equiptment: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [racesRes, classesRes] = await Promise.all([
          fetch('https://www.dnd5eapi.co/api/2014/races'),
          fetch('https://www.dnd5eapi.co/api/2014/classes')
        ]);

        const racesData = await racesRes.json();
        const classesData = await classesRes.json();

        setGameData({
          races: racesData.results,
          classes: classesData.results,
          spells: [],
          equiptment: [],
        });
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    }
    fetchData();
  },[])

  return (
    <>
      <Router>
      <NavBar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<CharacterForm gameData={gameData} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
