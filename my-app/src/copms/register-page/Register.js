import React, { useEffect, useState, useReducer } from 'react'
import RegisterInput from './RegisterInput';
import '../../css/register_login.css';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../images/icons8-google-48.png'
import facebookIcon from '../../images/icons8-facebook-50.png'
import { ThreeDots } from 'react-loader-spinner';

import { inputReducer, validInputReducer, showPlaceholderReducer } from '../../reducers/registerReducers';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {

    //STATES
    const [inputState, inputDispatch] = useReducer(inputReducer, {
        username: '', email: '',
        password: '', confirmPassword: ''
    });

    const [validInputState, validInputDispatch] = useReducer(validInputReducer, {
        isValidUsername: false, isValidEmail: false,
        isValidPassword: false, isValidConfirmPassword: false
    });

    const [showPlaceholderState, showPlaceholderDispatch] = useReducer(showPlaceholderReducer, {
        showUsernamePlaceholder: false, showEmailPlaceholder: false,
        showPasswordPlaceholde: false, showConfirmPasswordPlaceholder: false
    });

    const [requestError, setRequestError] = useState('');

    const [isLoading, setIsloading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        validInputDispatch({ type: 'isValidUsername', payload: inputState.username.length >= 5 });
        validInputDispatch({ type: 'isValidEmail', payload: emailRegex.test(inputState.email) });
        validInputDispatch({ type: 'isValidPassword', payload: inputState.password.length >= 8 });
        validInputDispatch({ type: 'isValidConfirmPassword', payload: inputState.password === inputState.confirmPassword });
    }, [inputState]);


    return (
        <form className='register-container' onSubmit={submit}>

            <h2 className='register-title'>Register</h2>

            {requestError && <p className='register-request-error-text'>{requestError}</p>}

            <RegisterInput
                id={'username'}
                label={'Username'}
                type={'text'}
                value={inputState.username}
                dispatch={inputDispatch}
                action={'username'}
                errorText={"Username must be at least 5 character."}
                isValidInput={validInputState.isValidUsername}
                showPlaceholder={showPlaceholderState.showUsernamePlaceholder}
            />

            <RegisterInput
                id={'email'}
                label={"Email"}
                type={'email'}
                value={inputState.email}
                dispatch={inputDispatch}
                action={'email'}
                errorText={"Not valid email address."}
                isValidInput={validInputState.isValidEmail}
                showPlaceholder={showPlaceholderState.showEmailPlaceholder}
            />

            <RegisterInput
                id={'password'}
                label={"Password"}
                type={'password'}
                value={inputState.password}
                dispatch={inputDispatch}
                action={'password'}
                errorText={"Password must be at least 8 character."}
                isValidInput={validInputState.isValidPassword}
                showPlaceholder={showPlaceholderState.showPasswordPlaceholder}
            />

            <RegisterInput
                id={'confirmpassword'}
                label={"Confirm Password"}
                type={'password'}
                value={inputState.confirmPassword}
                dispatch={inputDispatch}
                action={'confirmPassword'}
                errorText={"Password and Confirm Password must match."}
                isValidInput={validInputState.isValidConfirmPassword}
                showPlaceholder={showPlaceholderState.showConfirmPasswordPlaceholder}
            />

            <button id='submit' aria-label='submit' className='register-submit-button'>
                {
                    !isLoading
                        ? 'Submit'
                        : <ThreeDots color='white' height={21.8} width={30} wrapperClass='login-submit-loading' />
                }
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

        setIsloading(true);

        try {

            const headerList = {
                "Content-Type": "application/json"
            };

            const bodyContent = JSON.stringify({
                username: inputState.username,
                email: inputState.email,
                password: inputState.password
            });
            console.log(bodyContent);
            const response = await fetch('http://192.168.3.91:3166/mysql_register', {
                method: "POST",
                body: bodyContent,
                headers: headerList
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 201) {
                navigate('/login');
            } else if (response.status === 409) {
                setRequestError(data.error);
            }

        } catch (e) {
            console.log(e);
        } finally {
            setIsloading(false)
        }

    }

    function validate() {

        let validate = true;
        if (!inputState.username) { showPlaceholderDispatch({ type: 'showUsernamePlaceholder', payload: true }); validate = false };
        if (!inputState.email) { showPlaceholderDispatch({ type: 'showEmailPlaceholder', payload: true }); validate = false };
        if (!inputState.password) { showPlaceholderDispatch({ type: 'showPasswordPlaceholder', payload: true }); validate = false };
        if (!inputState.confirmPassword) { showPlaceholderDispatch({ type: 'showConfirmPasswordPlaceholder', payload: true }); validate = false };

        return validate;
    }
}

export default Register
