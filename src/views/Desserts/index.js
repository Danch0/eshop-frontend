import DessertStyled from "./style";
import DessertsList from "../../componets/DessertsList";
import NewDessertForm from "../../componets/NewDessertForm";
import SideBar from "../../componets/SideBar";

function Dessets(props){
    return(
        <DessertStyled>
            <DessertsList/>
            <NewDessertForm/>
            <SideBar></SideBar>
        </DessertStyled>
    );
};

export default Dessets;