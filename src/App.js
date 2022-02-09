import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"
import AppStyles from "./AppStyles";
import About from "./componets/About";
import Home from "./componets/Home";
import Dessets from "./views/Desserts";
import Snack from "./views/Snacks";
import CounterForm from "./componets/CounterForm";
import NavBarr from "./componets/Navbar";
import Footer from "./componets/Footer";

function App() {
  //let [shouldFetch, setShouldFetch] = useState(true);
  // let [modalState, setModalState] = useState(false);
  // let [dropdownState, setDropdownState] = useState(false);
  return (
    <AppStyles>
      <Provider store={store}>
        <NavBarr></NavBarr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="desserts" element={ <Dessets/> }/>
          <Route path="snacks" element={ <Snack/> }/>
          <Route path="about" element={ <About/> }/>
          <Route path="counter" element={<CounterForm />} />
        </Routes>
        <Footer></Footer>
      </Provider>
    </AppStyles>
  );
}

export default App;
