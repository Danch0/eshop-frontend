import {useEffect, useState} from "react"
import axios from "axios"
import SnacksListStyle from "./style";

function SnacksList(props){
    let {shouldFetch, setShouldFetch} = props
    let [list, setList] = useState([]);
    useEffect(() => {
        if(shouldFetch === true){
            axios.get("http://localhost:3030/api/snacks").then(({data}) => {
                setList(data);
                console.log(data);
                setShouldFetch(false);
            });
        }
    }, [shouldFetch, setShouldFetch])

    return(
        <SnacksListStyle>
            <div>
                {list.map((item) => {
                    return (
                        <div key={`snacks_${item.id}`}>
                            <label>Name: </label>
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </SnacksListStyle>
    );
}

export default SnacksList;