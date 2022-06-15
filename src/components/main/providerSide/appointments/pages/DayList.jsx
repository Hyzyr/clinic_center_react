import React, { useEffect, useRef } from "react";
import { useCallback } from "react";

const DayList = ({ children }) => {
  return <div className="tasks__inner-list">{children}</div>;
};

const DayListItem = ({
  start,
  end,
  available,
  disabled,
  period,
  data,
  showPopup,
}) => {
  const item = useRef(null);
  const tooltip = useRef(null);
  const testData = {
    image: "user-2.png",
    name: "Robert Downy Jr.",
    period: "4.00-4.15",
  };
  const mouseOver = useCallback(
    (e) => {
      if (item.current && tooltip.current) {
        tooltip.current.style.left = e.layerX + "px";
      }
    },
    [item, tooltip]
  );

  useEffect(() => {
    if (item.current) {
      item.current.addEventListener("mouseover", mouseOver);
    }
    return () => {
      if (item.current)
        item.current.removeEventListener("mouseover", mouseOver);
    };
  }, []);

  let className = "tasks__inner-list-item fadeIn ";
  if (disabled) className += " disabled";
  if (available) className += " available";

  const onClick = (data) => {
    showPopup(data);
  };
  return (
    <div className={className}>
      <div className="tasks__inner-list-item-title">
        {period && <small>{period}</small>}
        {start}
      </div>
      <div className="tasks__inner-list-item-content" ref={item}>
        <div className="tooltip__text" ref={tooltip}>
          01.01.2020
        </div>
        <TaskItem data={testData} onClick={onClick} />
        <TaskItem
          data={testData}
          onClick={onClick}
          addClass={"colorSecondary"}
        />
        <TaskItem data={testData} onClick={onClick} addClass={"colorGreen"} />
        <TaskItem data={testData} onClick={onClick} addClass={"colorRed"} />
      </div>
      <div className="tasks__inner-list-item-title">
        {period && <small>{period}</small>}
        {end}
      </div>
    </div>
  );
};

const TaskItem = ({ data, addClass, onClick }) => {
  const avatarPath = process.env.PUBLIC_URL + "/assets/images/avatars/";

  return (
    <div
      className={`tasks__task ${addClass ?? ""}`}
      onClick={() => onClick(data)}
    >
      <div className="tasks__task-user">
        <img src={avatarPath + data.image} alt="" />
        <strong>{data.name}</strong>
      </div>
      <div className="tasks__task-time">
        <strong>{data.period}</strong>
      </div>
    </div>
  );
};

export { DayListItem };
export default DayList;
