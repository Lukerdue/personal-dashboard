import React, { useState } from 'react';

const emptyNumber = {number: 0, nextOperation: undefined}

function CalculatorMod(){
    //Calculation functions
    const [currentNumber, setCurrentNumber] = useState(emptyNumber);
    const [numbers, setNumbers] = useState([{}]);

    function addNumbers(e){
        setCurrentNumber({...currentNumber, number: e.tarrget.name});
    }

    function addOperation(e){
        setCurrentNumber({...currentNumber, nextOperation: e.target.name});
        setNumbers([...numbers, {...currentNumber}]);
        setCurrentNumber(emptyNumber);
    }

    function allEquals(){

    }
    
    return (<div>This Will Become A Calculator</div>)
}

export default CalculatorMod