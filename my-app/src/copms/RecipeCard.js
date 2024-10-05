import React, { useState } from 'react'
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import { IoTimerOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const RecipeCard = ({ recipe, setRecipes }) => {

    //STATES AND HOOKS
    const [showError, setShowError] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
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
                disabled={isSaved}
                onClick={() => { saveRecipe(recipe) }}
                className='save-recipe-btn'>
                {!isLoading ? !isSaved ? "Save" : "Saved" : <ThreeDots height={18.5} width={30} color='white' />}
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
                    Please login first.<b onClick={() => navigate('/login')}>Login</b>
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

    async function saveRecipe(recipe) {

        if (!auth.username) return setShowError(true);

        setIsLoading(true);
        const requestBody = JSON.stringify({ ...recipe, userId: auth.id });

        const headerList = {
            "Content-Type": "application/json",
        }

        try {
            const response = await fetch('http://192.168.3.91:3166/mysql_recipe', { headers: headerList, method: "POST", body: requestBody });
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
                setIsSaved(true)
            }, 1500)
        }
    }
}

export default RecipeCard
