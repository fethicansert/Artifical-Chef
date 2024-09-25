import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../css/recipes.css'
import RecipeCard from './RecipeCard';
import { v4 as uuidv4 } from 'uuid';

const Recipes = () => {

    const { state } = useLocation();

    const [recipes, setRecipes] = useState(JSON.parse(sessionStorage.getItem('recipes')) || state?.recipesData?.recipes);

    useEffect(() => {
        sessionStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    return (
        <main className='recipes-container'>

            <h2 className='recipes-title'>Your Recipes</h2>

            {
                recipes?.length > 0
                    ? recipes.map(recipe => <RecipeCard key={uuidv4()} recipe={recipe} setRecipes={setRecipes} />)
                    : <p>Your recipe list is empty please create a recipe.</p>
            }

        </main>
    )
}

export default Recipes
