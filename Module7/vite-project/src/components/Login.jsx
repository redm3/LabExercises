import React from 'react';
import useFormInput from '../hooks/useFormInput';
import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext'

function Login() {
    const themeProps = useContext(ThemeContext)

    const usernameProps = useFormInput('')
    const passwordProps = useFormInput('')

    const [loggedIn, setloggedIn] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')
    const [loginAttempts, setLoginAttempts] = React.useState(0);


    const handleLogin = (e) => {
        e.preventDefault();
        let username = usernameProps.value
        let password = passwordProps.value

        console.log(username + ' ' + password)

        //login successful/true if both values exist and match
        let isLoggedIn = (username && password && username === password)

        if (isLoggedIn) {
            setloggedIn(true)
            setErrorMessage('')
            console.log('Success')

            setLoginAttempts(0);
        } else {
            setloggedIn(false)
            
            let newAttempts = loginAttempts +1

            setLoginAttempts(newAttempts);

            if (newAttempts >= 4) {

                setErrorMessage('You have exceeded the maximum number of login attempts. Please try again later.');
            } else {

                setErrorMessage('Invalid username or password. Please try again.');
                console.log(newAttempts)
            }
        }
    }


    return (
        <div className={"Login componentBox" + themeProps.theme}>
            <h2>Hook Login</h2>

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? `Hello, ${usernameProps.value}!` : 'Please log in.'}</div>

            {!loggedIn && loginAttempts < 5 && (
                <form onSubmit={handleLogin} className="login-form">

                    <div className="form-row">
                        <label htmlFor="username">Username: </label>
                        <input id="username" {...usernameProps} />
                    </div>

                    <div className="form-row">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" {...passwordProps} />
                    </div>

                    <button>Login</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {loginAttempts < 5 && <p>{5 - loginAttempts} attempts left</p>}
                </form>
            )}

            {loginAttempts >= 5 && (
                <p>You have exceeded the maximum number of login attempts. Please try again later.</p>
            )}
        </div>
    );

}


export default Login;

//display a useful error message if the login was unsuccessful
//add a counter to record the number of unsuccessful login attempts - hide the form if more than 5
/* add another form field for email address */