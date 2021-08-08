import React, { useContext } from "react";
import CodeArea from "./CodeArea";
import Split from "split-grid";
import RenderArea from "./RenderArea";
import { RenderContextProvider } from "./context/RenderContext";
import GridContext from "./context/GridContext";
import "../css/grid.css";
import NavBar from "./NavBar";

const split = Split({
  columnGutters: [
    {
      track: 1,
      element: document.querySelector(".vertical-gutter-1"),
    },
    {
      track: 3,
      element: document.querySelector(".vertical-gutter-2"),
    },
  ],
  rowGutters: [
    {
      track: 1,
      element: document.querySelector(".horizontal-gutter"),
    },
  ],
});

export default function Grid() {
  const {
    htmlMaximized,
    setHtmlMaximized,
    cssMaximized,
    setCssMaximized,
    javascriptMaximized,
    setJavascriptMaximized,
    renderAreaMaximized,
    htmlFontSize,
    setHtmlFontSize,
    cssFontSize,
    setCssFontSize,
    javascriptFontSize,
    setJavascriptFontSize,
  } = useContext(GridContext);
  return (
    <RenderContextProvider>
      <NavBar />
      <div className="grid">
        <div className={`code-grid ${htmlMaximized ? "maximized" : ""}`}>
          <CodeArea
            id="htmlCode"
            className="texarea"
            maximized={htmlMaximized}
            fontSize={htmlFontSize}
            setFontSize={setHtmlFontSize}
            toggleMaximized={() => setHtmlMaximized(!htmlMaximized)}
          />
        </div>
        <div className="vertical-gutter-1"></div>
        <div className={`code-grid ${cssMaximized ? "maximized" : ""}`}>
          <CodeArea
            id="cssCode"
            className="textarea"
            languaje="css"
            maximized={cssMaximized}
            fontSize={cssFontSize}
            setFontSize={setCssFontSize}
            toggleMaximized={() => setCssMaximized(!cssMaximized)}
          />
        </div>
        <div className="vertical-gutter-2"></div>
        <div className={`code-grid ${javascriptMaximized ? "maximized" : ""}`}>
          <CodeArea
            id="jsCode"
            className="textarea"
            languaje="javascript"
            maximized={javascriptMaximized}
            fontSize={javascriptFontSize}
            setFontSize={setJavascriptFontSize}
            toggleMaximized={() => setJavascriptMaximized(!javascriptMaximized)}
          />
        </div>
        <div className="horizontal-gutter"></div>
        <div
          id="render-grid"
          className={` ${renderAreaMaximized ? "maximized" : ""}`}
        >
          <RenderArea />
        </div>
        <div>
          Icons made by
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </RenderContextProvider>
  );
}
