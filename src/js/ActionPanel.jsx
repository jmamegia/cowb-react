import React from "react";
import "../css/actionPanel.css";
import ActionButton from "./ActionButton";
import { useGrid } from "./hooks/useGrid";

export default function (props) {
  const { slot, fontSizeSetter } = props;
  const { toggleMaximiced, slotMaximiced } = useGrid();
  const showingControls = true;
  const maximizeStatus = slotMaximiced === slot ? "Minimize" : "Maximize";
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
          onClick={() => fontSizeSetter(true)}
        />
        <ActionButton
          type="ZoomOut"
          size="medium"
          onClick={() => fontSizeSetter(false)}
        />
      </div>
    );
  } else return "";
}
