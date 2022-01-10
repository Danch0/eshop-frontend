import axios from "axios"
import { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./style";

function NewDessert(props){
    let [newName, setNewName] = useState("");

    function createNewDesssert(event){
        event.preventDefault();
        axios({
            url: "http://localhost:3030/api/desserts/new", 
            method: "POST",
            data: { name: newName}
        }).then((response) => {
            console.log(response);
            props.setShouldFetch(true);
        });
    }
    
    function handleNameChange(event){
        //console.log(event.target.value);
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