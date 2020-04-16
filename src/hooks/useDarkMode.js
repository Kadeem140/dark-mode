import React from 'react';
import {useEffect} from 'react';
import {useLocalStorage} from "./useLocalStorage"


export function useDarkMode(keyValue){
    const [value, setValue] = useLocalStorage(keyValue);

    //Any direct DOM manipulation is considered a side effect
    useEffect(() => {
        value ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
        console.log(value)
        console.log(keyValue)

    }, [value]);

    const changeValue = newValue => {
        setValue(newValue)
    }; 

    return [value, changeValue];

}