import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UserInfo from './UserInfo';
import UserInput from './UserInput';
import { userUpdateInputReducer } from '../../reducers/registerReducers';

import '../../css/user.css'
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const User = () => {

    //STATES AND HOOKS  
    const { user_id } = useParams();

    const { auth, setAuth } = useAuth();

    const [showEdit, setShowEdit] = useState(false);

    const usernameRef = useRef();

    const [updateInput, updateDispatch] = useReducer(userUpdateInputReducer, {
        username: auth.username || '', email: auth.email || '',
        firstname: auth.firstname || '', lastname: auth.lastname || ''
    });

    useEffect(() => { getUserData() }, []);

    useEffect(() => { if (showEdit === true) usernameRef.current.focus() }, [showEdit]);



    //UI
    return (
        <main className='user-container'>
            {
                !showEdit
                    ? <UserInfo username={auth.username} firstname={auth.firstname} lastname={auth.lastname} email={auth.email} />
                    : <UserInput updateDispatch={updateDispatch} updateInput={updateInput} usernameRef={usernameRef} />
            }
            <div className='user-button-container'>
                <button onClick={toogleEdit} className='user-update-btn'>{!showEdit ? 'Update' : 'Cancel'}</button>
                {showEdit && <button onClick={updateUser} type='submit' className='user-confirm-btn'>Confirm</button>}
            </div>
        </main>
    );


    //FUNCTIONS
    async function updateUser() {
        // if (!validateInput()) return;

        const headerList = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.token} `
        };

        const bodyContent = {
            // username: username,
            // firstname: firstname,
            // lastname: lastname,
            // email: email
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
