import React from "react";

import AceEditor from "react-ace";
import { useDocument } from "./hooks/useDocument";
import { useOptions } from "./hooks/useOptions";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/ext-options";

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
  const themeLanguajes = {
    html: "monokai",
    css: "kr_theme",
    javascript: "dracula",
  };
  const { id, languaje, value } = props;
  const { fontSize, fontSizeSetter, typeHelpers, toggleTypeHelpers } =
    useOptions();
  const emmetEnabled = languaje === "html" && typeHelpers;
  return (
    <div className="code-gride">
      <AceEditor
        placeholder={languaje}
        value={value}
        mode={languaje}
        theme={themeLanguajes[languaje]}
        width="100%"
        height="100%"
        fontSize={fontSize}
        onChange={(newValue) => codeUpdated(newValue, id)}
        highlightActiveLine={false}
        enableBasicAutocompletion={typeHelpers}
        enableLiveAutocompletion={typeHelpers}
        enableSnippets={true}
        showPrintMargin={false}
        name={id}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          highlightSelectedWord: false,
          useWorker: false,
        }}
        style={{
          color: "white",
          borderRadius: "10px",
        }}
      />
      <ActionPanel
        fontSizeSetter={fontSizeSetter}
        slot={languaje}
        typeHelpers={typeHelpers}
        toggleTypeHelpers={toggleTypeHelpers}
      />
    </div>
  );
}
