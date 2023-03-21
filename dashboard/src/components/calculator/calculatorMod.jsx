import React, { useState } from 'react';
import { CalculatorStyled } from '../../styles/calculatorStyled';

const emptyNumber = {number: "0", nextOperation: undefined}

function CalculatorMod(){
    const [currentNumber, setCurrentNumber] = useState(emptyNumber);
    const [numbers, setNumbers] = useState([{}]);

    //Calculation functions
    function addNumbers(e){

        //TODO: check decimals before adding periods
        if(currentNumber.number === "0"){
            setCurrentNumber({...currentNumber, number: e.target.id})
        } else{
        setCurrentNumber({...currentNumber, number: currentNumber.number+e.target.id});
        }
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
                        <div onClick={allClear} className="number all clear" name="allClear">
                            <p>AC</p>
                        </div>
                        <div onClick={clear} className="number clear" name="clear">
                            <p>C</p>
                        </div>
                        <div className="number backspace" name="backspace">
                            <p>^</p>
                        </div>
                        <div className="number add" name="+">
                            <p>+</p>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={addNumbers} className="number" id="7">
                            <p>7</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="8">
                            <p>8</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="9">
                            <p>9</p>
                        </div>
                        <div onClick={addOperation} className="number subtract" name="-">
                            <p>-</p>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={addNumbers} className="number" id="4">
                            <p>4</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="5">
                            <p>5</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="6">
                            <p>6</p>
                        </div>
                        <div onClick={addOperation} className="number multiply" name="*">
                            <p>x</p>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={addNumbers} className="number" id="1">
                            <p>1</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="2">
                            <p>2</p>
                        </div>
                        <div onClick={addNumbers} className="number" id="3">
                            <p>3</p>
                        </div>
                        <div onClick={addOperation} className="number divide" name="/">
                            <p>÷</p>
                        </div>
                    </div>
                    <div className="row">
                        <div onClick={addNumbers} className="number zero" name="0">
                            <p>0</p>
                        </div>
                        <div onClick={addNumbers} className="number decimal" name=".">
                            <p>.</p>
                        </div>
                        <div className="number percent" name="%">
                            {/* TODO: figure out percentages function */}
                            <p>%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CalculatorStyled>)
}

export default CalculatorMod