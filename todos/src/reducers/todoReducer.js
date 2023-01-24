//Reducers are functions that take in two objects - the current state,
// and an acction object and "reduces" them to a single object, the new state, and returns that new object.

const todoReducer = ( state, action ) => {
    let newState;
    if(action.type === "TOGGLE_EDIT"){
        newstate = {...state, 
        editing: !state.editing
    }
    }
    return newState;
}