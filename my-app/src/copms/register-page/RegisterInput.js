import React from 'react'

const RegisterInput = ({ id, label, type, value, setState, showPlaceholder, errorText, isValidInput, focus, setFocus }) => {
    // console.log(focus);
    return (
        <div className='form-input-label-group'>
            <label className='register-label' htmlFor={id}>{label}</label>
            <input
                id={id}
                className='register-input'
                value={value}
                onChange={(e) => setState(e.target.value)}
                onFocus={() => setFocus(true)}
                type={type}
                placeholder={showPlaceholder ? 'Fill this field please !' : ''}
            />
            {
                (!isValidInput && focus && value) && <p className='register-input-error-text'>{errorText}</p>
            }
        </div>
    )
}

export default RegisterInput

