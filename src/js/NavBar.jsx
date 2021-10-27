import React, { useState, useRef } from "react";
import "../css/navBar.css";
import ActionButton from "./ActionButton";
import dropDownIcon from "../images/dobleArrow.svg";
import { useGrid } from "./hooks/useGrid";

export default function () {
  const { showingControls, toggleShowControls } = useGrid();
  const [shortedUrl, setShortedUrl] = useState("");
  const type = !showingControls ? "OpenEye" : "CloseEye";
  const [dropIconsVisibility, SetDropIconsVisibility] = useState(false);
  const inputRef = useRef();
  const visible = dropIconsVisibility ? "iconsVisible" : "iconsHide";
  const CopyLinkHandler = () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNode(inputRef.current);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand("copy");
    } catch {}
    selection.removeAllRanges();
  };

  const GetShortUrl = async () => {
    const url = window.location.href;
    fetch("https://shortururl.kasita.es/api/SortUrl", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => setShortedUrl(`${data.shortUrl}`));
  };

  return (
    <nav
      className="nav"
      onMouseOver={() => {
        SetDropIconsVisibility(true);
        GetShortUrl();
      }}
      onMouseOut={() => SetDropIconsVisibility(false)}
    >
      <ul>
        <li>
          <span
            className={`dropIcons ${
              dropIconsVisibility ? "dropIconsHide" : "dropIconsVisible"
            }`}
          >
            <img src={dropDownIcon} alt="" />
            <img src={dropDownIcon} alt="" />
            <img src={dropDownIcon} alt="" />
          </span>
          <div className={`${visible}`}>
            <ActionButton
              type={type}
              color="black"
              size="big"
              title={showingControls ? "Hide controls" : "Show controls"}
              onClick={toggleShowControls}
            />
          </div>
        </li>
        <li>
          <div className={`${visible} shortUrl`}>
            <ActionButton
              type="CopyLink"
              color="black"
              size="big"
              title={"Copy Short Link"}
              onClick={CopyLinkHandler}
            />
            <input
              disabled
              ref={inputRef}
              type="text"
              value={shortedUrl}
              placeholder="Short URL to your project"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}
