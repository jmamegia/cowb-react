import React, { useState } from "react";

const Context = React.createContext();

export const GridContextProvider = ({ children }) => {
  const [cols, setCols] = useState([33, 33, 33]);
  const [rows, setRows] = useState([35, 65]);
  const [showingControls, setSowingControls] = useState(true);
  const [slotMaximiced, setSlotMaximiced] = useState(null);
  let context = {
    cols,
    setCols,
    rows,
    setRows,
    slotMaximiced,
    setSlotMaximiced,
    showingControls,
    setSowingControls,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
export default Context;
