import React, { lazy, Suspense } from "react";

const JsIco = lazy(() => import("./icons/js-ico"));
const CssIco = lazy(() => import("./icons/css-ico"));
const HtmlIco = lazy(() => import("./icons/html-ico"));

export default function (props) {
  const { type } = props;
  const iconMap = {
    javascript: <JsIco {...props}></JsIco>,
    css: <CssIco {...props}></CssIco>,
    html: <HtmlIco {...props}></HtmlIco>,
  };
  return <Suspense fallback={null}> {iconMap[type]} </Suspense>;
}
