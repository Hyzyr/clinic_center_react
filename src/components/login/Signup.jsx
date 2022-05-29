import React from "react";
import Check from "../items/Check";
import Input from "../items/Input";
import Select from "../items/Select";
import * as SVG from "components/items/SVG";
import { Link } from "react-router-dom";

export default function Signup() {
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
}
