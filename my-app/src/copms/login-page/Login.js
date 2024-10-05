import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';
import { jwtDecode } from 'jwt-decode';

import LoginInput from './LoginInput';
import PlatformButton from '../buttons/PlatformButton';

import googleIcon from '../../images/icons8-google-48.png'
import facebookIcon from '../../images/icons8-facebook-50.png'

import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

import { gapi, loadClientAuth2 } from 'gapi-script'

import '../../css/register_login.css';

const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showUsernamePlaceholder, setShowUsernamePlaceholder] = useState(false);
    const [showPasswordPlaceholder, setShowPasswordPlaceholder] = useState(false);

    const [requestError, setRequestError] = useState('');
    const [isRequestError, setIsRequestError] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { state } = useLocation();
    const { setAuth } = useAuth();

    console.log(state);

    const googleLogin = useGoogleLogin({
        onSuccess: (user) => getGoogleUserDetails(user),
        onError: error => console.log(error),
    });


    return (
        <form className='login-container' onSubmit={login}>

            <h2 className='login-title'>Login</h2>

            {isRequestError && <p className='register-request-error-text'>{requestError}</p>}

            <LoginInput
                id={'username'}
                value={username}
                label={'Username'}
                type={'text'}
                setState={setUsername}
                showPlaceholder={showUsernamePlaceholder}
            />

            <LoginInput
                id={'password'}
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

            <PlatformButton onClick={googleLogin} icon={googleIcon}>Continue with Google</PlatformButton>

            <PlatformButton icon={facebookIcon} >Continue with Facebook</PlatformButton>


        </form>
    )

    //FUNCtions

    function validate() {
        let validate = true
        if (!username) { setShowUsernamePlaceholder(true); validate = false }
        if (!password) { setShowPasswordPlaceholder(true); validate = false }
        return validate;
    }

    async function getGoogleUserDetails(user) {
        const headerList = {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
        }
        try {
            const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, { headers: headerList });
            const data = await response.json();
            console.log(data);
        } catch (e) {

        }
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
                const token = data.token;
                const decoded = jwtDecode(token);


                setAuth({ token: token, username: decoded.username, id: decoded.id });
                navigate(state ? state : '/');

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
