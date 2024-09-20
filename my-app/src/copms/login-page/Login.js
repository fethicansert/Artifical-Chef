import React, { useState } from 'react'
import LoginInput from './LoginInput';
import '../../css/register_login.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { setAuth } = useAuth();

    return (
        <form className='login-container' onSubmit={login}>

            <h2 className='login-title'>Login</h2>

            <LoginInput
                label={'Username'}
                type={'text'}
                setState={setUsername}
                showPlaceholder={false}
            />

            <LoginInput
                label={'Password'}
                type={'password'}
                setState={setPassword}
                showPlaceholder={false}
            />

            <button className='login-submit-button'>Submit</button>
        </form>
    )

    //FUNCtions

    async function login(e) {
        e.preventDefault();

        // if (!validate()) return;

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

            if (response.ok) {
                const data = await response.json();
                setAuth({ token: data.token });
                navigate('/');
            }

        } catch (e) {
            console.log(e);
        }
    }

}

export default Login
