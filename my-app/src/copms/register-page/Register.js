import React, { useEffect, useState } from 'react'
import RegisterInput from './RegisterInput';
import '../../css/register_login.css';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../images/icons8-google-48.png'
import facebookIcon from '../../images/icons8-facebook-50.png'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {

    //STATES AND HOOKS
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

    const [usernameFocus, setUsernameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    const [usernamePlaceholder, setUsernamePlaceholder] = useState(false);
    const [emailPlaceholder, setEmailPlaceholder] = useState(false);
    const [passwordPlaceholder, setPasswordPlaceholder] = useState(false);
    const [confirmPasswordPlaceholder, setConfirmPasswordPlaceholder] = useState(false);

    const [requestError, setRequestError] = useState('');
    const [isRequestError, setIsRequestError] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        username.length < 5 ? setIsValidUsername(false) : setIsValidUsername(true);
        !emailRegex.test(email) ? setIsValidEmail(false) : setIsValidEmail(true);
        password.length < 8 ? setIsValidPassword(false) : setIsValidPassword(true);
        password !== confirmPassword ? setIsValidConfirmPassword(false) : setIsValidConfirmPassword(true);
    }, [username, email, password, confirmPassword])

    return (
        <form className='register-container' onSubmit={submit}>

            <h2 className='register-title'>Register</h2>

            {isRequestError && <p className='register-request-error-text'>{requestError}</p>}
            <RegisterInput
                id={'username'}
                label={'Username'}
                type={'text'}
                value={username}
                setState={setUsername}
                errorText={"Username must be at least 5 character."}
                isValidInput={isValidUsername}
                focus={usernameFocus}
                setFocus={setUsernameFocus}
                showPlaceholder={usernamePlaceholder}
            />

            <RegisterInput
                id={'email'}
                label={"Email"}
                type={'email'}
                value={email}
                setState={setEmail}
                errorText={"Not valid email address."}
                isValidInput={isValidEmail}
                focus={emailFocus}
                setFocus={setEmailFocus}
                showPlaceholder={emailPlaceholder}
            />

            <RegisterInput
                id={'password'}
                label={"Password"}
                type={'password'}
                value={password}
                setState={setPassword}
                errorText={"Password must be at least 8 character."}
                isValidInput={isValidPassword}
                focus={passwordFocus}
                setFocus={setPasswordFocus}
                showPlaceholder={passwordPlaceholder}
            />

            <RegisterInput
                id={'confirmpassword'}
                label={"Confirm Password"}
                type={'password'}
                value={confirmPassword}
                setState={setConfirmPassword}
                errorText={"Password and Confirm Password must match."}
                isValidInput={isValidConfirmPassword}
                focus={confirmPasswordFocus}
                setFocus={setConfirmPasswordFocus}
                showPlaceholder={confirmPasswordPlaceholder}
            />

            <button id='submit' aria-label='submit' className='register-submit-button'>
                Submit
            </button>

            <p onClick={() => { navigate('/login') }} className='register-information-text'>Already have an account?<b> Login</b></p>

            <button className='login-submit-button platform-button'>
                <img className='facebook-icon' src={googleIcon} width={34} />
                <span>Continue with Google</span>
            </button>

            <button className='login-submit-button platform-button'>
                <img className='facebook-icon' src={facebookIcon} width={34} />
                <span>Continue with Facebook</span>
            </button>
        </form>
    )

    async function submit(e) {
        e.preventDefault();

        if (!validate()) return;

        try {

            const headerList = {
                "Content-Type": "application/json"
            };

            const bodyContent = JSON.stringify({
                username,
                email,
                password
            });

            const response = await fetch('http://192.168.3.91:3166/mysql_register', {
                method: "POST",
                body: bodyContent,
                headers: headerList
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                navigate('/login');
            } else if (response.status === 409) {
                setIsRequestError(true)
                setRequestError(data.error);
            }




        } catch (e) {
            console.log(e);
        }

    }

    function validate() {
        let validate = true;
        if (!username) { setUsernamePlaceholder(true); validate = false }
        if (!email) { setEmailPlaceholder(true); validate = false }
        if (!password) { setPasswordPlaceholder(true); validate = false }
        if (!confirmPassword) { setConfirmPasswordPlaceholder(true); validate = false }

        return validate;
    }
}

export default Register
