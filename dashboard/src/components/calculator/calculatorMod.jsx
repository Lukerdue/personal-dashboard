import React, { useState } from 'react';
import { CalculatorStyled } from '../../styles/calculatorStyled';

const emptyNumber = {number: "0", nextOperation: undefined}

function CalculatorMod(){
    const [currentNumber, setCurrentNumber] = useState(emptyNumber);
    const [numbers, setNumbers] = useState([{}]);

    //Calculation functions
    function addNumbers(e){

        if(e.target.id === "."){
            console.log(Number.isInteger(parseFloat(currentNumber.number)))
            if(Number.isInteger(parseFloat(currentNumber.number)) == true){
                setCurrentNumber({...currentNumber, number: currentNumber.number + e.target.id})
            }
        } else{
        if(currentNumber.number === "0"){
            setCurrentNumber({...currentNumber, number: e.target.id})
        } else{
        setCurrentNumber({...currentNumber, number: currentNumber.number+e.target.id});
        }}
    }

    function addOperation(e){
        setCurrentNumber({...currentNumber, nextOperation: e.target.id});
        setNumbers([...numbers, {...currentNumber}]);
        setCurrentNumber(emptyNumber);
    }
    function clear(e){
        setCurrentNumber(emptyNumber);
    }
    function allClear(e){
        setCurrentNumber(emptyNumber)
        setNumbers([{}])
    }

    function allEquals(){
        //TODO: figure out how to add all the numbers together lol

    }
    
    return (<CalculatorStyled>
        <div className="inner">
            <div className='history'>
                {/* TODO: Store history in local storage. */}
            </div>
            <div className="calculator">
                <div className="display">
                    <p>{currentNumber.number}</p>
                </div>
                <div className="buttons">
                    <div className="row">
                        <div onClick={allClear} className="number all clear" id="allClear">
                            <p id="allclear">AC</p>
                        </div>
                        <div onClick={clear} className="number clear" id="clear">
                            <p id="clear">C</p>
                        </div>
                        <div className="number backspace" id="backspace">
                            <p id="backspace">^</p>
                        </div>
                        <div className="number add" id="+">
                            <p id="+">+</p>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={addNumbers} className="number" id="7">
                            <p id="7">7</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="8">
                            <p id="8">8</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="9">
                            <p id="9">9</p>
                        </div>
                        <div onClick={addOperation} className="number subtract" id="-">
                            <p id="-">-</p>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={addNumbers} className="number" id="4">
                            <p id="4">4</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="5">
                            <p id="5">5</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="6">
                            <p id="6">6</p>
                        </div>
                        <div onClick={addOperation} className="number multiply" id="*">
                            <p id="*">x</p>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={addNumbers} className="number" id="1">
                            <p id="1">1</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="2">
                            <p id="2">2</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="3">
                            <p id="3">3</p>
                        </div>
                        <div onClick={addOperation} className="number divide" id="/">
                            <p id="/">÷</p>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={addNumbers} className="number zero" id="0">
                            <p id="0">0</p>
                        </div>
                        <div onClick={addNumbers} className="number decimal" id=".">
                            <p id=".">.</p>
                        </div>
                        <div className="number percent" id="%">
                            {/* TODO: figure out percentages function */}
                            <p id="%">%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CalculatorStyled>)
}

export default CalculatorMod