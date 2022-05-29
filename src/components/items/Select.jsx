import React, { useState } from "react";

export default function Select({ list, selectedItem = null, label = null }) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(selectedItem ?? list[0]);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      {label && <label className="customLabel">{label}</label>}

      <div
        className={`customSelect ${active ? "active" : ""}`}
        onClick={toggle}
      >
        <div className="customSelect__label">{selected}</div>
        <div className="customSelect__list">
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className={`customSelect__list-item ${
                item === selected ? "active" : ""
              } `}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
