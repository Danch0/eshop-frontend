import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { add, minus, reset, custom } from "../../store/actions"

function CounterForm() {
    let [countValue, setCountValue] = useState(0);
    function handleCountOnChange(event){
        if(typeof Number(event.target.value) === "number" && !isNaN(event.target.value)){
            setCountValue(Number(event.target.value));
        }else{
            setCountValue(0);
        }
    }

    const counterStore = useSelector(store => store.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{counterStore.counter}</h1>
            <button onClick={() => dispatch(add())}>Add</button>
            <button onClick={() => dispatch(minus())}>Minus</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <div>
                <input onChange={handleCountOnChange} />
                <button onClick={() => dispatch(custom(countValue))}>Set custom</button>
            </div>
        </div>
    );    
}

export default CounterForm;
