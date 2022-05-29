import React from "react";

export default function Text({ title = null, placeholder = "" }) {
  return (
    <>
      {title && <label className="customLabel">{title}</label>}
      <div className="customText">
        <textarea placeholder={placeholder}></textarea>
      </div>
    </>
  );
}
