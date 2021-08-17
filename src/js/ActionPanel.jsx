import React from "react";
import "../css/actionPanel.css";
import ActionButton from "./ActionButton";
import { useOptions } from "./hooks/useOptions";
import { useGrid } from "./hooks/useGrid";

export default function (props) {
  const { slot } = props;
  const { showingControls, maximized, setFontSize } = useOptions(slot);
  const { toggleMaximiced } = useGrid();

  const maximizeStatus = maximized ? "Minimize" : "Maximize";
  if (showingControls) {
    return (
      <div className="panel">
        <ActionButton
          type={maximizeStatus}
          size="medium"
          onClick={() => toggleMaximiced(slot)}
        />
        <ActionButton
          type="ZoomIn"
          size="medium"
          onClick={() => setFontSize(true)}
        />
        <ActionButton
          type="ZoomOut"
          size="medium"
          onClick={() => setFontSize(false)}
        />
      </div>
    );
  } else return "";
}
