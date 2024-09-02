import './App.css';
import foodSupliesData from './data/foodSuplies'

import './css/foodsuplies.css'
import { useState } from 'react';

function App() {

  const [foodSuplies, setFoodSuplie] = useState(foodSupliesData);
  const [SelectedfoodSuplies, setSelectedFoodSuplies] = useState([]);

  const selectFoodSuplie = (name) => {

  };


  return (
    <div className="App">
      <h3>Yemek Malzemeleri</h3>

      <input 
        type='text' 
        placeholder='Yemek Malzemesi Yazınız'>
      </input>

      <div className='food-supluies-list-wrapper'>
        <ul className='food-supluies-list'>
          {
            foodSuplies.map((item, index) =>
              <li
                className='food-supluies-list-item'
                key={index}>
                {item}
              </li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
