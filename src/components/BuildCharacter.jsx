import React from "react";
import RaceSelect from "./RaceSelect";
import ClassSelect from "./ClassSelect";

const BuildCharacter = ({ data, updateData, races, classes, next, back }) => {
  const handleAbilityChange = (e) => {
    const { name, value } = e.target;

    updateData({
      ...data,
      abilityScores: {
        ...data.abilityScores,
        [name]: parseInt(value)
      }
    });
  };

  return (
    <div className='build-character-container'>
      <h3 id='build-character-header'>Build Your Character</h3>

      <div className='form-grid'>
        <div className='form-group'>
          <section>
            <h4>Choose Race</h4>
            <RaceSelect
              value={data.race}
              onChange={(value) =>
                updateData({ ...data, race: value })
              }
              races={races}
            />
          </section>
        </div>

        <div className='form-group'>
          <section>
            <h4>Choose Class</h4>
            <ClassSelect
              value={data.charClass}
              onChange={(value) =>
                updateData({ ...data, charClass: value })
              }
              classes={classes}
            />
          </section>
        </div>

          <section>
            <h4>Assign Ability Scores</h4>
            <div className='ability-scores'>
            {Object.entries(data.abilityScores).map(([stat, val]) => (
              <div className='form-group' key={stat}>
                <label htmlFor={stat}>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</label>
                <input
                  type="number"
                  id={stat}
                  name={stat}
                  value={val}
                  onChange={handleAbilityChange}
                />
              </div>
            ))}
            </div>  
          </section>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default BuildCharacter;