import { useState } from 'react';
import Header from './copms/Header';
import Main from './copms/Main';
import Recipes from './copms/Recipes';
import { Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Register from './copms/register-page/Register';

function App() {

  const [isPrepered, setIsPrepered] = useState(JSON.parse(sessionStorage.getItem('isPrepered')) || false);

  return (

    <div className="App">

      <AuthProvider>

        <Header isPrepered={isPrepered} />

        <Routes>

          <Route path='/register' index element={<Register />}></Route>

          <Route path='/' index element={<Main setIsPrepered={setIsPrepered} />}></Route>

          <Route path='recipes' element={<Recipes />}></Route>

        </Routes>

      </AuthProvider>

    </div>
  );
}

export default App;
