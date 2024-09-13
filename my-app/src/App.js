import { useState } from 'react';
import Header from './copms/Header';
import Main from './copms/Main';
import Recipes from './copms/Recipes';
import { Routes, Route } from "react-router-dom";

function App() {

  const [isPrepered, setIsPrepered] = useState(JSON.parse(sessionStorage.getItem('isPrepered')) || false);

  return (

    <div className="App">

      <Header isPrepered={isPrepered} />

      <Routes>

        <Route path='/' index element={<Main setIsPrepered={setIsPrepered} />}></Route>

        <Route path='recipes' element={<Recipes />}></Route>

      </Routes>

    </div>
  );
}

export default App;
