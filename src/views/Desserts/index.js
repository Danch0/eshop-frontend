import { useState } from "react";
import DessertStyled from "./style";
import DessertsList from "../../componets/DessertsList";
import NewDessertForm from "../../componets/NewDessertForm";

function Dessets(props){
    let[shouldFetch, setShouldFetch] = useState(true);
    return(
        <DessertStyled>
            <DessertsList shouldFetch={shouldFetch} setShouldFetch={setShouldFetch} />
            <NewDessertForm setShouldFetch={setShouldFetch} />
        </DessertStyled>
    );
};

export default Dessets;