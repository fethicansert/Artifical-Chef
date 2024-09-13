import React from 'react'
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import { IoTimerOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";

const RecipeCard = ({ recipe }) => {

    return (
        <article className='recipe-card'>

            <h3 className='recipe-name'>{recipe?.recipe_name}</h3>

            <div className='recipe-info-container'>

                <p className='recipe-info-text'><IoTimerOutline size={23} /> {recipe?.cookingTime}</p>

                <p className='recipe-info-text'><IoPeopleCircleOutline size={23} /> {recipe?.serve}</p>

            </div>

            <IngredientsList ingredients={recipe?.ingredients} />

            <InstructionsList instructions={recipe?.instructions} />

            <button className='save-recipe-btn'>Tariflerime Kaydet</button>
        </article>
    )
}

export default RecipeCard
