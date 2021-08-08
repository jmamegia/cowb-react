import React, { useState } from "react";
import { GridContextProvider } from "./context/GridContext";
import "../css/App.css";
import Grid from "./Grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GridContextProvider>
        <Grid></Grid>
      </GridContextProvider>
    </div>
  );
}

export default App;
