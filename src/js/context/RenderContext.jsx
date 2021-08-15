import React, { useState } from "react";
const Context = React.createContext();

export const RenderContextProvider = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  let context = {
    html,
    css,
    javascript,
    setHtml,
    setCss,
    setJavascript,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
export default Context;
