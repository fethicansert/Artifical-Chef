import { useState } from 'react';
import Header from './copms/header/Header';
import Main from './copms/Main';
import Recipes from './copms/Recipes';
import { Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Register from './copms/register-page/Register';
import Login from './copms/login-page/Login';
function App() {

  const [isPrepered, setIsPrepered] = useState(JSON.parse(sessionStorage.getItem('isPrepered')) || false);

  return (

    <div className="App">

      <AuthProvider>

        <Header isPrepered={isPrepered} />

        <Routes>

          <Route path='/register' index element={<Register />}></Route>

          <Route path='/login' index element={<Login />}></Route>

          <Route path='/' index element={<Main setIsPrepered={setIsPrepered} />}></Route>

          <Route path='recipes' element={<Recipes />}></Route>

        </Routes>

      </AuthProvider>

    </div>
  );
}

export default App;
