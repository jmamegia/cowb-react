import { useContext } from "react";
import optionContext from "../context/OptionsContext";

export const useOptions = (slot) => {
  const {
    htmlFontSize,
    cssFontSize,
    javascriptFontSize,
    setHtmlFontSize,
    setCssFontSize,
    setJavascriptFontSize,
    showingControls,
    setShowingControls,
  } = useContext(optionContext);

  const slotActionSelector = (action) => {
    const slotMap = {
      html: { setFontSize: setHtmlFontSize, getFontSize: htmlFontSize },
      css: { setFontSize: setCssFontSize, getFontSize: cssFontSize },
      javascript: {
        setFontSize: setJavascriptFontSize,
        getFontSize: javascriptFontSize,
      },
    };
    return slotMap[slot][action];
  };

  const setFontSize = (increment) => {
    let size;
    if (increment) size = fontSize + 1;
    else size = fontSize - 1;
    slotActionSelector("setFontSize")(size);
  };

  const toggleShowControls = () => {
    setShowingControls(!showingControls);
  };

  const fontSize = slotActionSelector("getFontSize");

  return { setFontSize, fontSize, toggleShowControls, showingControls };
};
