import React from "react";
import "../css/navBar.css";
import ActionButton from "./ActionButton";
import { useGrid } from "./hooks/useGrid";

export default function () {
  const { showingControls, toggleShowControls } = useGrid();
  const type = showingControls ? "OpenEye" : "CloseEye";
  return (
    <nav className="nav">
      <ul>
        <li>
          <ActionButton type={type} size="big" onClick={toggleShowControls} />
        </li>
      </ul>
    </nav>
  );
}
