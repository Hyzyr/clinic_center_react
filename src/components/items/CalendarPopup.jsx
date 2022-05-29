import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

export default function CalendarPopup({ CustomButton }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      calendarContainer={MyContainer}
      customInput={<CustomButton />}
      renderCustomHeader={(headerProps) => (
        <CalendarPopupHeader className="calendarPopup" {...headerProps} />
      )}
      renderDayContents={renderDayContents}
    />
  );
}
const renderDayContents = (day, date) => {
  return <strong>{getDate(date)}</strong>;
};
const MyContainer = (props) => {
  console.log(props);
  return <div className="calendarPopup">{props.children}</div>;
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
const getMonth = (date) => {
  return new Date(date).getMonth();
};
const getMonthName = (date) => {
  return months[new Date(date).getMonth()];
};
const getYear = (date) => {
  return new Date(date).getFullYear();
};
const getDate = (date) => {
  return new Date(date).getDate();
};
export const CalendarPopupHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  return (
    <div className="calendarPopup__header">
      <CalendarPopupSelect date={date} changeYear={changeYear} />
      <div className="calendarPopup__header-buttons">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <span className="custIcon custIcon--back"></span>
        </button>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <span className="custIcon custIcon--next"></span>
        </button>
      </div>
    </div>
  );
};
export const CalendarPopupWrapper = () => {
  return (
    <div className="calendarPopup">
      <ul className="calendarPopup__weekdays">
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
      </ul>
      <div className="calendarPopup__days">
        <CalendarPopupItem disabled={true} day={27} />
        <CalendarPopupItem disabled={true} day={28} />
        <CalendarPopupItem disabled={true} day={29} />
        <CalendarPopupItem disabled={true} day={30} />
        <CalendarPopupItem disabled={true} day={"01"} />
        <CalendarPopupItem disabled={true} day={"02"} />
        <CalendarPopupItem disabled={true} day={"03"} />
        <CalendarPopupItem disabled={true} day={"04"} />
        <CalendarPopupItem disabled={true} day={"05"} />
        <CalendarPopupItem disabled={true} day={"06"} />
        <CalendarPopupItem disabled={true} day={"07"} />
        <CalendarPopupItem addClass=" " day={"08"} today />
        <CalendarPopupItem addClass="" day={"09"} />
        <CalendarPopupItem addClass="" day={10} />
        <CalendarPopupItem addClass="start active" day={11} />
        <CalendarPopupItem addClass="active" day={12} />
        <CalendarPopupItem addClass="active" day={13} />
        <CalendarPopupItem addClass="active" day={14} />
        <CalendarPopupItem addClass="active" day={15} />
        <CalendarPopupItem addClass="active" day={16} />
        <CalendarPopupItem addClass="active" day={17} />
        <CalendarPopupItem addClass="active" day={18} />
        <CalendarPopupItem addClass="active" day={19} />
        <CalendarPopupItem addClass="active" day={20} />
        <CalendarPopupItem addClass="active" day={21} />
        <CalendarPopupItem addClass="active" day={22} />
        <CalendarPopupItem addClass="active" day={23} />
        <CalendarPopupItem addClass="active" day={24} />
        <CalendarPopupItem addClass="end active" day={25} />
        <CalendarPopupItem addClass="" day={26} />
        <CalendarPopupItem addClass="" day={27} />
        <CalendarPopupItem addClass="" day={28} />
        <CalendarPopupItem addClass="" day={29} />
        <CalendarPopupItem addClass=" " day={30} />
        <CalendarPopupItem addClass=" " day={"01"} />
      </div>
    </div>
  );
};

const CalendarPopupSelect = ({ date, changeYear }) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState({
    month: getMonth(date),
    year: getYear(date),
  });
  const [list, setList] = useState([]);
  const [currentlist, setCurrentList] = useState([]);

  useEffect(() => {
    let newList = [];
    for (let index = 0; index < 15; index++) {
      newList.push({
        month: getMonth(date),
        year: getYear(date) - index,
      });
    }

    setSelected(newList[0]);
    setList(newList);
    setCurrentList(newList.filter((item) => item !== selected));
  }, [date]);

  useEffect(() => {
    if (list) setCurrentList(list.filter((item) => item !== selected));
    changeYear(selected.year);
  }, [selected]);

  const toggle = () => setActive(!active);
  const setItem = (item) => {
    setActive(false);
    setSelected(item);
  };

  return (
    <div className={`calendarSelect__outer ${active ? "active" : ""}`}>
      <div className="calendarSelect">
        <div className="calendarSelect__selected" onClick={toggle}>
          <div className="calendarSelect__item">
            <span>{`${months[selected.month]} ${selected.year}`}</span>
          </div>
        </div>
        <div className="calendarSelect__list">
          {currentlist &&
            currentlist.map((item, index) => (
              <div
                className="calendarSelect__item"
                onClick={() => setItem(item)}
                key={index}
              >
                <span>{`${months[item.month]} ${item.year}`}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const CalendarPopupItem = (day, date) => {
  // let addClass = "";
  // if (disabled) addClass += " disabled";
  // if (today) addClass += " today";
  console.log(day, date);
  return (
    <div className={`calendarPopup__day `}>
      <strong className="">{getDate(date)}</strong>
    </div>
  );
};
