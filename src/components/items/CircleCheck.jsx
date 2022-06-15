import React, { useEffect, useState } from "react";

export default function CircleCheck({
  label,
  value,
  defaultChecked = false,
  onChange,
}) {
  const [active, setActive] = useState(defaultChecked);
  useEffect(() => {
    if (active && onChange) {
      onChange(value ?? label);
    }
  }, [active]);

  return (
    <div
      className={`circleCheck ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <span>{label}</span>
    </div>
  );
}
