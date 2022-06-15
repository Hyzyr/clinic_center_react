import React from "react";
import Check from "../../items/Check";
import Input from "../../items/Input";
import Select from "../../items/Select";
import * as SVG from "components/items/SVG";
import { Link } from "react-router-dom";

export const SigninPatient = () => {
  return (
    <div className="login__inner-form signin  fadeInUp">
      <div className="form">
        <div className="form__header form__header--column">
          <div className="circleIco">{SVG.enter}</div>
          <h6>Log In</h6>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.email}
              <span>Email </span>
              <span className="sup">*</span>
            </div>
          </div>
          <div className="form__column form__column--wide">
            <Input label="Email" />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.lock}
              <span>Password </span>
              <span className="sup">*</span>
            </div>
          </div>
          <div className="form__column form__column--wide">
            <Input label="Password" />
          </div>
        </div>
        <div className="form__terms">
          <div className="form__terms-para">
            <Check id="pass_check" />
            <label htmlFor="pass_check">{"Save Password "}</label>
          </div>
          <a href="" className="link">
            Forget Password
          </a>
        </div>
        <div className="form__buttons">
          <Link to={"/"} className="button button--main">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export const SigninProvider = () => {
  return (
    <div className="login__inner-form signin  fadeInUp">
      <div className="form">
        <div className="form__header form__header--column">
          <div className="circleIco">{SVG.enter}</div>
          <h6>Log In</h6>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.email}
              <span>Email </span>
              <span className="sup">*</span>
            </div>
          </div>
          <div className="form__column form__column--wide">
            <Input label="Email" />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.lock}
              <span>Password </span>
              <span className="sup">*</span>
            </div>
          </div>
          <div className="form__column form__column--wide">
            <Input label="Password" />
          </div>
        </div>
        <div className="form__terms">
          <div className="form__terms-para">
            <Check id="pass_check" />
            <label htmlFor="pass_check">{"Save Password "}</label>
          </div>
          <a href="" className="link">
            Forget Password
          </a>
        </div>
        <div className="form__buttons">
          <Link to={"/provider"} className="button button--main">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
