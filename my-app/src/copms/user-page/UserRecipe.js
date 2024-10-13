import React from 'react'
import { ImBin } from "react-icons/im";
import { IoTimerOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
const UserRecipe = ({ recipe, deleteRecipe }) => {
    return (
        <li className='user-recipe'>

            <div className='user-recipe-row'>
                <span className='user-recipe-name'>{recipe.recipe_name}</span>
            </div>

            <div className='user-recipe-row'>
                <span className='user-recipe-cook-time'><IoTimerOutline size={20} /> {recipe.recipe_cook_time}</span>
                <span className='user-recipe-serve'><IoPeopleCircleOutline size={20} /> {recipe.recipe_serve}</span>
            </div>

            <ImBin onClick={() => deleteRecipe(recipe.id)} className='user-recipe-delete-btn' size={22} />

        </li>
    );
}

export default UserRecipe
