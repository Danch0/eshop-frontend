import DessertStyled from "./style";
import DessertsList from "../../componets/DessertsList";
import NewDessertForm from "../../componets/NewDessertForm";

function Dessets(props){
    return(
        <DessertStyled>
            <DessertsList/>
            <NewDessertForm/>
        </DessertStyled>
    );
};

export default Dessets;