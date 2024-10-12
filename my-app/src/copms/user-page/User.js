import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../css/user.css'
import UserInfo from './UserInfo';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const User = () => {

    //STATES AND HOOKS  
    const { user_id } = useParams();
    const { auth, setAuth } = useAuth();

    const [showEdit, setShowEdit] = useState(false);

    const [username, setUsername] = useState(auth.username);
    const [firstname, setFirstname] = useState(auth.firstname || '');
    const [lastname, setLastname] = useState(auth.lastname || '');
    const [email, setEmail] = useState(auth.email);


    const usernameInputRef = useRef();


    useEffect(() => {
        getUserData();
    }, []);


    useEffect(() => {
        if (showEdit === true) {
            usernameInputRef.current.focus();
        } else {

        }
    }, [showEdit])


    //UI
    return (
        <main className='user-container'>
            {
                !showEdit
                    ? <UserInfo username={auth.username} firstname={auth.firstname} lastname={auth.lastname} email={auth.email} />
                    : <>

                        <div className='user-input-container'>
                            <input
                                ref={usernameInputRef}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder='Username'
                                className='user-input username'
                                type='text'
                            />
                            <div className='user-fullname'>
                                <input
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    placeholder='Firstname'
                                    className='user-input firstname'
                                    type='text'
                                />
                                <input
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    placeholder='Lastname'
                                    className='user-input lastname'
                                    type='text'
                                />
                            </div>
                        </div>

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            className='user-input email'
                            type='text'
                        />
                    </>
            }
            <div className='user-button-container'>
                <button onClick={toogleEdit} className='user-update-btn'>{!showEdit ? 'Update' : 'Cancel'}</button>
                {showEdit && <button onClick={updateUser} type='submit' className='user-confirm-btn'>Confirm</button>}
            </div>
        </main>
    );

    //FUNCTIONS
    async function updateUser() {
        if (!validateInput()) return;

        const headerList = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.token} `
        };

        const bodyContent = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email
        };

        try {
            const response = await fetch(`http://192.168.3.91:3166/mysql_users/${auth.id}`, {
                method: "PUT",
                body: JSON.stringify(bodyContent),
                headers: headerList,
                credentials: 'include',
            });

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                setAuth({ ...auth, ...data.updatedUser });
                toogleEdit();
            };

        } catch (e) {
            console.log(e);
        }

    }

    function validateInput() {
        return 1;
        // return isValid
    }

    function toogleEdit() {
        setShowEdit(!showEdit);
    }


    async function getUserData() {

        try {
            const response = await fetch(`http://192.168.3.91:3166/mysql_recipe/${user_id}`);
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };


}

export default User
