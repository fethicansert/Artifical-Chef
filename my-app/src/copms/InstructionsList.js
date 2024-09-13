import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const InstructionsList = ({ instructions }) => {
    return (
        <div className='instructions-container'>
            <h4 className='instructions-header'>Talimatlar</h4>
            <ul className='instructions-list'>
                {
                    instructions.map(instruction => <li key={uuidv4()}>{instruction}</li>)
                }
            </ul>
        </div>
    )
}

export default InstructionsList
