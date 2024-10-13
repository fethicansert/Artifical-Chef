import React, { useRef, useState } from 'react'
import useAuth from '../../hooks/useAuth';

const UserInput = ({ updateInput, updateDispatch, usernameRef, emailRef }) => {

    const { auth } = useAuth();


    return (
        <div className='user-inputs'>
            <div className='user-input-container'>
                <input
                    ref={usernameRef}
                    value={updateInput.username}
                    onChange={(e) => updateDispatch({ type: 'username', payload: e.target.value })}
                    placeholder='Username'
                    className='user-input username'
                    type='text'
                />
                <div className='user-fullname'>
                    <input
                        value={updateInput.firstname}
                        onChange={(e) => updateDispatch({ type: 'firstname', payload: e.target.value })}
                        placeholder='Firstname'
                        className='user-input firstname'
                        type='text'
                    />
                    <input
                        value={updateInput.lastname}
                        onChange={(e) => updateDispatch({ type: 'lastname', payload: e.target.value })}
                        placeholder='Lastname'
                        className='user-input lastname'
                        type='text'
                    />
                </div>
            </div>

            <input
                ref={emailRef}
                value={updateInput.email}
                onChange={(e) => updateDispatch({ type: 'email', payload: e.target.value })}
                placeholder='Email'
                className='user-input email'
                type='text'
            />
        </div>
    )
}

export default UserInput
