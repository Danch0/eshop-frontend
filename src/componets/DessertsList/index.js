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
            <div className="dessert_grid">
                {dessertList.map((item) => {
                    return (
                        <div className="dessert_item" key={`desserts_${item.id}`}>
                            <div className="image">
                                <img src="https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg"></img>
                            </div>
                            <div className="info">
                                <div className="info_content">
                                    <span className="title">{item.name}</span>
                                    <hr></hr>
                                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </DessertsListStyle>
    );
}

export default DessertsList;