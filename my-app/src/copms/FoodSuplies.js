import React from 'react'
import foodSuplieTypes from '../data/foodSuplieTypes';
import SearchFoodSuplies from './SearchFoodSuplies';

const FoodSuplies = ({ foodSuplies, chosseFoodSuplie, filterTypeFoodSuplies, searchText, setSearchText }) => {

    return (
        <div className='food-supluies'>

            <p className='food-supluies-text'>Yapay Zekanın Ellerine Sağlık Diyeceksiniz.</p>

            <SearchFoodSuplies
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <div className='food-supluies-list-container'>

                <div className='food-supluies-tpye-list-wrapper'>
                    <ul className='food-supluies-type-list'>
                        {
                            foodSuplieTypes.map((item, index) =>
                                <li
                                    onClick={() => { filterTypeFoodSuplies(item) }}
                                    className='food-supluies-type-list-item'
                                    key={index}>
                                    {item}
                                </li>)
                        }
                    </ul>
                </div>

                <div className='food-supluies-list-wrapper'>
                    <ul className='food-supluies-list'>
                        {
                            foodSuplies.map((item, index) =>
                                <li
                                    onClick={() => { chosseFoodSuplie(item) }}
                                    className='food-supluies-list-item'
                                    key={index}>
                                    {item.name}
                                </li>)
                        }
                    </ul>
                </div>
            </div>


        </div >
    )
}

export default FoodSuplies
