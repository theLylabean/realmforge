import React from 'react';
import '../About.css'; // Optional: create a CSS file if you want custom styling

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h1>About the Developer</h1>

        <p>
          Hi! I'm Lyla, a full-stack web developer in training with a background in music and a passion for storytelling, fantasy, and immersive experiences. This app started as an assignment for class but grew to something much bigger; a way to combine two things: **building great user experiences** and **bringing my many D&D-loving friends a custom and unique character builder designed directly from their input**.
        </p>

        <p>
          <strong>RealmForge</strong> is a Dungeons & Dragons 5e character builder and reference tool. It allows players to build a complete character by selecting race, class, spells, equipment, and more — all presented with a fantasy-inspired interface designed to feel like parchment, scrolls, and spellbooks.
        </p>

        <p>
          This project was built using <strong>React</strong> and pulls live data from the <a href="https://www.dnd5eapi.co/" target="_blank" rel="noreferrer">D&D 5e API</a>. It was a fun and challenging way to practice component architecture, state management, API integration, and styling — while also channeling my love for worldbuilding and game design.
        </p>

        <p>
          When I'm not coding, you can find me practicing brass band music, playing video games, or practicing new coding concepts.
        </p>

        <p>
          Thanks for checking out the project! If you're a fellow adventurer (or dev), feel free to reach out or fork the repo to expand it.
        </p>

        <p>
          You can view the source code on my{' '}
          <a
            href="https://github.com/theLylabean/DandDCharacterBuilder.Workshop26A"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
          .
        </p>
      </div>

      <div className='footer-container'>
        <footer>
          <p>Created by theLylabean • Built with React • Powered by Imagination ⚔️</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
