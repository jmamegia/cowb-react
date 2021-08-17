import React, { useState } from "react";

const Context = React.createContext();

export const OptionContextProvider = ({ children }) => {
  const [htmlFontSize, setHtmlFontSize] = useState(13);
  const [cssFontSize, setCssFontSize] = useState(13);
  const [javascriptFontSize, setJavascriptFontSize] = useState(13);
  const [showingControls, setShowingControls] = useState(true);

  let context = {
    htmlFontSize,
    cssFontSize,
    javascriptFontSize,
    setHtmlFontSize,
    setCssFontSize,
    setJavascriptFontSize,
    showingControls,
    setShowingControls,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
export default Context;
