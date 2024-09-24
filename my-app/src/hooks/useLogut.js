import React from 'react'
import useAuth from './useAuth';

const useLogut = () => {
    const { setAuth } = useAuth();
    const logout = async () => {

        const response = await fetch('http://192.168.3.91:3166/mysql_logout/', { method: "POST", credentials: "include" });
        console.log(await response.data);

        sessionStorage.removeItem('isPrepered');
        sessionStorage.removeItem('recipes');
        sessionStorage.removeItem('selectedFoodSuplies');
        setAuth({});

    };

    return logout;
}

export default useLogut
