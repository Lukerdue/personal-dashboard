import { useState } from 'react';

export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        try{
       if( typeof window !== 'undefined'){
        if(window.localStorage.getItem(key) !== 'undefined'){
            const item = window.localStorage.getItem(key);
            return JSON.stringify(item);
        } else if(window.localStorage.getItem(key) === 'undefined') {
            window.localStorage.setItem(key, initialvalue)
            return JSON.stringify(window.localStorage.getItem(key))
        }}}catch{
            console.log(error)
        }
    })

    function setValue (value){
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if(typeof window != 'undefined'){
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        }
        catch {
            console.log(error);
        }
    }
    return [storedValue, setValue]
}