import { useState } from "react";

export const useOptions = () => {
  const [fontSize, setFontSize] = useState(13);

  const fontSizeSetter = (increment) => {
    let size;
    if (increment) size = fontSize + 1;
    else size = fontSize - 1;
    setFontSize(size);
  };

  return { fontSize, fontSizeSetter };
};
