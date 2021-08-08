import React, { useContext } from "react";
import "../css/actionPanel.css";
import ActionButton from "./ActionButton";
import GridContext from "./context/GridContext";

export default function (props) {
  const { maximized, toggleMaximized, setFonSize } = props;
  const maximizeStatus = maximized ? "Minimize" : "Maximize";
  const { showingControls } = useContext(GridContext);
  if (showingControls) {
    return (
      <div className="panel">
        <ActionButton
          type={maximizeStatus}
          size="medium"
          onClick={toggleMaximized}
        />
        <ActionButton
          type="ZoomIn"
          size="medium"
          onClick={() => setFonSize(true)}
        />
        <ActionButton
          type="ZoomOut"
          size="medium"
          onClick={() => setFonSize(false)}
        />
      </div>
    );
  } else return "";
}
