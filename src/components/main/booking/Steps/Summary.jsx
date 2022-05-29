import * as SVG from "components/items/SVG";
import React from "react";
import Input from "components/items/Input";
import Check from "components/items/Check";
import ProfilePic from "components/items/ProfilePic";

export default function Summary(props) {
  const back = () => {
    props.back();
  };
  const next = () => {
    props.setStep(props.nextStep);
  };
  const avatarPath = process.env.PUBLIC_URL + "assets/images/avatars/user.png";
  return (
    <>
      <div className="bookingSummary">
        <button type="button" className="booking__back" onClick={back}>
          <span className="custIcon custIcon--back"></span>
        </button>
        <div className="bookingSummary__title">
          <h4>Booking Summary</h4>
        </div>
        <div className="bookingSummary__row">
          <div className="bookingSummary__column">
            <div className="bookingSummary__content">
              <div className="bookingSummary__content-title">
                <h5>Patient Information</h5>
                <button>{SVG.pen}</button>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.phone} Languages
                </div>
                <div className="bookingSummary__content-info-text">English</div>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.locationMark} Location
                </div>
                <div className="bookingSummary__content-info-text">Ontario</div>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.city} Patients
                </div>
                <div className="bookingSummary__content-info-text">
                  4 in Queue
                </div>
              </div>
            </div>
          </div>
          <div className="bookingSummary__column">
            <div className="bookingSummary__content">
              <div className="bookingSummary__content-title">
                <h5>Provider Information</h5>
                <button>{SVG.pen}</button>
              </div>
              <div className="bookingSummary__content-user">
                <ProfilePic src={avatarPath} alt="avatar" />
                <div className="bookingSummary__content-user-info">
                  <strong>John Wick</strong>
                  <span>Nurse Practitioner</span>
                </div>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.phone} Phone Number
                </div>
                <div className="bookingSummary__content-info-text">
                  +12345678966
                </div>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.locationMark} Street Address
                </div>
                <div className="bookingSummary__content-info-text">
                  20 Ranipukur Lane, Agra
                </div>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.city} City
                </div>
                <div className="bookingSummary__content-info-text">Ontario</div>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.gps} Zip Code
                </div>
                <div className="bookingSummary__content-info-text">8200</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bookingSummary__row">
          <div className="bookingSummary__column">
            <div className="bookingSummary__content">
              <div className="bookingSummary__content-title">
                <h5>Schedule Time & date</h5>
                <button>{SVG.pen}</button>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.calendar} Date
                </div>
                <div className="bookingSummary__content-info-text">
                  Wed, Oct 8, 2022
                </div>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.schedule} Time
                </div>
                <div className="bookingSummary__content-info-text">
                  10.00 AM - 11.00 AM
                </div>
              </div>
            </div>
          </div>
          <div className="bookingSummary__column">
            <div className="bookingSummary__content">
              <div className="bookingSummary__content-title">
                <h5>Attachments</h5>
                <button>{SVG.pen}</button>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.pdf}
                </div>
                <div className="bookingSummary__content-info-text">
                  specialcases123_doc.pdf
                </div>
              </div>
              <div className="bookingSummary__content-info">
                <div className="bookingSummary__content-info-title">
                  {SVG.pdf}
                </div>
                <div className="bookingSummary__content-info-text">
                  reffereal_doc.pdf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bookingSummary">
        <div className="bookingSummary__check">
          <Check id="health-card" />
          <label htmlFor="health-card">
            {"I have a provincial health card"}
          </label>
        </div>
        <div className="bookingSummary__row bookingSummary__row--custom">
          <div className="bookingSummary__column">
            <div className="form">
              <div className="form__title">
                {SVG.shieldHealth}
                <span>Health Card</span>
                <span className="sup">*</span>
              </div>
              <Input type="text" placeholder="AB 123456789" />
              <div className="form__title">
                {SVG.calendar}
                <span>Date of Expiry</span>
                <span className="sup">*</span>
              </div>
              <Input type="date" placeholder="AB 123456789" />
            </div>
          </div>
          <div className="bookingSummary__column">
            <div className="bookingSummary__buttons">
              <button className="button button--secondary">Reset</button>
              <button className="button button--main" onClick={next}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
