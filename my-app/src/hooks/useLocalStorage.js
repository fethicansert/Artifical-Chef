import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [data]);


    return [data, setData]
}

export default useLocalStorage
