import "../finalCharacterSheet.css";

const formatNames = (str) => {
    const lowercaseWords = [
      "and", "or", "the", "to", "of", "in", "on", "at", "for", "with", "a", "an", 'without'
    ];

    if (!str || typeof str !== 'string') return '';
  
    return str
      .split(' ')
      .map((word, wordIndex) => {
        return word
            .split('-')
            .map((part, partIndex) => {
        if (lowercaseWords.includes(part.toLowerCase()) && (wordIndex !== 0 || partIndex !== 0) 
        ){
          return part.toLowerCase();
        }
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join("-")
    })
    .join(' ');
};
const FinalCharacterSheet = ({ data, back }) => {

  return (
    <div className="final-character-sheet">
        <h1>{data.name}</h1>

        <div className='character-details-grid'>
            <div>
                <label>Age:</label>
                <p>{data.age}</p>
            </div>

            <div>
                <label>Gender:</label> 
                <p>
                    {formatNames(data.gender)}
                </p>
            </div>

            <div>
                <label>Alignment:</label> 
                <p>
                    {formatNames(data.alignment)}
                </p>
            </div>

            <div>
                <label>Race:</label> 
                <p>
                    {formatNames(data.race)}
                </p>
            </div>

            <div>
                <label>Class:</label> 
                <p>
                    {formatNames(data.charClass)}
                </p>
            </div>

            <div>
                <label>Faction:</label> 
                <p>
                    {formatNames(data.faction)}
                </p>
            </div>

            <div>
                <label>Deity:</label> 
                <p>
                    {formatNames(data.deity)}
                </p>
            </div>
        </div>

      <h2>Ability Scores</h2>
      <div className='ability-grid'>
        {Object.entries(data.abilityScores).map(([stat, value]) => (
          <div key={stat}>
                <strong>
                    {formatNames(stat)}:
                 </strong>
            &nbsp;{value}
          </div>
        ))}
      </div>

      <h2>Appearance</h2>
      <p>{data.appearance}</p>

      <h2>Backstory</h2>
        <div>
            {data.hometown && (
                <p>
                    <label>Hometown:</label><br />
                    <p>
                        {data.hometown}
                    </p>
                </p>
            )}
        </div>

        <div>
            {data.past && (
                <p>
                    <label>Past Events:</label><br />
                    <p>
                        {data.past}
                    </p>
                </p>
            )}
        </div>

        <div>
            {data.motivation && (
                <p>
                    <label>Motivation:</label><br />
                        <p>
                            {data.motivation}
                        </p>
                </p>
            )}
        </div>

        <div>
            {data.narrativeBackstory && (
                <p>
                    Full Narrative Backstory:<br />
                    <p>
                        {data.narrativeBackstory}
                    </p>
                </p>
            )}
        </div>

        <h2>Spells</h2>
        <div className='final-spell-container'>
            {data.spells.length > 0 ? (
                <ul className="spell-list">
                {data.spells.map((spell) => (
                    <li key={spell}>
                        {formatNames(spell)}
                    </li>
                ))}
                </ul>
            ) : (
                <p>{formatNames('No spells selected')}</p>
            )}

        </div>


      <h2>Equipment</h2>
        <p>{formatNames(data.equipment)}</p>

        <div style={{ marginTop: "1rem" }}>
            <button onClick={back}>
                Back
            </button>
        </div>
    </div>
  );
}
export default FinalCharacterSheet;
