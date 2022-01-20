const initialState = {
    dessertList: []
}

function reducer(dessertState = initialState, action){
    switch(action.type){
        case "SET_DESSERTLIST":
            return {
                ...dessertState,
                dessertList: action.payload
            }
        default:
            return dessertState;
    }
}

export default reducer;