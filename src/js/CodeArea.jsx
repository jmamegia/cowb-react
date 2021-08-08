import React from "react";

import AceEditor from "react-ace";
import { useDocument } from "./hooks/useDocument";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";

import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/css";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-dracula";

import "ace-builds/src-min-noconflict/ext-language_tools";
import ActionPanel from "./ActionPanel";

export default function (props) {
  const { codeUpdated } = useDocument();
  function onChange(newValue, id) {
    codeUpdated(newValue, id);
  }
  const themeLanguajes = {
    html: "monokai",
    css: "kr_theme",
    javascript: "dracula",
  };

  const {
    id,
    languaje = "html",
    fontSize = "12px",
    autocompletion = true,
    snippets = true,
    maximized,
    toggleMaximized,
    setFontSize,
  } = props;

  const fontSizeSetter = (increment) => {
    let size;
    if (increment) size = fontSize + 1;
    else size = fontSize - 1;
    setFontSize(size);
  };

  return (
    <>
      <AceEditor
        mode={languaje}
        theme={themeLanguajes[languaje]}
        width="100%"
        height="100%"
        fontSize={fontSize}
        onChange={(newValue) => onChange(newValue, id)}
        highlightActiveLine={false}
        enableBasicAutocompletion={autocompletion}
        enableLiveAutocompletion={autocompletion}
        enableSnippets={snippets}
        showPrintMargin={false}
        name={id}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          highlightSelectedWord: false,
          useWorker: false,
        }}
        style={{
          backgroundColor: "transparent",
          color: "white",
          borderRadius: "10px",
        }}
      />
      <ActionPanel
        setFonSize={fontSizeSetter}
        maximized={maximized}
        toggleMaximized={toggleMaximized}
      />
    </>
  );
}
