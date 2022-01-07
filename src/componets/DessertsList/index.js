import {useEffect, useState} from "react"
import axios from "axios"
import DessertsListStyle from "./style";

function DessertsList(props){
    let {shouldFetch, setShouldFetch} = props
    let [list, setList] = useState([]);
    useEffect(() => {
        if(shouldFetch == true){
            axios.get("http://localhost:3030/api/desserts").then(({data}) => {
                setList(data);
                console.log(data);
                setShouldFetch(false);
            });
        }
    }, [shouldFetch])

    return(
        <DessertsListStyle>
            <h1>Hola</h1>
            <div>
                {list.map((item) => {
                    return (
                        <div key={`desserts_${item.id}`}>
                            <label>Name: </label>
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </DessertsListStyle>
    );
}

export default DessertsList;