import React from 'react';

function Todo(props){
    const { dispatch, todo} = props;
    return(
        <div className="todo-card">
            <p>{todo.text}</p>
        </div>)
}
export default Todo