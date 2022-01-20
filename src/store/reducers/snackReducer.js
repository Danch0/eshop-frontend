const initialState = {
    snackList: []
};

function reducer(snackState = initialState, action){
    switch(action.type){
        case "SET_SNACKLIST":
            return {
                ...snackState,
                snackList: action.payload
            };
        default:
            return snackState;
    };
};

export default reducer;