import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import DessertsListStyle from "./style";
import {fetchDessertsList} from "../../store/actions";

function DessertsList(props){
    let {dessertList} = useSelector((state) => state.desserts);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchDessertsList()) }, [])

    return(
        <DessertsListStyle>
            <div>
                {dessertList.map((item) => {
                    return (
                        <div className="dessert_item" key={`desserts_${item.id}`}>
                            <label>Name: </label>
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </DessertsListStyle>
    );
}

export default DessertsList;