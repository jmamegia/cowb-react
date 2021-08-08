import React, { useState } from "react";

const Context = React.createContext();

export const GridContextProvider = ({ children }) => {
  const [htmlMaximized, setHtmlMaximized] = useState(false);
  const [cssMaximized, setCssMaximized] = useState(false);
  const [javascriptMaximized, setJavascriptMaximized] = useState(false);
  const [renderAreaMaximized, setRenderAreaMaximized] = useState(false);
  const [htmlFontSize, setHtmlFontSize] = useState(12);
  const [cssFontSize, setCssFontSize] = useState(12);
  const [javascriptFontSize, setJavascriptFontSize] = useState(12);
  const [showingControls, setShowingControls] = useState(true);
  let context = {
    htmlMaximized,
    htmlFontSize,
    cssFontSize,
    javascriptFontSize,
    cssMaximized,
    javascriptMaximized,
    setHtmlMaximized,
    setHtmlFontSize,
    setCssMaximized,
    setCssFontSize,
    setJavascriptMaximized,
    renderAreaMaximized,
    setJavascriptFontSize,
    setRenderAreaMaximized,
    showingControls,
    setShowingControls,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
export default Context;
