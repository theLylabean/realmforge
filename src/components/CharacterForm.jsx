import React from 'react';
import { useEffect, useState } from 'react';
import CharacterDetails from './CharacterDetails.jsx';
import BuildCharacter from './BuildCharacter.jsx';
import SpellsAndEquipment from './SpellsAndEquipment.jsx';
import Backstory from './Backstory.jsx';
import FinalCharacterSheet from './FinalCharacterSheet.jsx';

function CharacterForm({ gameData }) {
  const [step, setStep] = useState(1);
  const [character, setCharacter] = useState({
    // Character Details:
      name: '',
      age: '',
      alignment: '',
      appearance: '',
      faction: '',
      deity: '',
    
    // Build Character:
      race: '',
      charClass: '',
      abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
      },

    // Backgroud:
      hometown: '',
      backstory: '',
      motivation: '',

    // Spells & Equiptment:
      spells: [],
      equiptment: [],
    });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://www.dnd5eapi.co/api/2014')
      const data = await res.json();
      console.log('Api Root Response: ', data);
    }
    fetchData();
  })

  return (
    <div>
        <h2>
        Step {step}
        </h2>
        {step === 1 && (
          <CharacterDetails
            data={character}
            updateData={setCharacter}
            next={nextStep}
          />
        )}

        {step === 2 && (
          <BuildCharacter 
            data={character}
            updateData={setCharacter}
            next={nextStep}
            back={prevStep}
            races={gameData.races || []}
            classes={gameData.classes || []}
          /> 
        )}

        {step === 3 && (
          <SpellsAndEquipment
          data={character}
          updateData={setCharacter}
          next={nextStep}
          back={prevStep}
          />
        )}

        {step === 4 && (
          <Backstory 
            data={character}
            updateData={setCharacter}
            next={nextStep}
            back={prevStep}
          />
        )}

        {step === 5 && (
          <FinalCharacterSheet 
            data={character}
            back={prevStep}
          />
        )}

    </div>

  );
};

export default CharacterForm;

// Name & Alignment
//         Race
//         Class
//         Assign Ability Scores
//         Spells & Gear
//         Backstory
//         Final Character Sheet/Review