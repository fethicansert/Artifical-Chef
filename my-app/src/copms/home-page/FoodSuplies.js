import React from 'react'
import { Oval } from 'react-loader-spinner';
import SearchFoodSuplies from './SearchFoodSuplies';
import { v4 as uuidv4 } from 'uuid';


const FoodSuplies = ({ foodSuplies, chooseFoodSuplie, filterTypeFoodSuplies, searchText, setSearchText, foodSuplieTypes, isIngredientsLoadings }) => {

    return (
        <div className='food-supluies'>

            <p className='food-supluies-text'>You'll Be Thanking AI's Hands.</p>

            <SearchFoodSuplies
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <div className='food-supluies-list-container'>

                <div className='food-supluies-tpye-list-wrapper'>
                    <ul className='food-supluies-type-list'>
                        {
                            !isIngredientsLoadings ?
                                foodSuplieTypes.map((item, index) =>
                                    <li
                                        onClick={() => { filterTypeFoodSuplies(item) }}
                                        className='food-supluies-type-list-item'
                                        key={uuidv4()}>
                                        {item}
                                    </li>)
                                : <Oval color='#D4212F' secondaryColor='#D4212F' wrapperClass='food-suplies-loading-spinner' />
                        }
                    </ul>
                </div>

                <div className='food-supluies-list-wrapper'>
                    <ul className='food-supluies-list'>
                        {
                            !isIngredientsLoadings ?
                                foodSuplies.map((item, index) =>
                                    <li
                                        onClick={() => { chooseFoodSuplie(item) }}
                                        className='food-supluies-list-item'
                                        key={uuidv4()}>
                                        {item.name}
                                    </li>)
                                : <Oval color='#f75a0b' secondaryColor='#f75a0b' wrapperClass='food-suplies-loading-spinner' />
                        }
                    </ul>
                </div>

            </div>


        </div >
    )
}

export default FoodSuplies
