import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import SnacksListStyle from "./style";
import {fetchSnacksList} from "../../store/actions";

function SnacksList(props){
    let {snackList} = useSelector((state) => state.snacks);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchSnacksList()) }, [])

    return(
        <SnacksListStyle>
            <div>
                {snackList.map((item) => {
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