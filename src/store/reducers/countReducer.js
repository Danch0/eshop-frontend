const initialState = {
    counter: 0
}

function reducer(currentState = initialState, action) {
    switch(action.type) {
        case "ADD":
            return {
                ...currentState,
                counter: currentState.counter + 1
            }
        case "MINUS":
            return {
                ...currentState,
                counter: currentState.counter - 1
            }
        case "RESET":
            return {
                ...currentState,
                counter: 0
            }
        case "CUSTOM":
            return {
                ...currentState,
                counter: action.payload
            }
        default:
            return currentState
    }
}

export default reducer