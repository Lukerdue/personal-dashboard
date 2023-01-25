//Reducers are functions that take in two objects - the current state,
// and an acction object and "reduces" them to a single object, the new state, and returns that new object.
export const initialState = {
    editing: false,
    todos: [
        {text: "Walk the dog", id: 12, completed: false},
        {text: "Clean off Desk", id: 13, completed: false},
        {text: "Clean out fridge", id: 14, completed: false}
    ]
}

export const todoReducer = ( state, action ) => {
    switch(action.type){
        case "TOGGLE_EDIT":
            return { ...state,
                editing: !state.editing
            };
        case "ADD_TODO":
            return {...state,
            editing: false,
            todos: [...state.todos, 
                    {text: action.payload, 
                    id: Date.now(),
                    completed: false
                    }
                ]
            };
        case "CLEAR_COMPLETED":
            return {...state,
                todos: state.todos.filter(todo =>{return todo.completed === false})
            };
        case "TOGGLE_COMPLETED":
            return {...state,
            todos: state.todos.map(todo=>{
                if(todo.id === action.payload){
                    return{...todo, completed: !todo.completed}
                } else { return todo }
            })};
        default:
        return state;
    }
}