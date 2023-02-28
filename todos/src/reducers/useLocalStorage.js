import { useState } from 'react';

export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(()=>{
       if( typeof window !== 'undefined'){
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialvalue;
        } catch {
            console.log(error);
            return initialvalue;
        }
    }})

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