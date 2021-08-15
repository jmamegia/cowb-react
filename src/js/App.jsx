import React from "react";
import { GridContextProvider } from "./context/GridContext";
import { RenderContextProvider } from "./context/RenderContext";
import "../css/App.css";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <GridContextProvider>
        <RenderContextProvider>
          <Grid></Grid>
        </RenderContextProvider>
      </GridContextProvider>
    </div>
  );
}

export default App;
