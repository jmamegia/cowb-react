import React, { useContext } from "react";
import "../css/navBar.css";
import ActionButton from "./ActionButton";
import GridContext from "./context/GridContext";

export default function () {
  const { showingControls, setShowingControls } = useContext(GridContext);
  const type = showingControls ? "OpenEye" : "CloseEye";
  return (
    <ul>
      <li>
        <ActionButton
          type={type}
          size="big"
          onClick={() => setShowingControls(!showingControls)}
        />
      </li>
    </ul>
  );
}
