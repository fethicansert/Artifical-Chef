import React from 'react'

const LoginInput = ({ id, label, value, type, setState, showPlaceholder }) => {

    return (
        <div className='form-input-label-group'>
            <label className='login-label' htmlFor='username'>{label}</label>
            <input
                id={id}
                className='login-input'
                value={value}
                onChange={(e) => setState(e.target.value)}
                type={type}
                placeholder={showPlaceholder ? 'Fill this field please !' : ''}
            />
        </div>

    )
}

export default LoginInput
