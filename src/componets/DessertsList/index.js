import {useEffect, useState} from "react" 

function DessertsList(){
    let [list, setList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3030/api/desserts").then(response => response.json()).then((data) => {
            setList(data);
            console.log(data);
        });
    }, [])

    return(
        <>
            <h1>Hola</h1>
            <div>
                {list.map((item) => {
                    return (
                        <div>
                            <label>Name: </label>
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default DessertsList;