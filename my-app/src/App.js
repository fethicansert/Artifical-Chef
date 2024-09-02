import foodSupliesData from './data/foodSuplies'

import './css/foodsuplies.css'
import { useState } from 'react';

function App() {

  const [foodSuplies, setFoodSuplies] = useState(foodSupliesData);
  const [selectedFoodSuplies, setSelectedFoodSuplies] = useState([]);

  console.log(selectedFoodSuplies);
  const chosseFoodSuplie = (name) => {

    const newSelectedFoodSuplie = foodSuplies.filter(item => item === name).pop();

    setSelectedFoodSuplies(prev => [newSelectedFoodSuplie, ...prev]);

  };


  return (
    <div className="App">
      <h3>Yemek Malzemeleri</h3>

      {/* <input 
        type='text' 
        placeholder='Yemek Malzemesi Yazınız'>
      </input> */}

      <div className='food-supluies-list-wrapper'>
        <ul className='food-supluies-list'>
          {
            foodSuplies.map((item, index) =>
              <li
                onClick={() => { chosseFoodSuplie(item) }}
                className='food-supluies-list-item'
                key={index}>
                {item}
              </li>)
          }
        </ul>
      </div>

      <h3>Malzemeleriniz</h3>
      {
        selectedFoodSuplies.length
          ? <ul className='selected-food-supluies-list'>
            {
              selectedFoodSuplies.map((item, index) =>
                <li
                  className='selected-food-supluies-list-item'
                  key={index}>
                  {item}
                </li>)
            }
          </ul>
          : <p>Yukardaki Seçeneklerden Yemek Malzemeleri Seçerek Tarifi Başlayınız</p>
      }
    </div>
  );
}

export default App;
