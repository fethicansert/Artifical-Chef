import { useEffect, useState } from 'react';
import Header from './copms/header/Header';
import Main from './copms/Main';
import Recipes from './copms/Recipes';
import { Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Register from './copms/register-page/Register';
import Login from './copms/login-page/Login';
import User from './copms/user-page/User';

function App() {


  return (

    <div className="App" >

      <AuthProvider>

        <Header />

        <Routes>

          <Route path='/register' index element={<Register />}></Route>

          <Route path='/login' index element={<Login />}></Route>

          <Route path='/' index element={<Main />}></Route>

          <Route path='recipes' element={<Recipes />}></Route>

          <Route path='user/:user_id' element={<User />}></Route>

        </Routes>

      </AuthProvider>

    </div>
  );
}

export default App;
