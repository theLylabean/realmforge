import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
        <Header />
        <div className='homepage-container'>
          <p>
            Realmforge is a fully guided character creation tool built for Dungeons & Dragons 5th Edition. Whether you're a seasoned adventurer or a brand new player, Realmforge will walk you through the process of creating a complete, ready-to-play character — step by step.
          </p>

          <p>
            From choosing your race and class to selecting spells and crafting a unique backstory, this tool uses live D&D 5e data to help you build a hero that fits your imagination. When you're finished, you'll receive a beautifully formatted character sheet styled like an ancient scroll — ready to print, share, or screenshot for your next campaign.
          </p>

          <ul>
            <li>🎲 Step-by-step character creation process</li>
            <li>📚 Uses official 5e data (races, classes, spells, etc.)</li>
            <li>🧝‍♀️ Customizable appearance, alignment, faction, deity, and backstory</li>
            <li>🪄 Spell & Equipment selection tailored to your class</li>
            <li>📜 Fantasy-styled final character sheet (coming soon!)</li>
          </ul>

          <button className="start-button" onClick={() => navigate("/builder")}>
            🛠️ Begin Building Your Character
          </button>
        </div>
    </>
  );
};

export default Home;