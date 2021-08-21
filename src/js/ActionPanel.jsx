import React from "react";
import "../css/actionPanel.css";
import ActionButton from "./ActionButton";
import { useGrid } from "./hooks/useGrid";

export default function (props) {
  const { slot, fontSizeSetter, typeHelpers, toggleTypeHelpers } = props;
  const { toggleMaximiced, slotMaximiced } = useGrid();
  const showingControls = true;
  const maximizeStatusIcon = slotMaximiced === slot ? "Minimize" : "Maximize";
  const typeHelpersIcon = typeHelpers
    ? "AutocompletionOn"
    : "AutocompletionOff";

  if (showingControls) {
    return (
      <div className="panel">
        <ActionButton
          type={maximizeStatusIcon}
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
        <ActionButton
          type={typeHelpersIcon}
          size="medium"
          onClick={toggleTypeHelpers}
        />
      </div>
    );
  } else return "";
}
