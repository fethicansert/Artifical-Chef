import React from 'react'
import Ingredient from './Ingredient'
import { v4 as uuidv4 } from 'uuid';
const IngredientsList = ({ ingredients }) => {

    return (
        <div className='ingredients-container'>
            <h4 className='ingredients-header'>Ingredients</h4>
            <ul className='ingredients-list'>
                {
                    Array.isArray(ingredients) ?
                        ingredients.map(ingredient => <Ingredient key={uuidv4()} ingredient={ingredient} />)
                        : <Ingredient key={uuidv4()} ingredient={ingredients} />

                }
            </ul>
        </div>
    )
}

export default IngredientsList
