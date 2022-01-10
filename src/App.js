import { Routes, Route, Link } from 'react-router-dom';
import AppStyles from "./AppStyles";
import About from './componets/About';
import Home from "./componets/Home";
import Dessets from "./views/Desserts";

function App() {
  return (
    <AppStyles>
      <div>
        <Link to="/">Home</Link>
        <Link to="desserts">Desserts</Link>
        <Link to="about">About Us</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="desserts" element={ <Dessets/> }/>
        <Route path="about" element={ <About/> }/>
      </Routes>
      
    </AppStyles>
  );
}

export default App;
