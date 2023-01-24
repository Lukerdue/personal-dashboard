//Reducers are functions that take in two objects - the current state,
// and an acction object and "reduces" them to a single object, the new state, and returns that new object.
export const initialState = {
    editing: false,
    todos: [
        {text: "Walk the dog", id: 12},
        {text: "Clean off Desk", id: 13},
        {text: "Clean out fridge", id: 14}
    ]
}

export const todoReducer = ( state, action ) => {
    let newState;
    if(action.type === "TOGGLE_EDIT"){
        newState = {...state, 
        editing: !state.editing
    }
    } else if(action.type === "ADD_TODO"){
        newState = {...state,
        editing: false,
        todos: [...state.todos, {...action.payload}]
        }
    }
    return newState;
}