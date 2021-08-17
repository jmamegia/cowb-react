import React, { useContext } from "react";
import "../css/navBar.css";
import ActionButton from "./ActionButton";
import optionContext from "./context/OptionsContext";

export default function () {
  const { showingControls, setShowingControls } = useContext(optionContext);
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
