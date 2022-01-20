import Snackstyled from "./style";
import SnacksList from "../../componets/SnacksList";
import NewSnackForm from "../../componets/NewSnackForm";

function Snack(props){
    return(
        <Snackstyled>
            <SnacksList/>
            <NewSnackForm/>
        </Snackstyled>
    );
};

export default Snack;