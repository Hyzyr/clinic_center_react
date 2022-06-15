import React, { useState } from "react";
import Input from "components/items/Input";
import Select from "components/items/Select";
import Check from "components/items/Check";
import { SwitchCheckButton } from "components/items/SwitchCheck";
import DayList, { DayListItem } from "./DayList";
import * as SVG from "components/items/SVG";
import { CalendarBigScroll } from "components/main/CalendarBig";

const Tasks = ({ setPage }) => {
  const selectData = [
    {
      text: "Month",
      svg: SVG.calendarMonth,
    },
    {
      text: "Day",
      svg: SVG.calendarDay,
    },
  ];
  const [dataType, setDataType] = useState(selectData[0]);
  const setDataTypeValue = (value) => setDataType(value);

  const setPageAppointment = () => setPage("patient");
  const setPageAvailability = () => setPage("available");

  return (
    <div className="tasks">
      <div className="tasks__inner">
        <div className="tasks__inner-field">
          <div className="tasks__inner-field-calendar">
            <Select
              selectedItem={dataType}
              onChange={setDataTypeValue}
              label={"Calender Type"}
              data={selectData}
            />
            <strong>October, 2022</strong>
          </div>
          <div className="tasks__inner-field-buttons">
            <button
              className="button button--main"
              onClick={setPageAvailability}
            >
              {SVG.plus}Add Availability
            </button>
            <button
              className="button button--main"
              onClick={setPageAppointment}
            >
              {SVG.plus}Add Patient Appointment
            </button>
          </div>
        </div>
        <div className="tasks__inner-field">
          <div className="tasks__inner-field-checks">
            <div className="tasks__inner-field-check">
              <Check id={"scheduled"} addClass={"colorSecondary"} />
              <label htmlFor="scheduled">Scheduled</label>
            </div>
            <div className="tasks__inner-field-check">
              <Check id={"on-demand"} addClass={"colorGreen"} />
              <label htmlFor="on-demand">On-Demand</label>
            </div>
            <div className="tasks__inner-field-check">
              <Check id={"completed"} />
              <label htmlFor="completed">Completed</label>
            </div>
            <div className="tasks__inner-field-check">
              <Check id={"cancelled"} addClass={"colorRed"} />
              <label htmlFor="cancelled">Cancelled</label>
            </div>
          </div>
          <div className="tasks__inner-field-buttons">
            <Input svg={SVG.search} iconLeft placeholder="Find patient...  " />
            <SwitchCheckButton label={"Go Online"} />
          </div>
        </div>
        {dataType.text === "Month" && (
          <div className="tasks__inner-calendar fadeIn">
            <CalendarBigScroll />
          </div>
        )}
        {dataType.text === "Day" && (
          <DayList>
            <DayListItem start={"1.00"} end={"2.00"} period="Am" disabled />
            <DayListItem start={"1.00"} end={"2.00"} disabled available />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} period="Pm" />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
            <DayListItem start={"1.00"} end={"2.00"} />
          </DayList>
        )}
      </div>
    </div>
  );
};

export default Tasks;
