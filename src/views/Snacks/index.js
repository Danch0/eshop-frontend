import { useState } from "react";
import Snackstyled from "./style";
import SnacksList from "../../componets/SnacksList";
import NewSnackForm from "../../componets/NewSnackForm";

function Snack(props){
    let[shouldFetch, setShouldFetch] = useState(true);
    return(
        <Snackstyled>
            <SnacksList shouldFetch={shouldFetch} setShouldFetch={setShouldFetch} />
            <NewSnackForm setShouldFetch={setShouldFetch} />
        </Snackstyled>
    );
};

export default Snack;