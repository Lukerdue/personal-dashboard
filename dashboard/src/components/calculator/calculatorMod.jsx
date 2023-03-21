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
        //TODO: figure out how to add all the numbers together lol
    }
    
    return (<div>
        <div className="inner">
            <div className='history'>
                {/* TODO: Store history in local storage. */}
            </div>
            <div className="calculator">
                <div className="display">
                    {/* TODO: how to display current number */}
                </div>
                <div className="buttons">
                    <div className="row">
                        <div className="number all clear">
                            <p>AC</p>
                        </div>
                        <div className="number clear">
                            <p>C</p>
                        </div>
                        <div className="backspace">
                            <p>^</p>
                        </div>
                        <div className="number add">
                            <p>+</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="number">
                            <p>7</p>
                        </div>
                        <div className="number">
                            <p>8</p>
                        </div>
                        <div className="number">
                            <p>9</p>
                        </div>
                        <div className="number subtract">
                            <p>-</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="number">
                            <p>4</p>
                        </div>
                        <div className="number">
                            <p>5</p>
                        </div>
                        <div className="number">
                            <p>6</p>
                        </div>
                        <div className="number multiply">
                            <p>x</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="number">
                            <p>1</p>
                        </div>
                        <div className="number">
                            <p>2</p>
                        </div>
                        <div className="number">
                            <p>3</p>
                        </div>
                        <div className="number divide">
                            <p>÷</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="number zero">
                            <p>0</p>
                        </div>
                        <div className="number decimal">
                            <p>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CalculatorMod