import React from "react";
import Input from "components/items/Input";
import * as SVG from "components/items/SVG";
import Text from "components/items/Text";

const PatientForm = () => {
  const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";

  return (
    <div className="tasksForm">
      <button type="button" className="tasksForm__back">
        <span className="custIcon custIcon--back"></span>
      </button>
      <div className="tasksForm__title">
        <div className="tasksForm__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="tasksForm__title-text">Add Patient Appointment</div>
      </div>
      <div className="tasksForm__form form">
        <Input customLabel="Patient Name" defaultValue="John Wick Maiden" />

        <div className="tasksForm__form-row">
          <div className="tasksForm__form-column">
            <Input
              customLabel="Appointment Date"
              type="date"
              svg={SVG.calendarDay}
            />
          </div>
          <div className="tasksForm__form-group">
            <div className="tasksForm__form-column">
              <Input customLabel="Start Time" type="time" svg={SVG.schedule} />
            </div>
            <span className="divider">-</span>
            <div className="tasksForm__form-column">
              <Input customLabel="End Time" type="time" svg={SVG.schedule} />
            </div>
          </div>
        </div>
        <Input placeholder={"Scheduled"} customLabel="Date of Birth" />
        <Text placeholder={"Enter reson here..."} customLabel="Reason" />
        <div className="tasksForm__form-buttons">
          <button className="button button--secondary">Cancel</button>
          <button className="button button--main">UPDATE</button>
        </div>
      </div>
    </div>
  );
};

export default PatientForm;
