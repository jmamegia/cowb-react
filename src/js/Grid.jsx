import React, { useContext, useState } from "react";
import CodeArea from "./CodeArea";
//import CodeArea from "./CodeAreaMonaco";
//import Split from "split-grid";
import { decodeUrl } from "./helpers/urlDecoder";
import Split from "react-split";
import RenderArea from "./RenderArea";
import RenderContext from "./context/RenderContext";
import GridContext from "./context/GridContext";
import "../css/grid.css";
import NavBar from "./NavBar";

export default function Grid() {
  const {
    htmlFontSize,
    setHtmlFontSize,
    cssFontSize,
    setCssFontSize,
    javascriptFontSize,
    setJavascriptFontSize,
  } = useContext(GridContext);
  const { html, css, javascript } = useContext(RenderContext);
  const [cols, setCols] = useState([33, 33, 33]);
  const [rows, setRows] = useState([35, 65]);
  const [slotMaximiced, setSlotMaximiced] = useState(null);
  const resetGrid = () => {
    setCols([33, 33, 33]);
    setRows([35, 65]);
    setSlotMaximiced(null);
  };

  function toggleMaximiced(slot) {
    if (slotMaximiced) resetGrid();
    else if (slot === "renderArea") {
      setCols([0, 0, 0]);
      setRows([0, 100]);
      setSlotMaximiced(slot);
    } else {
      setCols([
        slot === "html" ? 100 : 0,
        slot === "css" ? 100 : 0,
        slot === "javascript" ? 100 : 0,
      ]);
      setRows([100, 0]);
      setSlotMaximiced(slot);
    }
  }

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
                fontSize={htmlFontSize}
                setFontSize={setHtmlFontSize}
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
                fontSize={cssFontSize}
                setFontSize={setCssFontSize}
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
                fontSize={javascriptFontSize}
                setFontSize={setJavascriptFontSize}
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
