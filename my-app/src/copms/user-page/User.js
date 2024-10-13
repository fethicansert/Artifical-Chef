import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UserInfo from './UserInfo';
import UserInput from './UserInput';
import { userUpdateInputReducer } from '../../reducers/registerReducers';

import '../../css/user.css'
import UserRecipes from './UserRecipes';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const User = () => {

    //STATES AND HOOKS  
    const [userRecipes, setUserRecipes] = useState();

    console.log(userRecipes);

    const { user_id } = useParams();

    const { auth, setAuth } = useAuth();

    const [isEditing, setisEditing] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const usernameRef = useRef();

    const emailRef = useRef();

    const [updateInput, updateDispatch] = useReducer(userUpdateInputReducer, {
        username: auth.username || '', email: auth.email || '',
        firstname: auth.firstname || '', lastname: auth.lastname || ''
    });

    useEffect(() => { getUserData() }, []);

    useEffect(() => { if (isEditing === true) { resesUpdate() } }, [isEditing]);

    //UI
    return (
        <main className='user-container'>

            {
                !isEditing
                    ? <UserInfo username={auth.username} firstname={auth.firstname} lastname={auth.lastname} email={auth.email} />
                    : <UserInput updateDispatch={updateDispatch} updateInput={updateInput} usernameRef={usernameRef} emailRef={emailRef} />
            }

            <div className='user-button-container'>
                <button onClick={toogleEdit} className='user-update-btn'>{!isEditing ? 'Update' : 'Cancel'}</button>
                {isEditing && <button onClick={updateUser} type='submit' className='user-confirm-btn'>Confirm</button>}
            </div>

            {(isEditing && errorMessage) && <span className='user-error-text'>{errorMessage}</span>}

            <UserRecipes recipes={userRecipes} deleteRecipe={deleteRecipe} />

        </main>
    );


    //FUNCTIONS

    async function deleteRecipe(id) {
        console.log("Hello");
        const newRecipes = userRecipes.filter(recipe => recipe.id !== id);
        setUserRecipes(newRecipes);
    }

    async function updateUser() {
        if (!validateInput()) return console.log("errror");

        const headerList = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.token} `
        };

        const bodyContent = {
            username: updateInput.username,
            firstname: updateInput.firstname,
            lastname: updateInput.lastname,
            email: updateInput.email
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
            } else if (response.status === 400) {
                setErrorMessage(data.error);
            }

        } catch (e) {
            console.log(e);
        }

    }

    function validateInput() {
        let isValid = true;
        if (!updateInput.username) {
            isValid = false;
            setErrorMessage("Username required !");
            usernameRef.current.focus();
        }
        else if (!updateInput.email) {
            isValid = false;
            setErrorMessage("Email required !");
            emailRef.current.focus();
        }
        else if (!emailRegex.test(updateInput.email)) {
            isValid = false;
            setErrorMessage("Email not valid !");
        }
        return isValid;
    }

    function toogleEdit() {
        setisEditing(!isEditing);
        setErrorMessage("");
    }

    async function getUserData() {
        try {
            const response = await fetch(`http://192.168.3.91:3166/mysql_recipe/${user_id}`);
            if (response.status === 200) {
                const data = await response.json();
                setUserRecipes(data.userRecipes);
            }

        } catch (e) {
            console.log(e);
        }
    };

    function resesUpdate() {
        usernameRef.current.focus();
        updateDispatch({
            type: 'reset', payload:
                { username: auth.username, firstname: auth.firstname, lastname: auth.lastname, email: auth.email }
        });
    }


}

export default User
