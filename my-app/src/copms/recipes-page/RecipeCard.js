import React, { useState } from 'react'
import IngredientsList from '../home-page/IngredientsList';
import InstructionsList from '../home-page/InstructionsList';
import { IoTimerOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThreeDots, RotatingLines } from 'react-loader-spinner';
import LoadingSpinner from '../Loading';

const RecipeCard = ({ recipe, setRecipes, setPopupOptions }) => {


    //STATES AND HOOKS
    const [isLoading, setIsLoading] = useState(false);
    // const [isSaved, setIsSaved] = useState(false)

    const { auth } = useAuth();
    const { pathname } = useLocation()
    const navigate = useNavigate();

    console.log(isLoading);

    //UI
    return (
        <article className={`recipe-card ${isLoading ? 'blur' : null}`}>

            <div className={`recipe-container  ${isLoading ? 'blur' : null}`}>

                <h3 className='recipe-name'>{recipe?.recipe_name}</h3>

                <div className='recipe-info-container'>

                    <p className='recipe-info-text'><IoTimerOutline size={23} />{recipe?.cookingTime}</p>

                    <p className='recipe-info-text'><IoPeopleCircleOutline size={23} />{recipe?.serve}</p>

                </div>

                <IngredientsList ingredients={recipe?.ingredients} />

                <InstructionsList instructions={recipe?.instructions} />

                {/* if recipe isSaved propertie true than button name "Recipe Saved" else "Save" */}
                <button
                    onClick={() => saveRecipe(recipe)}
                    className='save-recipe-btn'>
                    {recipe.isSaved ? "recipe saved" : "save"}
                </button>

                <ImBin
                    className='recipes-remove-icon'
                    color='#D4212F'
                    size={20}
                    onClick={() => removeRecipe(recipe.id)}
                />


            </div>

            {isLoading && <LoadingSpinner color='#339c6e' />}
        </article>
    );

    //FUNCTIONS

    //set closepopup
    function closePopup() {
        setPopupOptions(prev => ({ ...prev, show: false }));
    }

    function showPopup(message, btnName, btnColor, func) {
        setPopupOptions(prev => ({ ...prev, show: true, message: message, btnName: btnName, btnColor: btnColor, onClick: func }))
    }

    //removes recipe from recipes
    function removeRecipe(id) {
        setRecipes(prev => {
            const removedRecipes = prev.filter(recipe => recipe.id !== id);
            return removedRecipes;
        });
    };

    //save recipe to current user recipes   
    async function saveRecipe(currentRecipe) {

        //if not authenticated set showpopup
        if (!auth.username) return showPopup("Login required to save recipe !", "Login", "#D4212F", navigateLogin)


        //if recipe alreadt saved set showpopup
        if (recipe.isSaved) return showPopup("The recipe already in your recipe list !", "Close", "#D4212F", closePopup)


        //show loading animation
        setIsLoading(true);

        //parse currentRecipe js object to json string
        const requestBody = JSON.stringify({ ...currentRecipe, userId: auth.id });

        //set type of content which use in request body
        const headerList = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.token}`
        }



        try {
            //send request to back-end
            const response = await fetch('http://192.168.3.91:3166/mysql_recipe', { headers: headerList, method: "POST", body: requestBody });

            //if recipe created(201) than set isSaved properties to true
            if (response.status === 201) {
                setRecipes(prev => prev.map(res => res.id === recipe.id ? { ...res, isSaved: true } : res));
            }

            //if recipe already in db(409)--conflict than show popup
            else if (response.status === 409) {
                showPopup("The recipe already in your recipe list !", "Close", "#D4212F", closePopup);
                setRecipes(prev => prev.map(res => res.id === recipe.id ? { ...res, isSaved: true } : res))
            }


        }
        catch (e) { console.log(e); }
        //stop loading animation
        finally {
            setTimeout(() => setIsLoading(false), 2000)
        }

    }

    //navigate login with current pathname state
    function navigateLogin() {
        navigate('/login', { state: pathname })
    }

}

export default RecipeCard
