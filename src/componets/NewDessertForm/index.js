import axios from "axios"
import { useState } from "react";

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
        <form onSubmit={createNewDesssert}>
            <div>
                <input onChange={handleNameChange} placeholder="Put the new name." name="name"></input>
            </div>
            <button>Send</button>
        </form>
    );
}

export default NewDessert;