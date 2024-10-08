import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import '../../css/user.css'
const User = () => {

    //STATES AND HOOKS  
    const { user_id } = useParams();
    const { auth, setAuth } = useAuth();

    const [showEdit, setShowEdit] = useState(false)

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');


    const formRef = useRef();


    useEffect(() => {
        getUserData();
    }, []);


    //UI
    return (
        <main className='user-container'>
            {
                !showEdit
                    ? <>
                        <div className='user-flex'></div>
                        <h2 className='user-title'>{auth.username}</h2>
                        <span className='user-info cap'>
                            {auth.firstname ? auth.firstname : 'Firstname'} {auth.lastname ? auth.lastname : "Lastname"}
                        </span>

                        <span className='user-info'>{auth.email}</span>

                    </>
                    : <form ref={formRef} onSubmit={(e) => updateUser}>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter new username' className='user-input' type='text' />
                        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='Enter new firstname' className='user-input' type='text' />
                        <input value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Enter new lastname' className='user-input' type='text' />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter new email' className='user-input' type='text' />
                    </form>
            }
            <div className='user-btn-group'>
                <button onClick={toogleEdit} className='user-edit-btn'>{!showEdit ? 'Edit' : 'Cancel'}</button>
                {showEdit && <button onClick={updateUser} type='submit' className='user-save-btn'>Save</button>}
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
            username,
            firstname: firstname || 'firstname',
            lastname: lastname || 'lastname',
            email,
        };

        try {
            const response = await fetch(`http://192.168.3.91:3166/mysql_users/${auth.id}`, {
                method: "PUT",
                body: JSON.stringify(bodyContent),
                headers: headerList,
                credentials: 'include',
            });

            if (response.status === 200) {
                toogleEdit();
                setAuth(prev => ({ ...auth, ...bodyContent }))
            }
            // console.log(await response.json());
        } catch (e) {
            console.log(e);
        }

    }

    function validateInput() {
        return 1;
    }

    function toogleEdit() {
        setShowEdit(!showEdit);
        if (showEdit === false) {
            setUsername(auth.username)
            setFirstname(auth.firstname)
            setLastname(auth.lastname);
            setEmail(auth.email);
        }


    }

    function clearInputs() {
        // setUsername('')
        // setFirstname('')
        // setLastname('');
        // setEmail('');
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
