import React from 'react'
import ingredientImg from '../../images/icons8-ingredients-100.png';
import { v4 as uuidv4 } from 'uuid';

const SelectedFoodSuplies = ({ selectedFoodSuplies, removeFoodSuplie }) => {
    return (
        <div className='selected-food-suplies'>
            <h2 className='selected-suplies-header'>Your Ingredients</h2>
            {
                selectedFoodSuplies.length
                    ? <div className='selected-food-supluies-list-wrapper'>
                        <ul className='selected-food-supluies-list'>
                            {
                                selectedFoodSuplies.map((item, index) =>
                                    <li
                                        onClick={() => removeFoodSuplie(item)}
                                        className='selected-food-supluies-list-item'
                                        key={uuidv4()}>
                                        {item.name}
                                    </li>)
                            }
                        </ul>
                    </div>
                    : <div className='selected-suplies-text-cotainer'>
                        <p
                            className='selected-suplies-text'>
                            Select your ingredients to let AI serve you the most delicious recipes !
                        </p>
                        {/* <GiHotMeal size={60} /> */}
                        <img width="100" height="100" src={ingredientImg} alt="ingredients" className='recipe-ingredient-image' />
                    </div>
            }
        </div>
    )
}

export default SelectedFoodSuplies
