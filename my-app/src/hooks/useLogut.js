import React from 'react'
import useAuth from './useAuth';

const useLogut = () => {
    const { setAuth } = useAuth();
    const logout = () => {

        setAuth({});
    };

    return logout;
}

export default useLogut
