import React, { useState } from 'react';
import { addTodo } from '../actions/index'

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

    return(
        <div className="formWrapper">
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoItem" placeholder={placeholders[phind]} onChange={formHandler} value={formValue}/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default TodoForm