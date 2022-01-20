import HomeDiv from "./style";
import { useSelector } from "react-redux";

function Home(props){
    const counterState = useSelector((store) => store.counter)
    return(
        <>
            <h3>{counterState.counter}</h3>
            <HomeDiv>Hello World!</HomeDiv>
        </>
    );
}

export default Home;