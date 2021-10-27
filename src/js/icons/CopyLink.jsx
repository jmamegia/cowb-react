import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <title>{props.title}</title>
      <path
        style={{
          textIndent: 0,
          textAlign: "start",
          lineHeight: "normal",
          textTransform: "none",
          blockProgression: "tb",
          InkscapeFontSpecification: "Bitstream Vera Sans",
        }}
        d="M4 2c-1.1 0-2 .9-2 2v14h2V4h13V2H4zm4 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H8zm0 2h12v12H8V8zm7.906.969c-.8 0-1.612.331-2.219.937l-1.406 1.375a3.084 3.084 0 00-.687 1.031c-.325.153-.645.333-.906.594l-.126.125-.656.656a3.123 3.123 0 000 4.407 3.123 3.123 0 004.406 0l1.157-1.157.25-.218c.303-.303.536-.653.687-1.032.326-.145.64-.326.907-.593l.562-.563.219-.219a3.123 3.123 0 000-4.406c-.606-.606-1.387-.937-2.188-.937zm-.031 2.062c.302 0 .619.088.813.281.387.388.387 1.207 0 1.594l-.313.313a3.097 3.097 0 00-.656-.938L14.28 13.72c.388.387.388 1.175 0 1.562l-1.375 1.406c-.387.388-1.206.388-1.594 0l-.03-.03c-.36-.398-.348-1.185.03-1.563l.313-.313c.15.344.378.66.656.938l1.438-1.438c-.388-.387-.388-1.175 0-1.562l1.375-1.406c.194-.194.48-.282.781-.282z"
        overflow="visible"
        fontFamily="Bitstream Vera Sans"
      />
    </svg>
  );
}

export default SvgComponent;
