import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import CharacterForm from './components/CharacterForm.jsx';
import About from './components/About.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import './App.css';
import Footer from './components/Footer.jsx';

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
        const [racesRes, classesRes, apiRes] = await Promise.all([
          fetch('https://www.dnd5eapi.co/api/2014/races'),
          fetch('https://www.dnd5eapi.co/api/2014/classes'),
          fetch('http://www.dnd5eapi.co/api/2014')
        ]);

        const racesData = await racesRes.json();
        const classesData = await classesRes.json();
        const apiData = await apiRes.json();

        setGameData({
          races: racesData.results,
          classes: classesData.results,
          spells: [],
          equipment: [],
        });
      } 
      catch (error) {
        console.error('Error fetching game data:', error);
        }
      };

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
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </main>
    </Router>
    <Footer />
    </>
  )
}

export default App
