import React, { useState } from "react";
import Input from "components/items/Input";
import * as SVG from "components/items/SVG";
import Check from "components/items/Check";
import Select from "components/items/Select";

export default function Patient() {
  const [healtCard, setHealtCard] = useState(false);
  const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";

  return (
    <div className="patient">
      <div className="patient__title">
        <div className="patient__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="patient__title-text">
          Please enter the details of the patient
        </div>
      </div>
      <div className="patient__form form">
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.user}
              <span>Name </span>
              <span className="sup">*</span>
            </div>
          </div>
          <div className="form__column">
            <Input label="First & Middle" />
          </div>
          <div className="form__column">
            <Input label="Last " />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column">
            <div className="form__title">
              {SVG.calendar}
              <span>Date of Birth </span>
              <span className="sup">*</span>
            </div>
            <Input type="date" />
          </div>
          <div className="form__column">
            <div className="form__title">
              {SVG.gender}
              <span>Gender </span>
              <span className="sup">*</span>
            </div>
            <Select list={["Male", "Female", "Unset"]} />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column">
            <div className="form__title">
              {SVG.email}
              <span>Email </span>
              <span className="sup">*</span>
            </div>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="form__column">
            <div className="form__title">
              {SVG.phone}
              <span>Phone </span>
              <span className="sup">*</span>
            </div>
            <Input type="number" placeholder="Phone Number" prefix="+1" />
          </div>
        </div>

        <div className="form__terms">
          <div className="form__terms-para">
            <Check id="term_check2" onChange={setHealtCard} />
            <label htmlFor="term_check2">
              {"The patient has a provincial health card"}
            </label>
          </div>
        </div>
        {healtCard && (
          <div className="form__row">
            <div className="form__column">
              <div className="form__title">
                {SVG.shieldHealth}
                <span>Health Card </span>
                <span className="sup">*</span>
              </div>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="form__column">
              <div className="form__title">
                {SVG.calendar}
                <span>Date of Expiry </span>
                <span className="sup">*</span>
              </div>
              <Input type="date" placeholder="Phone Number" />
            </div>
          </div>
        )}
        <div className="form__buttons">
          <button className="button button--secondary">Reset</button>
          <button className="button button--main">Register Now</button>
        </div>
      </div>
    </div>
  );
}
