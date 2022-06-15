import React from "react";

export default function Text({ customLabel = null, placeholder = "" }) {
  return (
    <>
      {customLabel && <label className="customLabel">{customLabel}</label>}
      <div className="customText">
        <textarea placeholder={placeholder}></textarea>
      </div>
    </>
  );
}
