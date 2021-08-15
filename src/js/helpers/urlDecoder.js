import { encode, decode } from "js-base64";

export const encodeUrl = (html, css, js) => {
  const encoded = `${encode(html)}|${encode(css)}|${encode(js)}`;
  return encoded;
};
export const decodeUrl = (pathname) => {
  const result = {};
  const [rawHtml, rawCss, rawJs] = pathname.slice(1).split("%7C");
  result.html = rawHtml ? decode(rawHtml) : "";
  result.css = rawCss ? decode(rawCss) : "";
  result.js = rawJs ? decode(rawJs) : "";
  return result;
};
