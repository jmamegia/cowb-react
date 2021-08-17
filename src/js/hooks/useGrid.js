import { useContext } from "react";
import gridContext from "../context/GridContext";

export function useGrid() {
  const { cols, setCols, rows, setRows, slotMaximiced, setSlotMaximiced } =
    useContext(gridContext);

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

  return { cols, rows, slotMaximiced, toggleMaximiced };
}
