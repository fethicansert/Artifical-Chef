import React, { useState } from 'react'
import { useContext, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider
