import React, { useEffect, useState } from "react";

export default function Select({
  onChange,
  list,
  data,
  selectedItem = null,
  label = null,
}) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(
    selectedItem ? selectedItem : list ? list[0] : data ? data[0] : null
  );
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
        <div className="customSelect__label">
          {data ? (
            <>
              {selected.svg && <div className="icon">{selected.svg}</div>}
              {selected.text}
            </>
          ) : (
            selected
          )}
        </div>
        <div className="customSelect__list">
          {list &&
            list.map((item, index) => (
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
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(item)}
                className={`customSelect__list-item ${
                  item === selected ? "active" : ""
                } `}
              >
                {item.svg && <div className="icon">{item.svg}</div>}
                {item.text}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
