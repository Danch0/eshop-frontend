import axios from "axios"

export function add() {
    return { type: "ADD" }
}

export function minus() {
    return { type: "MINUS" }
}

export function reset() {
    return { type: "RESET" }
}

export function custom(value) {
    return { type: "CUSTOM", payload: value }
}

export function setDessertList(value){
    return { type: "SET_DESSERTLIST", payload: value}
}

export function fetchDessertsList() {
    return function (dispatch) {
        axios.get("http://localhost:3030/api/desserts").then(({data}) => {
            dispatch(setDessertList(data));
        });
    }
}

export const postDessert = (newName) => (dispatch) => {
    axios({
        url: "http://localhost:3030/api/desserts/new", 
        method: "POST",
        data: { name: newName}
    }).then((response) => {
        dispatch(fetchDessertsList())
    });
}

export function setSnackList(value){
    return { type: "SET_SNACKLIST", payload: value}
}

export function fetchSnacksList() {
    return function (dispatch) {
        axios.get("http://localhost:3030/api/snacks").then(({data}) => {
            dispatch(setSnackList(data));
        });
    }
}

export const postSnack = (newName) => (dispatch) => {
    axios({
        url: "http://localhost:3030/api/snacks/new", 
        method: "POST",
        data: { name: newName}
    }).then((response) => {
        dispatch(fetchSnacksList())
    });
}
