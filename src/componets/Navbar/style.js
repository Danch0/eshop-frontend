import styled  from "styled-components";

const NavBarrStyled = styled.nav`
    display: flex;
    justify-content: space-around;
    height: 50px;
    background: rgb(51, 51, 51);
    //line-height: 100px;
    align-items: center;
    position: sticky;
    top: 0;
    a{
        color: white;
        text-decoration: none;
    }
    a:hover{
        color: #d93697;
    }
`;

export default NavBarrStyled;