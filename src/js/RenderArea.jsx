import React, { useContext } from "react";
import "../css/renderArea.css";
import ActionButton from "./ActionButton";
import { useDocument } from "./hooks/useDocument";
import GridContext from "./context/GridContext";

export default function () {
  const { renderAreaMaximized, setRenderAreaMaximized, showingControls } =
    useContext(GridContext);
  const { document } = useDocument();
  const type = renderAreaMaximized ? "Minimize" : "Maximize";
  return (
    <div id="webPrev">
      <iframe
        name="webPrev"
        srcDoc={document}
        className={` ${renderAreaMaximized ? "maximized" : ""}`}
      ></iframe>
      {showingControls && (
        <ActionButton
          type={type}
          onClick={() => setRenderAreaMaximized(!renderAreaMaximized)}
          className="ico ico-float"
          className={`ico ico-float ${renderAreaMaximized ? "max" : ""}`}
          size="medium"
          color="grey"
        />
      )}
    </div>
  );
}
