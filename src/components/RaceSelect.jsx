import React from "react";

const RaceSelect = ({ value, onChange, races }) => {
  return (
    <div>
        <label>Race:</label>
        <select className='races-and-classes-select'
            id="race"
            name="race"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
        <option value="">Select a race</option>
        {races?.map((race) => (
            <option 
                key={race.index} 
                value={race.index}
            >
            {race.name}
            </option>
            ))}
        </select>
    </div>
  );
};

export default RaceSelect;
