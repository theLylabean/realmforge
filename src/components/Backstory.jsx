const Backstory = ({ data, updateData, next, back }) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        updateData({
            ...data,
            [name]: value,
        });
    };

    return (
        <div className='backstory-container'>
            <h3 
                className='backstory-header' 
                style={{ marginTop: "2rem" }}
                >Backstory
            </h3>
            <p className='backstory-header'>
                You can answer each section or write a full narrative below -- or you can do both!
            </p>
            
            <div className='backstory-form-grid'>
                <div className='backstory-form-group'>
                    <label> Hometown </label>
                    <input
                        className='backstory-input'
                        type='text'
                        name='hometown'
                        value={data.hometown}
                        onChange={handleChange}
                    />
                </div>

                <div className='backstory-form-group full-width'>
                    <label> Past Events </label>
                    <textarea
                        className='backstory-input'
                        name='past'
                        rows='3'
                        value={data.past}
                        onChange={handleChange}
                    />
                </div>

                <div className='backstory-form-group full-width'>
                    <label> Motivation </label>
                    <textarea
                        className='backstory-input'
                        name='motivation'
                        rows='3'
                        value={data.motivation}
                        onChange={handleChange}
                    />
                </div>

                <div className='backstory-form-group full-width'>
                    <label> Full Backstory </label>
                    <textarea
                        className='backstory-input'
                        name='narrativeBackstory'
                        placeholder="Optional: Enter your full backstory here"
                        value={data.narrativeBackstory}
                        onChange={handleChange}
                        rows={8}
                        style={{ width: "100%", fontSize: "1rem", padding: "0.5rem" }}
                    />
                </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
                <button onClick={back}>Back</button> &nbsp;
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Backstory