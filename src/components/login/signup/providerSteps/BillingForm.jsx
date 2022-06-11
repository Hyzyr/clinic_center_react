import React from "react";
import Input from "components/items/Input";
import * as SVG from "components/items/SVG";
import Check from "components/items/Check";

export default function BillingForm({ form, updateForm }) {
  const setLicense = (value) => {
    updateForm({ license: value });
  };
  const setBilling = (value) => {
    updateForm({ billing: value });
  };

  const setPassword = (value) => {
    updateForm({ password: value });
  };

  return (
    <>
      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.doc}
            <span>License / Registration Number </span>
            <span className="sup">*</span>
          </div>
          <Input setValue={setLicense} label="License / Registration Number" />
        </div>
        <div className="form__column">
          <div className="form__title">
            {SVG.receipt}
            <span>Billing Number </span>
            <span className="sup">*</span>
          </div>
          <Input setValue={setBilling} label="Billing Number " />
        </div>
      </div>
      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.lock}
            <span>Password </span>
            <span className="sup">*</span>
          </div>
          <Input
            placeholder="Password"
            setValue={setPassword}
            type="password"
          />
        </div>
        <div className="form__column">
          <div className="form__title">
            {SVG.lock}
            <span>Confirm Password </span>
          </div>
          <Input placeholder="Confirm Password" type="password" />
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
    </>
  );
}
