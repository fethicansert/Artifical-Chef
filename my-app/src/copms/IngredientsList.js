import React from 'react'
import Ingredient from './Ingredient'
import { v4 as uuidv4 } from 'uuid';
const IngredientsList = ({ ingredients }) => {
    return (
        <div className='ingredients-container'>
            <h4 className='ingredients-header'>Ingredients</h4>
            <ul className='ingredients-list'>
                {
                    ingredients.map(ingredient => <Ingredient key={uuidv4()} ingredient={ingredient} />)
                }
            </ul>
        </div>
    )
}

export default IngredientsList
