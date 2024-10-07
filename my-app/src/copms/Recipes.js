import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../css/recipes.css'
import RecipeCard from './RecipeCard';
import { v4 as uuidv4 } from 'uuid';
import Popup from './Popup';

const Recipes = () => {

    const { state } = useLocation();
    const [recipes, setRecipes] = useState(JSON.parse(sessionStorage.getItem('recipes')) || state?.recipesData?.recipes);
    const [popupOptions, setPopupOptions] = useState({ show: false });



    //run if recipes state updated, if recipes not undefined than store in sessinStorage
    useEffect(() => {
        if (recipes !== undefined) sessionStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    return (
        <main className='recipes-container'>

            <h2 className='recipes-title'>Prepared Recipes</h2>

            {
                recipes?.length > 0
                    ? recipes.map(recipe => <RecipeCard
                        key={uuidv4()}
                        setRecipes={setRecipes}
                        setPopupOptions={setPopupOptions}
                        recipe={recipe}
                    />)
                    : <p>Your recipe list is empty please create a recipe.</p>
            }

            {
                popupOptions.show && <Popup popupOptions={popupOptions} setPopupOptions={setPopupOptions} />
            }


            <div className={`overlay ${popupOptions.show ? 'active' : null}`} />

        </main>
    )



}

export default Recipes
