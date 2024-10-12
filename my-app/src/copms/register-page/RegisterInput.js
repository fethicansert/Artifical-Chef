import React from 'react'

const RegisterInput = ({ id, label, type, value, dispatch, action, showPlaceholder, errorText, isValidInput }) => {

    return (
        <div className='form-input-label-group'>
            <label className='register-label' htmlFor={id}>{label}</label>
            <input
                id={id}
                className='register-input'
                value={value}
                onChange={(e) => dispatch({ type: action, payload: e.target.value })}
                type={type}
                placeholder={showPlaceholder ? 'Fill this field please !' : ''}
            />
            {
                (!isValidInput && value) && <p className='register-input-error-text'>{errorText}</p>
            }
        </div>
    )
}

export default RegisterInput

