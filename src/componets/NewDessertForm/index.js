import { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./style";
import { useDispatch } from "react-redux";
import { postDessert } from "../../store/actions";

function NewDessert(props){
    let [newName, setNewName] = useState("");
    const dispatch = useDispatch();

    function createNewDesssert(event){
        event.preventDefault();
        dispatch(postDessert(newName))
    }
    
    function handleNameChange(event){
        setNewName(event.target.value);
    }

    return(
        <>
        <StyledForm onSubmit={createNewDesssert}>
            <h2>Nuevo Postre</h2>
            <div>
                <StyledInput onChange={handleNameChange} placeholder="Put the new name." name="name"></StyledInput>
            </div>
            <StyledButton>Guardar</StyledButton>
        </StyledForm>
        </>
    );
}

export default NewDessert;