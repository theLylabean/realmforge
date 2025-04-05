import React from 'react';
import RaceSelect from './components/RaceSelect.jsx'
import ClassSelect from './components/ClassSelect.jsx';
import AbilityScoreInput from './components/AbilityScoreInput.jsx';
import CharacterSheet from './components/CharacterSheet.jsx'

function CharacterForm() {
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
          /> 
        )}

        {step === 3 && (
          <BackgroundSelect 
            data={character}
            updateData={setCharacter}
            next={nextStep}
            back={prevStep}
          />
        )}

        {step === 4 && (
          <SpellsAndEquiptment
            data={character}
            updateData={setCharacter}
            next={nextStep}
            back={prevStep}
          />
        )}

        {step === 5 && (
          <CharacterSheet 
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
//         Final Character Sheet/Review