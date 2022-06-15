import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

const CalendarBig = (props) => {
  const back = () => {
    props.back();
  };
  const next = () => {
    props.setStep(props.nextStep);
  };
  const onChange = (dates) => {
    console.log(dates);
    setTimeout(() => props.setStep(props.nextStep), 1000);
  };

  const getDates = (startDate, daysToAdd) => {
    let aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push({
        date: currentDate,
        slots: i + 1,
      });
    }

    return aryDates;
  };
  const daysWithSlot = getDates(new Date(), 7);

  return (
    <DatePicker
      // selected={startDate}
      onChange={onChange}
      // startDate={startDate}
      // endDate={endDate}
      inline
      calendarContainer={CalendarContainer}
      renderCustomHeader={(headerProps) => (
        <CalendarHeader
          className="calendarPopup"
          {...headerProps}
          backFunc={back}
        />
      )}
      renderDayContents={(day, date) => (
        <CalendarDayContents
          day={day}
          date={date}
          daysWithSlot={daysWithSlot}
        />
      )}
    />
  );
};

const CalendarBigScroll = (props) => {
  const onChange = (dates) => {
    console.log(dates);
    setTimeout(() => props.setStep(props.nextStep), 1000);
  };

  const getDates = (startDate, daysToAdd) => {
    let aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push({
        date: currentDate,
        available: true,
        scheduled: i + 1,
        onDemand: i + 1,
        completed: i + 1,
        cancelled: i + 1,
      });
    }

    return aryDates;
  };
  const daysWithSlot = getDates(new Date(), 7);

  return (
    <DatePicker
      // selected={startDate}
      onChange={onChange}
      // startDate={startDate}
      // endDate={endDate}
      inline
      calendarContainer={CalendarContainer}
      renderCustomHeader={() => ""}
      renderDayContents={(day, date) => (
        <CalendarDayContents
          day={day}
          date={date}
          addClass={"no-padding"}
          daysWithSlot={daysWithSlot}
        />
      )}
    />
  );
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// commmon functions
const getMonth = (date) => {
  return new Date(date).getMonth();
};
const getMonthFull = (date) => {
  return months[new Date(date).getMonth()];
};

const getYear = (date) => {
  return new Date(date).getFullYear();
};
const getDate = (date) => {
  return new Date(date).getDate();
};

/// components
const CalendarContainer = (props) => {
  return <div className="calendarInline">{props.children}</div>;
};
const CalendarHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  backFunc,
}) => {
  const back = () => backFunc();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="calendarInline__header">
      <div className="calendarInline__header-left">
        <button onClick={back}>
          <span className="custIcon custIcon--back"></span>
        </button>
        {/* <span>{`Today: Wed, Oct 8, 2022 `}</span> */}
        <span>{`Today: ${new Date().toLocaleDateString(
          "en-US",
          options
        )}`}</span>
      </div>
      <div className="calendarInline__header-title">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <span className="custIcon custIcon--back"></span>
        </button>
        <strong>
          {getMonthFull(date)}, {getYear(date)}
        </strong>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <span className="custIcon custIcon--next"></span>
        </button>
      </div>
      <div className="calendarInline__header-right">
        <span>{"Choose from available dates & times"}</span>
      </div>
    </div>
  );
};

const CalendarDayContents = ({ day, date, daysWithSlot, addClass }) => {
  const getTime = (given) => {
    let givenDate = new Date(given);
    givenDate.setHours(0, 0, 0, 0);
    return givenDate.getTime();
  };
  let slots = daysWithSlot.find((item) => {
    return getTime(item.date) === getTime(date);
  });
  return (
    <>
      <div className="calendarInline__day-space"></div>
      <div
        className={`calendarInline__day-inner  ${addClass ?? ""} ${
          slots && slots.slots ? "visible" : ""
        } ${slots && slots.available ? "available" : ""}`}
      >
        <strong className="calendarInline__title">{getDate(date)}</strong>
        {slots?.scheduled && (
          <span className="calendarInline__tag scheduled ">
            {slots.scheduled}
          </span>
        )}
        {slots?.onDemand && (
          <span className="calendarInline__tag onDemand ">
            {slots.onDemand}
          </span>
        )}
        {slots?.completed && (
          <span className="calendarInline__tag completed ">
            {slots.completed}
          </span>
        )}
        {slots?.cancelled && (
          <span className="calendarInline__tag cancelled ">
            {slots.cancelled}
          </span>
        )}

        <span className="calendarInline__event ">
          {slots?.slots ? `${slots.slots} slots available` : ""}
        </span>
      </div>
    </>
  );
};
export { CalendarBigScroll };
export default CalendarBig;
