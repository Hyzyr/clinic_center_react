import React from "react";
import Input from "components/items/Input";
import * as SVG from "components/items/SVG";

export default function ContactForm({ form, updateForm }) {
  const setEmail = (value) => {
    updateForm({ email2: value });
  };
  const setPhone = (value) => {
    updateForm({ phone: value });
  };
  const setMobile = (value) => {
    updateForm({ phone: value });
  };

  const setFax = (value) => {
    updateForm({ fax: value });
  };

  return (
    <>
      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.email}
            <span>Email Address </span>
            <span className="sup">*</span>
          </div>
          <Input setValue={setEmail} label="Email Address" />
        </div>
        <div className="form__column">
          <div className="form__title">
            {SVG.phone}
            <span>Mobile </span>
            <span className="sup">*</span>
          </div>
          <Input setValue={setMobile} label="Mobile" />
        </div>
      </div>
      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.phoneOld}
            <span>Phone </span>
            <span className="sup">*</span>
          </div>
          <Input placeholder="Phone" setValue={setPhone} />
        </div>
        <div className="form__column">
          <div className="form__title">
            {SVG.fax}
            <span>Fax Number </span>
          </div>
          <Input placeholder="Fax Number" setValue={setFax} />
        </div>
      </div>
    </>
  );
}
