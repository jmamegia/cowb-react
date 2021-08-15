import React, { useEffect } from "react";

import Editor, { useMonaco } from "@monaco-editor/react";

export default function editor(props) {
  const { languaje } = props;
  const monaco = useMonaco();
  useEffect(() => {
    monaco?.editor.defineTheme("default", {
      base: "vs-dark",
      inherit: true,
      rules: [{}],
      colors: {
        "editor.background": "#333",
        "editor.lineHighlightBackground": "#333",
      },
    });
  }, [monaco]);

  return (
    <Editor
      wrapperClassName="editor-wrapper"
      className="editor"
      theme="default"
      language={languaje}
      placeholder={languaje}
      options={{
        automaticLayout: true,
        codeLens: true,
        formatOnPaste: true,
        formatOnType: true,
        minimap: { enabled: false },
        overviewRulerBorder: true,
        overviewRulerLanes: 0,
        fontSize: 12,
        colorDecorators: true,
        snippetSuggestions: "inline",
        width: "100%",
      }}
    />
  );
}
