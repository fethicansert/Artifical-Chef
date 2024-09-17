import React, { useEffect, useState } from 'react'
import RegisterInput from './RegisterInput';
import '../../css/register.css';

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

    useEffect(() => {
        username.length < 5 ? setIsValidUsername(false) : setIsValidUsername(true);
        !emailRegex.test(email) ? setIsValidEmail(false) : setIsValidEmail(true);
        password.length < 8 ? setIsValidPassword(false) : setIsValidPassword(true);
        password !== confirmPassword ? setIsValidConfirmPassword(false) : setIsValidConfirmPassword(true);
    }, [username, email, password, confirmPassword])

    return (
        <form className='register-container' onSubmit={submit}>

            <h2 className='register-title'>Register</h2>

            <RegisterInput
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

            <button className='register-submit-button'>Submit</button>

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
