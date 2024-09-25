import React from 'react'
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import foodSupliesData from '../data/foodSuplies'
import '../css/foodsuplies.css'

import FoodSuplies from '../copms/FoodSuplies';
import SelectedFoodSuplies from '../copms/SelectedFoodSuplies';
import fartSound from '../sounds/zapsplat_cartoon_slime_fart_rasp_wet_bubbles_012_72938.mp3';
import LoadingSpinner from '../copms/Loading';
import Popup from '../copms/Popup';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Main = ({ setIsPrepered }) => {


    //STATES AND HOOKS
    const [foodSuplies, setFoodSuplies] = useState([]);
    const [selectedFoodSuplies, setSelectedFoodSuplies] = useState(JSON.parse(sessionStorage.getItem('selectedFoodSuplies')) || []);
    const [filteredFoodSuplies, setFilteredFoodSuplies] = useState(foodSuplies);
    const [isLoading, setIsLoading] = useState(false);
    const [foodSuplieTypes, setFoodSuplieTypes] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const [searchText, setSearcText] = useState('');

    const audioRef = useRef(null);
    const navigate = useNavigate();
    const { auth } = useAuth();

    useEffect(() => {

        const getIngredients = async () => {

            try {
                const response = await fetch('http://192.168.3.91:3166/mysql_ingredients');
                const data = await response.json();

                const response_ = await fetch('http://192.168.3.91:3166/mysql_ingredient_types')
                const data_ = await response_.json();

                setFoodSuplieTypes(data_);
                setFoodSuplies(data);
                setFilteredFoodSuplies(data);
            } catch (e) {
                console.log(e);
            }
        }
        getIngredients();
    }, []);

    useEffect(() => {
        const newSearchedFoodSuplies = foodSuplies.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredFoodSuplies(newSearchedFoodSuplies);
    }, [searchText]);

    useEffect(() => {
        sessionStorage.setItem('selectedFoodSuplies', JSON.stringify(selectedFoodSuplies));
    }, [selectedFoodSuplies]);

    useEffect(() => {
        filterSelectedFoodSuplies(foodSuplies);
    }, []);

    //UI
    return (
        <>
            {
                !isLoading
                    ? <main className='food-suplies-container'>

                        <FoodSuplies
                            foodSuplies={filteredFoodSuplies}
                            foodSuplieTypes={foodSuplieTypes}
                            chosseFoodSuplie={chosseFoodSuplie}
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
                            <audio ref={audioRef} src={fartSound}></audio>
                        </button>

                        {
                            errorMessage &&
                            <Popup
                                message={errorMessage}
                                setErrorMessage={setErrorMessage}
                            />
                        }

                    </main>
                    : <LoadingSpinner text={'Artificial Chef preparing your recipes..'} />
            }</>
    );

    ////FUNCTIONS
    function validate() {
        if (selectedFoodSuplies.length === 0) return false
        return true
    };

    function chosseFoodSuplie(suplie) {
        setSelectedFoodSuplies(prev => [...prev, suplie]);
        setFilteredFoodSuplies(prev => prev.filter(item => item.name !== suplie.name))
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

        if (!validate()) return setErrorMessage("Tarif oluşturmaya başlamadan önce malzeme seçmelisiniz !");

        try {
            setIsLoading(true);

            const headerList = {
                "Content-Type": "application/json"
            };

            const bodyContent = JSON.stringify({
                userContent: selectedFoodSuplies.map(item => item.name).join(', ')
            });

            console.log(bodyContent);

            const response = await fetch("http://192.168.3.91:3166/groqAI/", {
                method: "POST",
                body: bodyContent,
                headers: headerList
            });

            if (response.status === 200) {
                const data = await response.json();
                const recipesData = data.message;

                sessionStorage.setItem('recipes', JSON.stringify(recipesData.recipes));
                sessionStorage.setItem('isPrepered', true)
                setIsPrepered(true);

                navigate('recipes', { state: { recipesData } });
            } else if (response.status === 400) {
                setErrorMessage("Something went wrong !");
            }
        } catch (e) {
            setErrorMessage("Something went wrong !");
        } finally {
            setIsLoading(false);
        }
    }

}



export default Main
