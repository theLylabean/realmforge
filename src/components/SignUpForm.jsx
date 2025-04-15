import { useState, useEffect } from "react";

function SignUpForm() {
    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [usernameError, setUsernameError] = useState('');
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let hasError = false;
        if (signUpForm.email.trim() === '') {
            setUsernameError('Username is required');
            hasError = true;
        } else {
            setUsernameError('');
        }

        const anyInvalidPasswordRules = passwordErrors.some(err => !err.isValid);
        if (anyInvalidPasswordRules || signUpForm.password.trim() === '') {
            hasError = true;
        }
        if (hasError) return;
        try{
            const res = await fetch('JWT URL',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: signUpForm.email,
                        password: signUpForm.password,
                    })
                })
            const result = await res.json();
                console.log(result);

                setSignUpForm({});
                setPasswordErrors([]);        
            } catch (error) {
                setError(error.message)
            }
    }

    return (
        <div className='signup-container'>
            <h2>
                Sign Up for RealmForge!
                {error && <p>{error}</p>}
            </h2>

            <form 
            className='form-container'
            onSubmit={handleSubmit}>
                <label>
                    <h3>
                        Username/Email
                        <br />
                    </h3>

                    <input
                        className='signup-input'
                        placeholder='Enter email here'
                        value={signUpForm.email}
                        onChange={(e) => setSignUpForm(e.target.value)}
                    />
                </label>
                <br />
                {usernameError && (
                    <ul style={
                        {   
                            listStyle: 'none', 
                            color: 'darkred', 
                            marginTop: '4px', 
                            paddingLeft: '20px' 
                        }
                    }>
                        <li>{usernameError}</li>
                    </ul>
                )}
                <label>
                    <h3>
                        Password
                    </h3>

                    <input 
                        className='signup-input'
                        placeholder='Enter password here'
                        value={signUpForm.password}
                        type='password'
                        required pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$'
                        onChange={(e) => {
                            setSignUpForm(e.target.value);
                            setPasswordTouched(true);
                    }} />
                </label>
                <br />
                {passwordErrors.length >0 && (
                    <ul style={{
                        listStyle: 'none',
                        marginTop: '4px',
                        paddingLeft: '20px'
                    }}>
                        {passwordErrors.map((err, idx) => (
                            <li
                            key={inx}
                            style={{
                                color: err.isValid ? 'green' : 'darkred'
                            }}>
                            {err.message}
                        </li>
                    ))}
                    </ul>
                )}
                <br />
                <button type='submit'>
                    Submit
                </button>
            </form>
            {formSubmit && (
                <ul style={{
                    color: 'green',
                    listStyle: 'none',
                    margintTop: '4px'
                }}>
                    <li>Sign Up Complete!</li>
                </ul>
            )}
        </div>
    )
}

export default SignUpForm