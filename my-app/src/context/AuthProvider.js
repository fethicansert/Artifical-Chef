import React, { useState } from 'react'
import { useContext, createContext } from 'react';

export const AuthContext = createContext({})
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider
