import React, { useEffect, useState } from "react";

const CalendarBig = (props) => {
  const back = () => {
    props.back();
  };
  const next = () => {
    props.setStep(props.nextStep);
  };
  return (
    <div className="calendarInline">
      <div className="calendarInline__header">
        <div className="calendarInline__header-left">
          <button onClick={back}>
            <span className="custIcon custIcon--back"></span>
          </button>
          <span>Today: Wed, Oct 8, 2022</span>
        </div>
        <div className="calendarInline__header-title">
          <button>
            <span className="custIcon custIcon--back"></span>
          </button>
          <strong>October, 2022</strong>
          <button>
            <span className="custIcon custIcon--next"></span>
          </button>
        </div>
        <div className="calendarInline__header-right">
          <span>{"Choose from available dates & times"}</span>
        </div>
      </div>
      <ul className="calendarInline__weekdays">
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
      </ul>
      <div className="calendarInline__days">
        <CalendarBigItem onClick={next} disabled={true} day={27} />
        <CalendarBigItem onClick={next} disabled={true} day={28} />
        <CalendarBigItem onClick={next} disabled={true} day={29} />
        <CalendarBigItem onClick={next} disabled={true} day={30} />
        <CalendarBigItem onClick={next} disabled={true} day={"01"} />
        <CalendarBigItem onClick={next} disabled={true} day={"02"} />
        <CalendarBigItem onClick={next} disabled={true} day={"03"} />
        <CalendarBigItem onClick={next} disabled={true} day={"04"} />
        <CalendarBigItem onClick={next} disabled={true} day={"05"} />
        <CalendarBigItem onClick={next} disabled={true} day={"06"} />
        <CalendarBigItem onClick={next} disabled={true} day={"07"} />
        <CalendarBigItem onClick={next} day={"08"} today slots={"08"} />
        <CalendarBigItem onClick={next} day={"09"} />
        <CalendarBigItem onClick={next} day={10} />
        <CalendarBigItem onClick={next} day={11} />
        <CalendarBigItem onClick={next} day={12} />
        <CalendarBigItem onClick={next} day={13} slots={"12"} />
        <CalendarBigItem onClick={next} day={14} />
        <CalendarBigItem onClick={next} day={15} />
        <CalendarBigItem onClick={next} day={16} slots={"04"} />
        <CalendarBigItem onClick={next} day={17} />
        <CalendarBigItem onClick={next} day={18} />
        <CalendarBigItem onClick={next} day={19} />
        <CalendarBigItem onClick={next} day={20} />
        <CalendarBigItem onClick={next} day={21} />
        <CalendarBigItem onClick={next} day={22} />
        <CalendarBigItem onClick={next} day={23} />
        <CalendarBigItem onClick={next} day={24} />
        <CalendarBigItem onClick={next} day={25} />
        <CalendarBigItem onClick={next} day={26} />
        <CalendarBigItem onClick={next} day={27} />
        <CalendarBigItem onClick={next} day={28} />
        <CalendarBigItem onClick={next} day={29} />
        <CalendarBigItem onClick={next} day={30} slots={"01"} />
        <CalendarBigItem onClick={next} day={"01"} />
      </div>
    </div>
  );
};

const CalendarBigItem = ({
  day,
  slots = null,
  disabled,
  today,
  onClick = () => {},
}) => {
  let addClass = "";
  if (disabled) addClass += " disabled";
  if (today) addClass += " today";
  if (slots) addClass += " labeled";

  return (
    <div className={`calendarInline__day`} onClick={onClick}>
      <div className="calendarInline__day-space"></div>
      <div className={`calendarInline__day-inner  ${addClass}`}>
        <strong className="calendarInline__title">{day}</strong>
        <span className="calendarInline__event">
          {`${slots} slots available` ?? ""}
        </span>
      </div>
    </div>
  );
};

export default CalendarBig;
