import React from "react";

export default function Check(props) {
  const onChange = (e) => {
    if ("onChange" in props) {
      props.onChange(e.target.checked);
    }
  };
  return (
    <div className="customCheck">
      <input type="checkbox" {...props} onChange={onChange} />
      <label></label>
    </div>
  );
}
