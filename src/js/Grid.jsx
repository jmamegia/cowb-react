import React, { useContext, useState } from "react";
import CodeArea from "./CodeArea";
import Split from "react-split";
import RenderArea from "./RenderArea";
import RenderContext from "./context/RenderContext";
import "../css/grid.css";
import NavBar from "./NavBar";
import { useGrid } from "./hooks/useGrid";

export default function Grid() {
  const { html, css, javascript } = useContext(RenderContext);
  const { slotMaximiced, cols, rows } = useGrid();

  const GutterSize = slotMaximiced ? 0 : 3;

  return (
    <div className="grid">
      <NavBar />

      <Split
        style={{
          display: "flex",
          height: "85vh",
          flexFlow: "column",
        }}
        sizes={rows}
        minSize={(0, 0)}
        gutterSize={GutterSize}
        direction="vertical"
        gutterAlign="center"
      >
        <div>
          <Split
            style={{ display: "flex", height: "100%" }}
            sizes={cols}
            minSize={[0, 0, 0]}
            gutterSize={GutterSize}
            direction="horizontal"
            gutterAlign="center"
          >
            <div
              className={`code-grid ${
                slotMaximiced !== null && slotMaximiced !== "html"
                  ? "hiden"
                  : ""
              }`}
            >
              <CodeArea
                id="htmlCode"
                className="texarea"
                languaje="html"
                value={html}
                maximized={slotMaximiced === "html" ? true : false}
                toggleMaximized={() => toggleMaximiced("html")}
              />
            </div>

            <div
              className={`code-grid ${
                slotMaximiced !== null && slotMaximiced !== "css" ? "hiden" : ""
              }`}
            >
              <CodeArea
                id="cssCode"
                className="textarea"
                languaje="css"
                value={css}
                maximized={slotMaximiced === "css" ? true : false}
                toggleMaximized={() => toggleMaximiced("css")}
              />
            </div>
            <div
              className={`code-grid ${
                slotMaximiced !== null && slotMaximiced !== "javascript"
                  ? "hiden"
                  : ""
              }`}
            >
              <CodeArea
                id="jsCode"
                className="textarea"
                languaje="javascript"
                value={javascript}
                maximized={slotMaximiced === "javascript" ? true : false}
                toggleMaximized={() => toggleMaximiced("javascript")}
              />
            </div>
          </Split>
        </div>
        <div>
          <div
            id="render-grid"
            className={` ${
              slotMaximiced !== null && slotMaximiced !== "renderArea"
                ? "hiden"
                : ""
            }`}
          >
            <RenderArea
              toggleMaximized={() => toggleMaximiced("renderArea")}
              maximized={slotMaximiced === "renderArea" ? true : false}
            />
          </div>
        </div>
      </Split>
      <div>
        Icons made by
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
