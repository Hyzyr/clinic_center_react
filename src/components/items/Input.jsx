import React, { useEffect, useRef, useState } from "react";

export default function Input({
  type = "text",
  placeholder = " ",
  label = null,
  prefix = null,
  error = false,
  messages = null,
  svg = null,
  iconLeft = false,
  numberButtons = false,
  defaultValue = "",
  notEmpty = false,
  dark = false,
  setValue = null,
  customLabel = null,
  addClass = null,
  disabled = false,
}) {
  const [errorState, setErrorState] = useState(false);
  const [val, setVal] = useState(defaultValue);
  const input = useRef(null);

  useEffect(() => {
    if (setValue) setValue(val);
  }, [val]);

  useEffect(() => {
    setErrorState(error);
  }, [error]);

  const onFocus = () => {
    if (type === "number" && val === defaultValue) {
      input.current.select();
    }
    setErrorState(false);
  };
  const onBlur = () => {
    if (notEmpty && val === "") {
      setVal(defaultValue);
    }
  };

  const changeFunc = (event) => {
    event.preventDefault();

    let value = event.target.value;
    setVal(value);
  };
  const increment = () => {
    setVal(isNaN(parseInt(val)) ? 0 : parseInt(val) + 1);
  };
  const decrement = () => {
    setVal(isNaN(parseInt(val)) ? 0 : parseInt(val) - 1);
  };
  let className = `customInput`;

  if (prefix !== null) className += " customInput--prefix";
  if (errorState) className += " customInput--error";
  if (svg && !iconLeft) className += " customInput--icon";
  if (svg && iconLeft) className += " customInput--iconLeft";
  if (numberButtons && type === "number") className += " customInput--buttons";
  if (dark) className += " customInput--dark";
  if (addClass) className += ` ${addClass}`;

  return (
    <>
      {customLabel && <label className="customLabel">{customLabel}</label>}
      <div className={className}>
        <input
          ref={input}
          type={type}
          className=""
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={changeFunc}
          value={val}
          disabled={disabled}
        />
        {label && <label>{label}</label>}
        {prefix && <span className="prefix">{prefix}</span>}
        {errorState && messages && <MessageBox messages={messages} />}
        {svg && <span className="icon">{svg}</span>}

        {numberButtons && type === "number" && (
          <div className="customInput__buttons">
            <button onClick={increment}>
              <span className="custIcon custIcon--up"></span>
            </button>
            <button onClick={decrement}>
              <span className="custIcon custIcon--down"></span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const MessageBox = ({ messages }) => {
  const arrowPath =
    process.env.PUBLIC_URL + "/assets/images/icons/arrow_up.png";
  return (
    <div className="customInput__message">
      <div className="customInput__message-arrow">
        <img src={arrowPath} alt="" />
      </div>
      <div className="customInput__message-list">
        {messages.map((item, index) => (
          <div className="customInput__message-item" key={index}>
            {item.status === "success" && (
              <span className="custIcon custIcon--success"></span>
            )}
            {item.status === "error" && (
              <span className="custIcon custIcon--error"></span>
            )}
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );
};
