import React from "react";
import "../css/renderArea.css";
import ActionButton from "./ActionButton";
import { useDocument } from "./hooks/useDocument";
import { useGrid } from "./hooks/useGrid";

export default function (props) {
  const { document } = useDocument();
  const { slotMaximiced, toggleMaximiced, showingControls } = useGrid();
  const type = slotMaximiced === "renderArea" ? "Minimize" : "Maximize";
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
