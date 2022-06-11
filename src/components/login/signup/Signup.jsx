import React, { useState } from "react";
import Check from "components/items/Check";
import Input from "components/items/Input";
import Select from "components/items/Select";
import * as SVG from "components/items/SVG";
import { Link } from "react-router-dom";
import UserForm from "./providerSteps/UserForm";
import LocationForm from "./providerSteps/LocationForm";
import ContactForm from "./providerSteps/ContactForm";
import BillingForm from "./providerSteps/BillingForm";

export const SignupPatient = () => {
  return (
    <div className="login__inner-form signup fadeInUp">
      <div className="form">
        <div className="form__header">
          <div className="circleIco">{SVG.addUser}</div>
          <h6>Create Account</h6>
        </div>

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
        <div className="form__row">
          <div className="form__column">
            <div className="form__title">
              {SVG.lock}
              <span>Password </span>
              <span className="sup">*</span>
            </div>
            <Input type="password" placeholder="Password" />
          </div>
          <div className="form__column">
            <div className="form__title">
              {SVG.lock}
              <span>Confirm Password </span>
              <span className="sup">*</span>
            </div>
            <Input
              type="password"
              placeholder="Confirm Password"
              error={false}
              messages={[
                {
                  status: "error",
                  message: "Password Must be 6-12 characters",
                },
                {
                  status: "error",
                  message: "Include Uppercase and Lowercase characters",
                },
                {
                  status: "success",
                  message: "Include one number",
                },
                {
                  status: "success",
                  message: "Include one special character",
                },
              ]}
            />
          </div>
        </div>
        <div className="form__terms">
          <div className="form__terms-para">
            <Check id="term_check" />
            <label htmlFor="term_check">
              {"I have read and agree to the "}
              <a href="" className="link link--underline">
                Terms and Conditions
              </a>
              {" of RhynoCare Inc."}
            </label>
          </div>
          <div className="form__terms-para">
            <Check id="sign_check" />
            <label htmlFor="sign_check">
              Sign me up to receive information about RhynoCare
            </label>
          </div>
        </div>
        <div className="form__buttons">
          <button className="button button--secondary">Reset</button>
          <Link to={"/"} className="button button--main">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export const SignupProvider = () => {
  const initState = {
    user: {
      active: true,
      done: false,
      svg: SVG.person,
    },
    location: {
      active: false,
      done: false,
      svg: SVG.locationMark,
    },
    contact: {
      active: false,
      done: false,
      svg: SVG.phoneMessage,
    },
    billing: {
      active: false,
      done: false,
      svg: SVG.shieldTick,
    },
  };

  const [form, setForm] = useState({});
  const [stepDetails, setStepDetails] = useState(initState);
  const updateForm = (data) => {
    setForm({ ...form, ...data });
  };
  const resetFunc = () => {
    setForm({});
    setStepDetails(initState);
  };
  const doneFunc = () => {
    console.log("form is >> ", form);
  };

  const nextStep = () => {
    let updatedStepDetails = { ...stepDetails };
    const steps = Object.keys(stepDetails);

    for (let i = 0; i < steps.length; i++) {
      const element = updatedStepDetails[steps[i]];
      const nextElement = updatedStepDetails[steps[i + 1]] ?? null;

      if (element.active && nextElement) {
        element.active = false;
        element.done = true;
        nextElement.active = true;
        break;
      } else if (element.active) {
        doneFunc();
        break;
      }
    }
    setStepDetails(updatedStepDetails);
  };

  const commonProps = {
    form,
    updateForm,
  };

  return (
    <div className="login__inner-form signup fadeInUp">
      <div className="form">
        <div className="form__header">
          <div className="circleIco">{SVG.addUser}</div>
          <h6>Create Account</h6>
        </div>
        <div className="stepsRoad">
          {Object.keys(stepDetails).map((step) => (
            <div
              className={`stepsRoad__step ${
                stepDetails[step].active ? "active" : ""
              } ${stepDetails[step].done ? "done" : ""}`}
              key={step}
            >
              {stepDetails[step].svg}
            </div>
          ))}
        </div>

        {stepDetails.user.active && <UserForm {...commonProps} />}
        {stepDetails.location.active && <LocationForm {...commonProps} />}
        {stepDetails.contact.active && <ContactForm {...commonProps} />}
        {stepDetails.billing.active && <BillingForm {...commonProps} />}

        <div className="form__buttons">
          <button className="button button--secondary" onClick={resetFunc}>
            Reset
          </button>
          {!stepDetails.billing.active ? (
            <button className="button button--main" onClick={nextStep}>
              Continue
            </button>
          ) : (
            <button className="button button--main" onClick={doneFunc}>
              Register Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
