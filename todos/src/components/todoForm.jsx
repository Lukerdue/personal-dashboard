import React, { useState } from 'react';

//this is to randomize the placeholder every time it renders
const placeholders = ['Do the dishes', 'learn react', 'apply for jobs', 'Workout', 'bathe the cat', 'plan Pathfinder', 'shave a peach'];

function TodoForm () {

    const [formValue, setFormValue] = useState('')
    
    // this is the actual randomization of the placeholder text from that array above.
    const [placeholder, setPlaceholder] = useState(null)
    function getPlaceholder(arr){
        return Math.random()* (arr.length - 1) + 1;
    }
    setPlaceholder(getPlaceholder(placeholders));

    //handle the form
    function formHandler(e){
        setFormValue(e.target.value);
    }
    function handleSubmit(e){
        e.prventDefault();
        setFormValue("")
        setPlaceholder(getPlaceholder(placeholders));
    }

    return(
        <div className="formWrapper">
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoItem" placeholder={placeholders[placeholder]} onChange={formHandler} value={formValue}/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default TodoForm