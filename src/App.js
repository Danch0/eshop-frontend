import { useState } from "react";
import DessertsList from "./componets/DessertsList"
import NewDessertForm from "./componets/NewDessertForm";
import AppStyles from "./AppStyles";

function App() {
  let[shouldFetch, setShouldFetch] = useState(true);
  return (
    <AppStyles>
      <DessertsList shouldFetch={shouldFetch} setShouldFetch={setShouldFetch}/>
      <NewDessertForm setShouldFetch={setShouldFetch}/>
    </AppStyles>
  );
}

export default App;
