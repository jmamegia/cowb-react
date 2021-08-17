import React, { useContext } from "react";
import "../css/renderArea.css";
import ActionButton from "./ActionButton";
import { useDocument } from "./hooks/useDocument";
import optionContext from "./context/OptionsContext";
import { useGrid } from "./hooks/useGrid";

export default function (props) {
  const { showingControls } = useContext(optionContext);
  const { document } = useDocument();
  const { maximized, toggleMaximiced } = useGrid();
  const type = maximized ? "Minimize" : "Maximize";
  return (
    <div id="webPrev">
      <iframe name="webPrev" srcDoc={document}></iframe>
      {showingControls && (
        <ActionButton
          type={type}
          onClick={() => toggleMaximiced("renderArea")}
          className="ico ico-float"
          size="medium"
          color="grey"
        />
      )}
    </div>
  );
}
