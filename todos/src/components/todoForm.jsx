import React, { useState } from 'react';
import { addTodo } from '../actions/index';
import { TodoFormStyled } from '../styles/todoFormStyled';

//this is to randomize the placeholder every time it renders
const placeholders = ['Do the dishes', 'learn react', 'apply for jobs', 'Workout', 'bathe the cat', 'plan Pathfinder', 'shave a peach'];

function TodoForm (props) {
    const { dispatch } = props;
    const [formValue, setFormValue] = useState('')
    const [phind, setPhind] = useState(Math.floor(Math.random()*placeholders.length));//just to render a random placeholder when the form renders
    const [animate, setAnimate] = useState("") //this state is literally just so the css animation will run multiple times
    
    //handle the form
    function formHandler(e){
        setFormValue(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTodo(formValue));
    }
    //handle animation state change
    function handleAnimateFocus(e){
        setAnimate("true");
    }
    function handleAnimateBlur(e){
        setAnimate("false");
    }

    return(
        <TodoFormStyled>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoItem" onClick={handleAnimateFocus} placeholder={placeholders[phind]} onBlur={handleAnimateBlur} onChange={formHandler} value={formValue}/>
                <button>Add</button>
            </form>
        </TodoFormStyled>
    )
}
export default TodoForm