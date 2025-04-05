import React from "react";

const CharacterDetails = ({ data, updateData, next }) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        updateData({
            ...data,
            [name]: value
        });
    };
    
    return (
        <div>
            <h3>Character Details</h3>
            <label>
                Name:
            </label>
            <input
                type='text'
                name='name'
                value={data.name}
                onChange={handleChange} 
            />

            <label>
                Age:
            </label>
            <input 
                type='number'
                name='age'
                value={data.age}
                onChange={handleChange}
            />

            <label>
            </label>
            <input
                type='text'
                name='gender'
                value={data.gender}
                onChange={handleChange}
            />

            <label>
                Alignment:
            </label>
            <select 
                name='alignment'
                value={data.alignment}
                onChange={handleChange}
            >
                <option value=''>Select Alignment</option>
                <option value='Lawful Good'>Lawful Good</option>
                <option value="Neutral Good">Neutral Good</option>
                <option value="Chaotic Good">Chaotic Good</option>
                <option value="Lawful Neutral">Lawful Neutral</option>
                <option value="True Neutral">True Neutral</option>
                <option value="Chaotic Neutral">Chaotic Neutral</option>
                <option value="Lawful Evil">Lawful Evil</option>
                <option value="Neutral Evil">Neutral Evil</option>
                <option value="Chaotic Evil">Chaotic Evil</option>
            </select>

            <label>
                Appearance:
            </label>
            <textarea 
                name='appearance'
                value={data.appearance}
                onChange={handleChange}
            />

            <label>
                Faction:
            </label>
            <input 
                type='text'
                name='faction'
                value={data.faction}
                onChange={handleChange}
            />

            <label>
                Deity:
            </label>
            <input 
                type='text'
                name='deity'
                value={data.deity}
                onChange={handleChange}
            />

            <div style={{
                marginTop: '1rem'
                }}
            >
            <button onClick={next}>
                    Next
            </button>
            </div>
        </div>
    );
};

export default CharacterDetails;