import {Link} from "react-router-dom";
import NavBarrStyled from "./style";
function NavBarr(){
    return(
        <NavBarrStyled>
            <Link to="/">Home</Link>
            <Link to="desserts">Desserts</Link>
            <Link to="snacks">Snacks</Link>
            <Link to="about">About Us</Link>
            <Link to="order">Pedido</Link>
            <Link to="counter">Counter example</Link>
        </NavBarrStyled>
    );
}

export default NavBarr;