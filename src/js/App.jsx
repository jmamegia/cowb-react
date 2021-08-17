import React from "react";
import { OptionContextProvider } from "./context/OptionsContext";
import { RenderContextProvider } from "./context/RenderContext";
import "../css/App.css";
import Grid from "./Grid";
import { GridContextProvider } from "./context/GridContext";

function App() {
  return (
    <div className="App">
      <OptionContextProvider>
        <RenderContextProvider>
          <GridContextProvider>
            <Grid></Grid>
          </GridContextProvider>
        </RenderContextProvider>
      </OptionContextProvider>
    </div>
  );
}

export default App;
