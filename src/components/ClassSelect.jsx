const ClassSelect = ({ value, onChange, classes }) => {
  return (
    <div>
        <label>Class:</label>
        <select 
            className='races-and-classes-select'
            name="class"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
        <option value="">Select a class</option>
        {classes?.map((charClass) => (
            <option 
                key={charClass.index} 
                value={charClass.index}
            >
            {charClass.name}
            </option>
            ))}
        </select>
    </div>
  );
};

export default ClassSelect;
