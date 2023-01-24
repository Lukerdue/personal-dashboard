import React from 'react';

function Todo(props){
    const { dispatch, todo} = props;
console.log(props)
    return(
        <div classname="todo-card">
            <p>{todo.text}</p>
        </div>)
}
export default Todo