import React from "react";
import '../characterDetails.css';

const CharacterDetails = ({ data, updateData, next }) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        updateData({
            ...data,
            [name]: value
        });
    };
    
    return (
        <div className='character-details-container'>
            <h1 id='character-details-header'>Character Details</h1>
            
                <div className='form-grid'>
                    <div className='form-group'>
                        <label htmlFor='name'>
                            Name:
                        </label>
                        <input
                            className='character-details-select'
                            placeholder="Enter character name here"
                            type='text'
                            id='name'
                            name='name'
                            value={data.name}
                            onChange={handleChange} 
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='age'>
                            Age:
                        </label>
                        <input
                            className='character-details-select'
                            placeholder="Enter character age here"
                            type='number'
                            id='age'
                            name='age'
                            value={data.age}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='gender'>
                            Gender:
                        </label>
                        <input
                            className='character-details-select'
                            placeholder="Enter character gender here"
                            type='text'
                            id='gender'
                            name='gender'
                            value={data.gender}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='prounouns'>
                            Pronouns:
                        </label>
                        <input
                            className='character-details-select'
                            placeholder="Enter character pronouns here"
                            type='text'
                            id='pronouns'
                            name='pronouns'
                            value={data.pronouns}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='alignment'>
                            Alignment:
                        </label>
                        <select
                            className='character-details-alignment'
                            id='alignment'
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
                    </div>


                    <div className='form-group'>
                        <label htmlFor='faction'>
                            Faction:
                        </label>
                        <input
                            className='character-details-input'
                            placeholder="Enter character faction here"
                            type='text'
                            id='faction'
                            name='faction'
                            value={data.faction}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='deity'>
                            Deity:
                        </label>
                        <input
                            className='character-details-input'
                            placeholder="Enter character deity here"
                            type='text'
                            id='deity'
                            name='deity'
                            value={data.deity}
                            onChange={handleChange}
                        />
                    </div>
                    <br />

                    <div className='form-group'>
                        <label htmlFor='appearance'>
                            Appearance:
                        </label>
                        <textarea
                            className='character-details-textarea'
                            placeholder="Describe your character's appearance here"
                            id='appearance'
                            name='appearance'
                            value={data.appearance}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>
                </div>

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