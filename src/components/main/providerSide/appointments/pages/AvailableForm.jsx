import React, { useState } from "react";
import Input from "components/items/Input";
import * as SVG from "components/items/SVG";
import Text from "components/items/Text";
import Select from "components/items/Select";
import CircleCheck from "components/items/CircleCheck";

const repeatList = [
  {
    text: "No Repeats",
    svg: SVG.repeat,
  },
  {
    text: "Daily",
    svg: SVG.calendarDay,
  },
  {
    text: "Weekly",
    svg: SVG.calendarWeek,
  },
  {
    text: "Customize",
    svg: SVG.calendarMonth,
  },
];

const AvailableForm = () => {
  const [repeat, setRepeat] = useState(repeatList[0]);
  const [ends, setEnds] = useState("Never");

  const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";
  const setRepeatValue = (value) => setRepeat(value);
  const setEndsValue = (value) => setEnds(value);
  return (
    <div className="tasksForm">
      <button type="button" className="tasksForm__back">
        <span className="custIcon custIcon--back"></span>
      </button>
      <div className="tasksForm__title">
        <div className="tasksForm__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="tasksForm__title-text">Add Availability</div>
      </div>
      <div className="tasksForm__form form">
        <div className="tasksForm__form-field">
          <div className="tasksForm__form-field-row">
            <div className="tasksForm__form-field-column">
              <Input
                customLabel="Appointment Date"
                type="date"
                svg={SVG.calendarDay}
              />
            </div>
            <div className="tasksForm__form-field-group">
              <div className="tasksForm__form-field-column">
                <Input
                  customLabel="Start Time"
                  type="time"
                  svg={SVG.schedule}
                />
              </div>
              <span className="divider">-</span>
              <div className="tasksForm__form-field-column">
                <Input customLabel="End Time" type="time" svg={SVG.schedule} />
              </div>
            </div>
          </div>
        </div>
        <div className="tasksForm__form-field">
          <Select
            label="Repeats On"
            svg={SVG.calendarDay}
            selectedItem={repeat}
            data={repeatList}
            onChange={setRepeatValue}
          />
          {repeat.text === "Weekly" && (
            <div className="tasksForm__form-checks fadeIn">
              <CircleCheck label={"Sun"} />
              <CircleCheck label={"Mon"} />
              <CircleCheck label={"Tue"} />
              <CircleCheck label={"Wed"} />
              <CircleCheck label={"Thu"} />
              <CircleCheck label={"Fri"} />
              <CircleCheck label={"Sat"} />
            </div>
          )}
          {repeat.text === "Customize" && <Customize />}
        </div>
        {repeat.text !== "No Repeats" && (
          <div className="tasksForm__form-field fadeInUp">
            <Select
              label="Ends"
              selectedItem={ends}
              onChange={setEndsValue}
              list={["Never", "Selected date", "Customize"]}
            />
            {ends === "Selected date" && (
              <Input type="date" svg={SVG.calendarDay} />
            )}
            {ends === "Customize" && (
              <Input type="number" placeholder="- -  days" numberButtons />
            )}
          </div>
        )}

        <div className="tasksForm__form-buttons">
          <button className="button button--secondary">Cancel</button>
          <button className="button button--main">DONE</button>
        </div>
      </div>
    </div>
  );
};

const Customize = () => {
  return (
    <>
      <div className="tasksForm__form-field-interval fadeIn">
        <span className="customLabel">Date</span>
        <Input addClass="wide" type="date" svg={SVG.calendarDay} />
        <span className="customLabel">Time</span>
        <Input type="time" svg={SVG.schedule} />
        <span className="hideMb">-</span>
        <Input type="time" svg={SVG.schedule} />
      </div>
      <div className="tasksForm__form-field-interval fadeIn">
        <span className="customLabel">Date</span>
        <Input addClass="wide" type="date" svg={SVG.calendarDay} />
        <span className="customLabel">Time</span>
        <Input type="time" svg={SVG.schedule} />
        <span className="hideMb">-</span>
        <Input type="time" svg={SVG.schedule} />
      </div>
      <div className="tasksForm__form-field-button">
        <button className="button button--main">+ Add New Slot</button>
      </div>
    </>
  );
};
export default AvailableForm;
