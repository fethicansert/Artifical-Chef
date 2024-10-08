import React from 'react'
import { useEffect, useRef, useState, useLayoutEffect } from 'react';

import '../../css/foodsuplies.css'

import FoodSuplies from './FoodSuplies';
import SelectedFoodSuplies from './SelectedFoodSuplies';

import fartSound from '../../sounds/zapsplat_cartoon_slime_fart_rasp_wet_bubbles_012_72938.mp3';

import LoadingSpinner from '../Loading';
import Popup from '../Popup';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Main = () => {

    //STATES AND HOOKS

    //app states
    const [foodSuplies, setFoodSuplies] = useState([]);
    const [selectedFoodSuplies, setSelectedFoodSuplies] = useState(JSON.parse(sessionStorage.getItem('selectedFoodSuplies')) || []);
    const [filteredFoodSuplies, setFilteredFoodSuplies] = useState(foodSuplies);
    const [foodSuplieTypes, setFoodSuplieTypes] = useState([]);

    //fetch loading states
    const [isPrepareRecipesLoading, setPrepareRecipesIsLoading] = useState(false);
    const [isIngredientsLoading, setIsIngredientsLoading] = useState(false);

    //popup options
    const [popupOptions, setPopupOptions] = useState({
        message: '',
        show: false,
        btnColor: '#339c6e',
        onClick: closePopup,
        btnName: 'Close'
    });

    //searct states
    const [searchText, setSearcText] = useState('');

    //hooks
    const navigate = useNavigate();

    //auth
    const { auth } = useAuth();


    useEffect(() => {
        getIngredients();
        filterSelectedFoodSuplies(foodSuplies);
    }, []);

    useEffect(() => {
        const newSearchedFoodSuplies = foodSuplies.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredFoodSuplies(newSearchedFoodSuplies);
    }, [searchText]);

    useEffect(() => {
        sessionStorage.setItem('selectedFoodSuplies', JSON.stringify(selectedFoodSuplies));
        sessionStorage.getItem('')
    }, [selectedFoodSuplies]);


    //UI
    return (
        <>
            {
                !isPrepareRecipesLoading
                    ? <main className='food-suplies-container'>

                        <FoodSuplies
                            isIngredientsLoadings={isIngredientsLoading}
                            foodSuplies={filteredFoodSuplies}
                            foodSuplieTypes={foodSuplieTypes}
                            chooseFoodSuplie={chooseFoodSuplie}
                            filterTypeFoodSuplies={filterTypeFoodSuplies}
                            searchText={searchText}
                            setSearchText={setSearcText}
                        />

                        <SelectedFoodSuplies
                            selectedFoodSuplies={selectedFoodSuplies}
                            removeFoodSuplie={removeFoodSuplie}
                        />

                        <button
                            onClick={prepareRecipies}
                            className='prepare-recipies-btn'>
                            Prepare
                        </button>

                        {/* if show === true render popup and overlay */}

                        {
                            popupOptions.show &&

                            <Popup popupOptions={popupOptions} setPopupOptions={setPopupOptions} />

                        }

                        <div className={`overlay ${popupOptions.show ? 'active' : null}`} />

                    </main>
                    : <LoadingSpinner text={'Recipes are Preparing'} />
            }</>
    );

    ////FUNCTIONS

    function showPopup(message) {
        setPopupOptions(prev => ({ ...prev, message: message, show: true }))
    }

    function closePopup() {
        setPopupOptions(prev => ({ ...prev, show: false }))
    };

    function validate() {
        if (selectedFoodSuplies.length === 0) return false
        return true
    };

    function chooseFoodSuplie(suplie) {
        setSelectedFoodSuplies(prev => [...prev, suplie]);
        setFilteredFoodSuplies(prev => prev.filter(item => item.name !== suplie.name))
        setSearcText('');
    };

    function removeFoodSuplie(suplie) {
        setSelectedFoodSuplies(prev => prev.filter(item => item.name !== suplie.name));
        setFilteredFoodSuplies(prev => [suplie, ...prev])
    };

    function filterSelectedFoodSuplies(arr) {
        const notSelectedFilteredFoodSuplies = arr.filter(item => {
            let isNotSelected = true;
            for (let index = 0; index < selectedFoodSuplies.length; index++) {
                if (selectedFoodSuplies[index].name === item.name) {
                    isNotSelected = false
                    break;
                }
            }
            return isNotSelected;
        });
        setSearcText('');
        setFilteredFoodSuplies(notSelectedFilteredFoodSuplies);
    }

    function filterTypeFoodSuplies(type) {
        if (type === '' || type === 'Hepsi') {
            setSearcText('');
            setFilteredFoodSuplies(foodSuplies);
            return;
        };

        const typeFilteredFoodSuplies = foodSuplies.filter(item => item.type === type);

        filterSelectedFoodSuplies(typeFilteredFoodSuplies);
    }


    async function prepareRecipies() {
        // audioRef.current.play();

        if (!validate()) return showPopup("Before starting to create a recipe, you must select the ingredients!");

        try {
            setPrepareRecipesIsLoading(true);

            const headerList = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${auth.token}`
            };

            const bodyContent = JSON.stringify({
                userContent: selectedFoodSuplies.map(item => item.name).join(', ')
            });

            console.log(headerList);

            const response = await fetch("http://192.168.3.91:3166/groqAI/", {
                method: "POST",
                body: bodyContent,
                headers: headerList,
                credentials: 'include'
            });


            if (response.status === 200) {
                const data = await response.json();
                const recipesData = data.message;
                console.log(data.message);
                sessionStorage.setItem('recipes', JSON.stringify(recipesData.recipes));

                navigate('recipes', { state: { recipesData } });
            } else if (response.status === 400) {
                showPopup('Something went wrong !')
            }
        } catch (e) {
            showPopup('Something went wrong !')
        } finally {
            setPrepareRecipesIsLoading(false);
        }
    }

    async function getIngredients() {

        try {
            setIsIngredientsLoading(true);

            const response = await fetch('http://192.168.3.91:3166/mysql_ingredients');
            const data = await response.json();

            const response_ = await fetch('http://192.168.3.91:3166/mysql_ingredient_types')
            const data_ = await response_.json();

            if (response.ok) {
                setFoodSuplieTypes(data_);
                setFoodSuplies(data);
                setFilteredFoodSuplies(data);
            }

        } catch (e) {
            console.log(e);
        } finally {
            setTimeout(() => {
                setIsIngredientsLoading(false);
            }, 400);
        }
    }

}



export default Main
