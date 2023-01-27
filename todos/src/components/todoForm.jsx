import React, { useState } from 'react';
import { addTodo } from '../actions/index';
import { TodoFormStyled } from '../styles/todoFormStyled';

//this is to randomize the placeholder every time it renders
const placeholders = ['Do the dishes', 'learn react', 'apply for jobs', 'Workout', 'bathe the cat', 'plan Pathfinder', 'shave a peach'];

function TodoForm (props) {
    const { dispatch } = props;
    const [formValue, setFormValue] = useState('')
    const [phind, setPhind] = useState(Math.floor(Math.random()*placeholders.length));
    //handle the form
    function formHandler(e){
        setFormValue(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTodo(formValue));
    }

    function handleBlur(e){
        e.target.classList.add('input-focus-out');
    }
    //This cleans up the blur function if you click the element again
    function handleClick(e){
        e.target.classList.remove('input-focus-out');
    }

    return(
        <TodoFormStyled>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoItem" onClick={handleClick} placeholder={placeholders[phind]} onBlur={handleBlur} onChange={formHandler} value={formValue}/>
                <button>Add</button>
            </form>
        </TodoFormStyled>
    )
}
export default TodoForm