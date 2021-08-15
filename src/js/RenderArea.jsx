import React, { useContext } from "react";
import "../css/renderArea.css";
import ActionButton from "./ActionButton";
import { useDocument } from "./hooks/useDocument";
import GridContext from "./context/GridContext";

export default function (props) {
  const { showingControls } = useContext(GridContext);
  const { document } = useDocument();
  const { maximized, toggleMaximized } = props;
  const type = maximized ? "Minimize" : "Maximize";
  return (
    <div id="webPrev">
      <iframe name="webPrev" srcDoc={document}></iframe>
      {showingControls && (
        <ActionButton
          type={type}
          onClick={toggleMaximized}
          className="ico ico-float"
          size="medium"
          color="grey"
        />
      )}
    </div>
  );
}
