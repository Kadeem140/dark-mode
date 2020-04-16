import React from 'react'


export function useLocalStorage(key, initalValue) { //key must be set to a string, initalValue can be anything
    const [storedValue, setStoredValue] =useState(() => {
        const item = window.localStorage.getItem(key); //we are looking to see if have something in local
                                                        //storage by  key and get it.
        return item ? JSON.parse(item) : initalValue; // if we have key stored in local storage return it and parse it,
                                                      // if not return initalValue
             });   
         const setValue = (value) => {
             setStoredValue(value); //
             window.localStorage.setItem(key, JSON.stringify(value)); //Save to local storage
         }                                         
        return [storedValue, setValue];
}


// // To retrieve an item from localStorage, call localStorage.getItem('itemName')
// // If that item doesn't exist, it will return undefined
// const [storedValue, setStoredValue] = useState(() => {
//     // Get from local storage by key
//     const item = window.localStorage.getItem(key);
//     // Parse and return stored json or, if undefined, return initialValue
//     return item ? JSON.parse(item) : initialValue;
//   });