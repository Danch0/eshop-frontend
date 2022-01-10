import axios from "axios"
import { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "../NewDessertForm/style";

function NewSnack(props){
    let [newName, setNewName] = useState("");

    function createNewSnack(event){
        event.preventDefault();
        axios({
            url: "http://localhost:3030/api/snacks/new", 
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