import React, { useState } from 'react'
import LoginInput from './LoginInput';
import '../../css/register_login.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import googleIcon from '../../images/icons8-google-48.png'
import facebookIcon from '../../images/icons8-facebook-50.png'
import { ThreeDots } from 'react-loader-spinner';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showUsernamePlaceholder, setShowUsernamePlaceholder] = useState(false);
    const [showPasswordPlaceholder, setShowPasswordPlaceholder] = useState(false);

    const [requestError, setRequestError] = useState('');
    const [isRequestError, setIsRequestError] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { setAuth } = useAuth();


    return (
        <form className='login-container' onSubmit={login}>

            <h2 className='login-title'>Login</h2>

            {isRequestError && <p className='register-request-error-text'>{requestError}</p>}

            <LoginInput
                value={username}
                label={'Username'}
                type={'text'}
                setState={setUsername}
                showPlaceholder={showUsernamePlaceholder}
            />

            <LoginInput
                value={password}
                label={'Password'}
                type={'password'}
                setState={setPassword}
                showPlaceholder={showPasswordPlaceholder}
            />

            <button className='login-submit-button'>
                {
                    !isLoading
                        ? 'Submit'
                        : <ThreeDots color='white' height={21.8} width={30} wrapperClass='login-submit-loading' />
                }
            </button>

            <p onClick={() => { navigate('/register') }} className='login-information-text'>Don't have an account?<b> Register</b></p>

            <button className='login-submit-button platform-button'>
                <img className='google-icon' src={googleIcon} width={34} />
                <span>Continue with Google</span>
            </button>

            <button className='login-submit-button platform-button'>
                <img className='facebook-icon' src={facebookIcon} width={34} />
                <span>Continue with Facebook</span>
            </button>

        </form>
    )

    //FUNCtions

    function validate() {
        let validate = true
        if (!username) { setShowUsernamePlaceholder(true); validate = false }
        if (!password) { setShowPasswordPlaceholder(true); validate = false }
        return validate;
    }
    async function login(e) {
        e.preventDefault();

        if (!validate()) return;

        setIsLoading(true);
        try {

            const headerList = {
                "Content-Type": "application/json",

            };

            const bodyContent = JSON.stringify({
                username,
                password
            });

            const response = await fetch('http://192.168.3.91:3166/mysql_auth', {
                method: "POST",
                body: bodyContent,
                headers: headerList,

                credentials: 'include',
            });

            const data = await response.json();

            if (response.ok) {

                setAuth({ token: data.token });
                navigate('/');
            } else if (response.status === 403) {
                setIsRequestError(true)
                setRequestError(data.error);
            };

        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

}

export default Login
