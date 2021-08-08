import AppContext from "../context/RenderContext";
import { useContext } from "react";

export function useDocument() {
  const { html, css, javascript, setHtml, setCss, setJavascript } =
    useContext(AppContext);
  const document = /*HTML*/ `
        <html lang="en">
        <head>
            <style> ${css} </style>
        </head>
        <body>
            ${html}
            <script>
                try{
                    ${javascript}
                }catch(e){/*console.error(e)*/}
            </script>
        </body>
        </html>
  `;

  const codeUpdated = (value, slotCode) => {
    const updateMap = {
      htmlCode: () => setHtml(value),
      cssCode: () => setCss(value),
      jsCode: () => setJavascript(value),
    };
    updateMap[slotCode]();
  };

  return { document, codeUpdated };
}
