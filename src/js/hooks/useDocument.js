import AppContext from "../context/RenderContext";
import { useContext, useEffect } from "react";
import { encodeUrl, decodeUrl } from "../helpers/urlDecoder";

export function useDocument() {
  const { html, css, javascript, setHtml, setCss, setJavascript } =
    useContext(AppContext);
  useEffect(() => {
    const { pathname } = window.location;
    const { html, css, js } = decodeUrl(pathname);
    setCss(css);
    setHtml(html);
    setJavascript(js);
  }, []);

  const document = /*HTML*/ `
        <html lang="en">
        <head>
            <style> ${css} </style>
        </head>
        <body>
            ${html}
            <script>
                    ${javascript}
            </script>
        </body>
        </html>
  `;

  const codeUpdated = (value, slotCode) => {
    const updateMap = {
      htmlCode: () => {
        setHtml(value);
        setUrl(value, css, javascript);
      },
      cssCode: () => {
        setCss(value);
        setUrl(html, value, javascript);
      },
      jsCode: () => {
        setJavascript(value);
        setUrl(html, css, value);
      },
    };
    updateMap[slotCode]();
  };

  const setUrl = (html, css, js) => {
    const hashedCode = encodeUrl(html, css, js);
    window.history.replaceState(null, null, `/${hashedCode}`);
  };

  return { document, codeUpdated };
}
