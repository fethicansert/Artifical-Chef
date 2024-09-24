import React, { useState } from 'react'
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import { IoTimerOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import useAuth from '../hooks/useAuth';

const RecipeCard = ({ recipe, setRecipes }) => {

    //STATES AND HOOKS
    const [showError, setShowError] = useState(false);

    const { auth } = useAuth();
    //UI
    return (
        <article className='recipe-card'>

            <h3 className='recipe-name'>{recipe?.recipe_name}</h3>

            <div className='recipe-info-container'>

                <p className='recipe-info-text'><IoTimerOutline size={23} /> {recipe?.cookingTime}</p>

                <p className='recipe-info-text'><IoPeopleCircleOutline size={23} /> {recipe?.serve}</p>

            </div>

            <IngredientsList ingredients={recipe?.ingredients} />

            <InstructionsList instructions={recipe?.instructions} />

            <button
                onClick={saveRecipe}
                className='save-recipe-btn'>
                Tariflerime Kaydet
            </button>

            <ImBin
                className='recipes-remove-icon'
                color='#D4212F'
                size={20}
                onClick={() => removeRecipe(recipe.id)}
            />

            {
                showError &&
                <p className='recipe-login-error-text'>
                    Lütfen önce giriş yapınız.<b>Login</b>
                </p>
            }
        </article>
    );

    //FUNCTIONS
    function removeRecipe(id) {
        setRecipes(prev => {
            const removedRecipes = prev.filter(recipe => recipe.id !== id);
            return removedRecipes;
        });
    };

    async function saveRecipe() {
        if (!auth.token) return setShowError(true);
    }
}

export default RecipeCard
