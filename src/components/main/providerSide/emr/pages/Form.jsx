import React from "react";
import Input from "components/items/Input";
import * as SVG from "components/items/SVG";

const Form = () => {
  const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";

  return (
    <div className="emrForm">
      <div className="emrForm__title">
        <div className="emrForm__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="emrForm__title-text">Book an Appointment</div>
      </div>
      <div className="emrForm__form form">
        <Input label="First Name" svg={SVG.person} />
        <Input label="Last Name" svg={SVG.person} />
        <Input label="Date of Birth" svg={SVG.calendarDay} />
        <Input label="Health Card" svg={SVG.shieldHealth} />
        <button className="button button--main">{SVG.search} Search</button>
      </div>
    </div>
  );
};

export default Form;
