import React from "react";

import { RenderContextProvider } from "./context/RenderContext";
import "../css/App.css";
import Grid from "./Grid";
import { GridContextProvider } from "./context/GridContext";

function App() {
  return (
    <div className="App">
      <RenderContextProvider>
        <GridContextProvider>
          <Grid></Grid>
        </GridContextProvider>
      </RenderContextProvider>
    </div>
  );
}

export default App;
