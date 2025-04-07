import React, { useEffect, useState } from "react";
import '../spellsAndEquipment.css';

const SpellsAndEquipment = ({ data, updateData, next, back }) => {
  const [spellList, setSpellList] = useState([]);
  const [selectedSpells, setSelectedSpells] = useState(data.spells || []);
  const [equipment, setEquipment] = useState(data.equipment || []);

  // Fetch spells based on the selected class
  useEffect(() => {
    const fetchSpells = async () => {
      if (!data.charClass) return;

      try {
        const res = await fetch(`https://www.dnd5eapi.co/api/2014/classes/${data.charClass}/spells`);
        const spellData = await res.json();
        setSpellList(spellData.results || []);
      } catch (err) {
        console.error("Failed to fetch spells:", err);
      }
    };

    fetchSpells();
  }, [data.charClass]);

  // Toggle spell selection
  const handleSpellToggle = (spellIndex) => {
    if (selectedSpells.includes(spellIndex)) {
      setSelectedSpells(selectedSpells.filter((s) => s !== spellIndex));
    } else {
      setSelectedSpells([...selectedSpells, spellIndex]);
    }
  };

  const handleSubmit = () => {
    const updatedEquipment = equipment
      .split(',')
      .map(item => item.trim())
      .filter(Boolean);
    updateData({
      ...CharacterData,
      equipment: updatedEquipment
    });

    updateData({
      ...data,
      spells: selectedSpells,
      equipment
    });
    next();
  };

  return (
    <div className='spells-equipment-container'>
      <h3 className='spells-and-equipment-header'>Choose Spells</h3>

      <div className='spells-container'>
      {spellList.length === 0 ? (
        <p>{!data.charClass ? 'No Class Has Been Selected' : `No spells found for class: ${data.charClass.charAt(0).toUpperCase() + data.charClass.slice(1)}`}
        </p>
      ) : (
        <ul 
          className='spell-grid'>
          {spellList.map((spell) => (
            <li key={spell.index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedSpells.includes(spell.index)}
                  onChange={() => handleSpellToggle(spell.index)}
                />{spell.name}
              </label>
            </li>
          ))}
        </ul>
      )}
      </div>

      <h3 
        className='spells-and-equipment-header' 
        >Choose Equipment
      </h3>
      <div className='spells-equipment-form-group'>
        <textarea 
          className='spells-and-equipment-input'
          placeholder="Type equipment manually for now (e.g. longsword, leather armor)..."
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          rows={8}
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={back}>Back</button>
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default SpellsAndEquipment;
