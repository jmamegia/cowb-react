import * as React from "react";

function SvgComponent(props) {
  const { fill } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <title>{"code"}</title>
      <g fill="none" fillRule="evenodd">
        <path d="M-2.449-6.59h24.91v24.955H-2.45z" />
        <path
          d="M6.58 16.984l-4.047-6.948L6.58 3.087c.404-.694.404-1.8 0-2.494-.405-.695-1.049-.695-1.453 0L.364 8.771c-.405.695-.405 1.817 0 2.512l4.764 8.196c.404.695 1.048.695 1.453 0 .404-.695.404-1.8 0-2.495zm6.85 0l4.048-6.948-4.047-6.949c-.405-.694-.405-1.8 0-2.494.404-.695 1.048-.695 1.453 0l4.763 8.178c.405.695.405 1.817 0 2.512l-4.763 8.196c-.405.695-1.049.695-1.453 0-.405-.695-.405-1.8 0-2.495z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
