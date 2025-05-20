import RaceSelect from "./RaceSelect.jsx";
import ClassSelect from "./ClassSelect.jsx";
import '../buildCharacter.css';

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
        <h1 id='build-character-header'>Build Your Character</h1>

        <div className='choose-race-class-container'>
            <div className='build-character-select'>
                <h2>Choose Race</h2>
                    <RaceSelect
                        value={data.race}
                        onChange={(value) =>
                            updateData({ ...data, race: value })
                        }
                        races={races}
                />
            </div>

            <div className='build-character-select'>
                <h2>Choose Class</h2>
                    <ClassSelect
                        value={data.charClass}
                        onChange={(value) =>
                            updateData({ ...data, charClass: value })
                        }
                        classes={classes}
                />
            </div>

        </div>

        <div className='ability-container'>
            <section>
                <h2>Assign Ability Scores</h2>
                <div className='ability-scores'>
                    {Object.entries(data.abilityScores).map(([stat, val]) => (
                        <div className='form-group' key={stat}>
                            <label htmlFor={stat}>
                                {stat.charAt(0).toUpperCase() + stat.slice(1)}:
                            </label>
                            <input className='ability-scores-input'
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
            <button onClick={back}>Back</button> &nbsp;
            <button onClick={next}>Next</button>
        </div>
    </div>
  );
};

export default BuildCharacter;