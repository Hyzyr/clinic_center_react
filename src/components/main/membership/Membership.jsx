import React, { useState } from "react";
import Individual from "./tabs/Individual";
import Family from "./tabs/Family";
import Input from "components/items/Input";
import InlineInput from "components/items/InlineInput";
import * as SVG from "components/items/SVG";

const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";
const imgPath =
  process.env.PUBLIC_URL + "/assets/images/illustrations/medical/";
export default function Membership() {
  const [tab, setTab] = useState("Individual");
  const [form, setForm] = useState(null);
  const checkClass = (tabName) => (tab === tabName ? "active" : "");
  const swapTab = (tabName) => {
    setTab(tabName);
  };
  const setFormPayment = () => {
    setForm("FormPayment");
  };
  const setHouseholdForm = () => {
    setForm("HouseholdForm");
  };
  const disableForm = () => setForm(null);

  const onFormPaymentSubmit = () => {
    disableForm();
  };
  const onHouseholdFormSubmit = () => {
    setFormPayment();
  };

  if (form !== null)
    return (
      // key="form"
      <div className="membership fadeInUp">
        {form === "FormPayment" && (
          <FormPayment onSubmit={onFormPaymentSubmit} close={disableForms} />
        )}
        {form === "HouseholdForm" && (
          <HouseholdForm onSubmit={onHouseholdFormSubmit} close={disableForm} />
        )}
      </div>
    );
  return (
    <div className="membership fadeInUp">
      <div className="membership__tabs ">
        <div className="tabs">
          <div className="tabs__buttons">
            <div className="tabs__buttons-inner">
              <button
                className={checkClass("Individual")}
                onClick={() => swapTab("Individual")}
              >
                Individual
              </button>
              <button
                className={checkClass("Family")}
                onClick={() => swapTab("Family")}
              >
                Family
              </button>
            </div>
          </div>
          {tab === "Individual" && <Individual choosseFunc={setFormPayment} />}
          {tab === "Family" && <Family choosseFunc={setHouseholdForm} />}
        </div>
      </div>
    </div>
  );
}

const FormPayment = ({ onSubmit, close }) => {
  return (
    <div className="booking booking--small">
      <button type="button" className="booking__close" onClick={close}>
        <span className="custIcon custIcon--error"></span>
      </button>
      <div className="booking__title ">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="booking__title-text">
          Make Payment using Credit Card
        </div>
      </div>
      <div className="booking__form form form--payment">
        <div className="form__row">
          <div className="form__column form__column--wide">
            <Input type="email" label="Email addresss" svg={SVG.email} />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <Input type="number" label="Card Number" svg={SVG.card} />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column">
            <Input type="month" svg={SVG.calendar} />
          </div>
          <div className="form__column">
            <Input type="password" placeholder="CVC" svg={SVG.lock} />
          </div>
        </div>

        <div className="form__buttons">
          <button className="button button--main" onClick={onSubmit}>
            Book Now CAD $50.00
          </button>
        </div>

        <div className="form__divider">
          <span>or</span>
        </div>
        <div className="booking__title booking__title--text ">
          <div className="booking__title-text">Make Payment</div>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <Input type="text" label="Token" svg={SVG.certificate} />
          </div>
        </div>

        <div className="form__buttons">
          <button className="button button--main" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const HouseholdForm = ({ onSubmit, close }) => {
  return (
    <div className="booking booking--membership">
      <button type="button" className="booking__close" onClick={close}>
        <span className="custIcon custIcon--error"></span>
      </button>
      <div className="booking__title ">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="booking__title-text">
          Please enter your family member's email address
        </div>
        <div className="booking__title-subtext">
          (must be different from your account)
        </div>
      </div>
      <div className="booking__form ">
        <div className="form">
          <div className="form__row">
            <div className="form__column form__column--wide">
              <div className="form__title">
                {SVG.family}
                <span>Family Members </span>
              </div>
              <Input type="number" numberButtons={true} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__column form__column--wide">
              <div className="form__title">
                {SVG.email}
                <span>Email Address of 1st Member </span>
              </div>
              <Input
                placeholder="Enter Email Address"
                type="text"
                dark={true}
              />
            </div>
          </div>
          <div className="form__row">
            <div className="form__column form__column--wide">
              <div className="form__title">
                {SVG.email}
                <span>Email Address of 2nd Member </span>
              </div>
              <Input
                placeholder="Enter Email Address"
                type="text"
                dark={true}
              />
            </div>
          </div>

          <div className="form__buttons">
            <button className="button button--secondary">Reset</button>
            <button className="button button--main" onClick={onSubmit}>
              Confirm Detalis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
