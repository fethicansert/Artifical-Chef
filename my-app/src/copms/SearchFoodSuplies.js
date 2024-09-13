import React from 'react'
import { RiSearchEyeLine } from "react-icons/ri";

const SearchFoodSuplies = ({ searchText, setSearchText }) => {
    return (
        <div className='search-food-suplies-container'>
            <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className='search-food-suplies'
                type='text'
                placeholder='Yemek Malzemesi Ara'
            />
            <RiSearchEyeLine
                className='search-icon'
                size={25}
            />

        </div>
    )
}

export default SearchFoodSuplies
