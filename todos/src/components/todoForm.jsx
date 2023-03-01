import React, { useState } from 'react';
import { TodoFormStyled } from '../styles/todoFormStyled';

//this is to randomize the placeholder every time it renders
const placeholders = ['Do the dishes', 'Update my Resume', 'Workout', 'Bathe the Cat', 'Text a Friend', 'Shave a Peach', 'Vacuum the Ceiling', 'Make Dinner', 'Facetime Mom', 'Make that Appointment', 'Eat Healthy', 'Drink water', 'Wash the comfort water bottle'];

function TodoForm (props) {
    const { handleAddTodo } = props;
    const [formValue, setFormValue] = useState('')
    const [phind, setPhind] = useState(Math.floor(Math.random()*placeholders.length));//just to render a random placeholder when the form renders
    const [animate, setAnimate] = useState("") //this state is literally just so the css animation will run multiple times
    
    //handle the form
    function formHandler(e){
        setFormValue(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            text: formValue,
            completed: false,
            id: Date.now()
        }
        handleAddTodo(newTodo);
    }
    //handle animation state change
    function handleAnimateFocus(e){
        setAnimate("true");
        e.target.classList.add('target')
    }
    function handleAnimateBlur(e){
        setAnimate("false");
        e.target.classList.remove('target')
        //I need to change the state of the input for the animation to trigger
        
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