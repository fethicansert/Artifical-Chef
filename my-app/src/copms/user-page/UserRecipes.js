import React from 'react'
import UserRecipe from './UserRecipe'
import { v4 as uuidv4 } from 'uuid';

const UserRecipes = ({ recipes, deleteRecipe }) => {

    const userRecipes = recipes ? recipes?.map(recipe => <UserRecipe key={uuidv4()} deleteRecipe={deleteRecipe} recipe={recipe} />) : undefined;

    return (
        <div>
            <h2 className='user-recipes-title'>Your Recipes</h2>
            <ul className='user-recipes'>
                {userRecipes}
            </ul>
        </div>
    )
}

export default UserRecipes
