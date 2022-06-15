import React, { useState } from "react";
import Input from "components/items/Input";
import Select from "components/items/Select";
import Check from "components/items/Check";
import SwitchCheck, { SwitchCheckButton } from "components/items/SwitchCheck";
import DayList, { DayListItem } from "./DayList";
import * as SVG from "components/items/SVG";
import { CalendarBigScroll } from "components/main/CalendarBig";
import ProfilePic from "components/items/ProfilePic";

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
  const [popup, setPopup] = useState(false);
  const [drop, setDrop] = useState(false);
  const setDataTypeValue = (value) => setDataType(value);

  const setPageAppointment = () => setPage("patient");
  const setPageAvailability = () => setPage("available");
  const avatarPath = process.env.PUBLIC_URL + "/assets/images/avatars/user.png";
  const toggleDrop = () => {
    setDrop(!drop);
  };
  const showPopup = (data) => {
    setPopup(data);
  };
  const closePopup = () => {
    setPopup(null);
  };
  return (
    <div className="tasks">
      {popup && (
        <div className="tasks__popup fadeIn">
          <div className="tasks__popup-header">
            <div className="tasks__popup-header-user">
              <ProfilePic src={avatarPath} alt="avatar" />
              <div className="tasks__popup-header-user-group">
                <strong>Morris Beck Silam</strong>
                <small>Skin Problem</small>
              </div>
            </div>
            <div className="tasks__popup-header-buttons">
              <button>{SVG.pen}</button>
              <button className="close" onClick={closePopup}>
                {SVG.plus}
              </button>
            </div>
          </div>
          <div className="tasks__popup-info">
            <span>{SVG.calendarDay} Fri 08 Oct, 2022</span>
            <span>{SVG.schedule} 7.00PM - 7.30PM</span>
          </div>
          <div className="tasks__popup-buttons">
            <button className="button button--green" onClick={closePopup}>
              View EMR
            </button>
            <button className="button button--blue" onClick={closePopup}>
              Complete
            </button>
            <button className="button button--red" onClick={closePopup}>
              Cancel
            </button>
          </div>
        </div>
      )}

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
            <div className="tasks__drop-outer">
              <SwitchCheckButton label={"Go Online"} onClick={toggleDrop} />
              {drop && (
                <div className="tasks__drop fadeIn">
                  <div className="tasks__drop-row">
                    <span>Go Online to see patients on demand</span>
                    <SwitchCheck />
                  </div>
                  <div className="tasks__drop-row">
                    <span>Default time slot for scheduled appointments</span>
                    <Select
                      list={["5 min", "10 min", "15 min", "20 min", "25 min"]}
                    />
                  </div>
                  <div className="tasks__drop-row">
                    <span>Max hold amount for cash pay patients(CAD$)</span>
                    <Input />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {dataType.text === "Month" && (
          <div className="tasks__inner-calendar fadeIn">
            <CalendarBigScroll />
          </div>
        )}
        {dataType.text === "Day" && (
          <DayList>
            <DayListItem
              showPopup={showPopup}
              start={"1.00"}
              end={"2.00"}
              period="Am"
              disabled
            />
            <DayListItem
              showPopup={showPopup}
              start={"1.00"}
              end={"2.00"}
              disabled
              available
            />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem
              showPopup={showPopup}
              start={"1.00"}
              end={"2.00"}
              period="Pm"
            />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
            <DayListItem showPopup={showPopup} start={"1.00"} end={"2.00"} />
          </DayList>
        )}
      </div>
    </div>
  );
};

export default Tasks;
