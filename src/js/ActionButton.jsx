import React, { lazy, Suspense } from "react";
import "../css/actionButton.css";

const CloseEye = lazy(() => import("./icons/Close-Eye"));
const OpenEye = lazy(() => import("./icons/Open-Eye"));
const ZoomIn = lazy(() => import("./icons/ZoomIn"));
const ZoomOut = lazy(() => import("./icons/ZoomOut"));
const Maximize = lazy(() => import("./icons/Maximize"));
const Minimize = lazy(() => import("./icons/Minimize"));

const sizeMap = {
  small: { with: "15px", height: "15px" },
  medium: { with: "20px", height: "20px" },
  big: { with: "35px", height: "35px" },
};

export default function (props) {
  const { type, size = "medium", color = "#dddbdb" } = props;
  const config = {
    ...props,
    width: sizeMap[size].with,
    height: sizeMap[size].height,
    fill: color,
  };
  const iconMap = {
    CloseEye: <CloseEye className="ico" {...config} />,
    OpenEye: <OpenEye className="ico" {...config} />,
    ZoomIn: <ZoomIn className="ico" {...config} />,
    ZoomOut: <ZoomOut className="ico" {...config} />,
    Maximize: <Maximize className="ico" {...config} />,
    Minimize: <Minimize className="ico" {...config} />,
  };
  return <Suspense fallback={null}>{iconMap[type]}</Suspense>;
}
