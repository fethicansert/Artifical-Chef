import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const User = () => {

    const { user_id } = useParams();
    const { auth } = useAuth();

    useEffect(() => {
        const getUserData = async () => {

            try {
                const response = await fetch(`http://192.168.3.91:3166/mysql_recipe/${user_id}`);
                const data = await response.json();
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        };

        getUserData();
    }, []);



    return (
        <main>
            <h2>Saved Recipes</h2>
            asdasdas
        </main>
    )
}

export default User
