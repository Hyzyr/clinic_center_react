import React, { useEffect, useState } from "react";

export default function Select({
  onChange,
  list,
  selectedItem = null,
  label = null,
}) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(selectedItem ?? list[0]);
  const toggle = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [selected]);

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
