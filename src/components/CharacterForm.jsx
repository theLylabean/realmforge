import React from 'react';
import RaceSelect from './components/RaceSelect.jsx'
import ClassSelect from './components/ClassSelect.jsx';
import AbilityScoreInput from './components/AbilityScoreInput.jsx';
import CharacterSheet from './components/CharacterSheet.jsx'

function CharacterForm() {
    const [character, setCharacter] = useState({
        name: "",
        alignment: "",
        race: "",
        charClass: "",
        abilityScores: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0
        }
      });

  return (
    <div>
        <form>
        Name & Alignment
        Race
        Class
        Assign Ability Scores
        Final Character Sheet/Review
        </form>
    </div>
  );
};

export default CharacterForm;