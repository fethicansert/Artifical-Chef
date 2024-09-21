import React from 'react'
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import { IoTimerOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ImBin } from "react-icons/im";

const RecipeCard = ({ recipe, setRecipes }) => {

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

            <ImBin
                className='recipes-remove-icon'
                color='#D4212F'
                size={20}
                onClick={() => removeRecipe(recipe.id)}
            />


        </article>
    );

    function removeRecipe(id) {
        setRecipes(prev => {
            const removedRecipes = prev.filter(recipe => recipe.id !== id);
            return removedRecipes;
        });
    }
}

export default RecipeCard
