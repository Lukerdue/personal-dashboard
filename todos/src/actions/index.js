export const addTodo=(data)=>{
    return {type: "ADD_TODO", payload: data}
}
export const toggleComplete=(data)=>{
    return {type: "TOGGLE_COMPLETED", payload: data}
}
export const clearCompleted=()=>{
    return {type: "CLEAR_COMPLETED"}
}
export const toggleEdit=()=>{
    return {type: "TOGGLE_EDIT"}
}