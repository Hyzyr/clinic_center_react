import React, { useEffect, useRef, useState } from "react";
import * as SVG from "components/items/SVG";

export default function InlineInput({
  type = "text",
  placeholder = " ",
  label = null,
  defaultValue = "",
  notEmpty = false,
}) {
  const [val, setVal] = useState(defaultValue);
  const input = useRef(null);

  const onFocus = () => {
    if (type === "number" && val === defaultValue) {
      console.log("type numer", input.current);
      input.current.select();
    }
  };
  const onBlur = () => {
    if (notEmpty && val === "") {
      setVal(defaultValue);
    }
  };
  const onIconClick = () => {
    input.current.select();
  };

  const changeFunc = (event) => {
    event.preventDefault();

    let value = event.target.value;
    setVal(value);
  };

  let className = `inlineInput`;

  return (
    <div className={className}>
      <div className="inlineInput__label">{label}</div>
      <div className="inlineInput__input">
        <input
          ref={input}
          type={type}
          className=""
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={changeFunc}
          value={val}
        />
        <span className="icon" onClick={onIconClick}>
          {SVG.pen}
        </span>
      </div>
    </div>
  );
}
