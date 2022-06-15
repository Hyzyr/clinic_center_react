import React from "react";

export default function Check(props) {
  const onChange = (e) => {
    if ("onChange" in props) {
      props.onChange(e.target.checked);
    }
  };
  let nodeProps = { ...props };
  delete nodeProps.addClass;

  return (
    <div className={`customCheck ${props.addClass ?? ""}`}>
      <input type="checkbox" {...nodeProps} onChange={onChange} />
      <label></label>
    </div>
  );
}
