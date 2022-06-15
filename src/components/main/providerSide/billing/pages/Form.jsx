import React from "react";
import * as SVG from "components/items/SVG";
import Input from "components/items/Input";

const Form = ({ setPage }) => {
  const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";

  const back = () => {
    setPage("list");
  };

  return (
    <div className="billingForm fadeInUp">
      <button type="button" className="billingForm__back" onClick={back}>
        <span className="custIcon custIcon--back"></span>
      </button>
      <div className="billingForm__title">
        <div className="billingForm__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="billingForm__title-text">Update Biling</div>
      </div>
      <div className="billingForm__body ">
        <div className="billingForm__body-row">
          <div className="billingForm__body-column2">
            <Input
              customLabel="Full Name"
              defaultValue={"John Wick Maiden"}
              disabled
            />
          </div>
          <div className="billingForm__body-column2">
            <Input
              customLabel="Date of Birth"
              defaultValue={"21 Nov 1999"}
              disabled
            />
          </div>
        </div>
        <div className="billingForm__body-row">
          <div className="billingForm__body-column3">
            <Input customLabel="Fee Code" defaultValue="A134" />
          </div>
          <div className="billingForm__body-column3">
            <Input customLabel="Amount" defaultValue="$50.00" />
          </div>
          <div className="billingForm__body-column3">
            <Input customLabel="Units" defaultValue="1" />
          </div>
        </div>
        <div className="billingForm__body-fee">
          <span>+ Add Custom Fee</span>
        </div>
        <div className="billingForm__body-row">
          <div className="billingForm__body-column2">
            <div className="tags__outer">
              <div className="tag">
                <span>A134</span>
                <button className="tag__close">
                  <span className="custIcon custIcon--error"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="billingForm__body-column2">
            <div className="tags__outer">
              <div className="tag">
                <span>Medical Specific Re-assesment </span>
                <button className="tag__close">
                  <span className="custIcon custIcon--error"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="billingForm__body-row">
          <div className="billingForm__body-column2">
            <Input
              customLabel="Search Diagnostic code"
              defaultValue="523 - Gingvitis"
            />
          </div>
          <div className="billingForm__body-column2">
            <Input
              customLabel="Date of Admission (optional)"
              svg={SVG.calendarDay}
            />
          </div>
        </div>
      </div>
      <div className="billingForm__footer">
        <div className="billingForm__footer-title">
          Biling Amount: CAD $50.00
        </div>
        <div className="billingForm__footer-buttons">
          <button className="button button--secondary" onClick={back}>
            Cancel
          </button>
          <button className="button button--main" onClick={back}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
