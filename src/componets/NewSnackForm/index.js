import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSnack } from "../../store/actions";
import { StyledForm, StyledInput, StyledButton } from "../NewDessertForm/style";

function NewSnack(props){
    let [newName, setNewName] = useState("");
    const dispatch = useDispatch();

    function createNewSnack(event){
        event.preventDefault();
        dispatch(postSnack(newName));
    }
    
    function handleNameChange(event){
        setNewName(event.target.value);
    }

    return(
        <>
        <StyledForm onSubmit={createNewSnack}>
            <h2>Nueva botana</h2>
            <div>
                <StyledInput onChange={handleNameChange} placeholder="Put the new name." name="name"></StyledInput>
            </div>
            <StyledButton>Guardar</StyledButton>
        </StyledForm>
        </>
    );
}

export default NewSnack;