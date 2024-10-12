import React from 'react'

const UserInfo = ({ username, firstname, lastname, email }) => {
    return (
        <>
            <div className='user-info-container'>
                <h2 className='user-title'>{username}</h2>
                <span className='user-info capitaliza'>
                    {firstname ? firstname : 'Firstname'}  {lastname ? lastname : "Lastname"}
                </span>
            </div>

            <span className='user-info'>{email}</span>
        </>
    )
}

export default UserInfo
