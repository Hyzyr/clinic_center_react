import React from "react";

const SwitchCheck = (props) => {
  const onChange = (e) => {
    if ("onChange" in props) {
      props.onChange(e.target.checked);
    }
  };
  return (
    <div className={`switchCheck ${props.addClass ?? ""}`}>
      <input type="checkbox" {...props} onChange={onChange} />
      <label></label>
    </div>
  );
};

export const SwitchCheckButton = (props) => {
  return (
    <div className="switchCheck__button" onClick={props.onClick}>
      <span>{props.label}</span>
      <SwitchCheck {...props} />
    </div>
  );
};
export default SwitchCheck;
