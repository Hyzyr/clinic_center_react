import React from "react";

const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";
const imgPath =
  process.env.PUBLIC_URL + "/assets/images/illustrations/medical/";

export default function SelectGrid(props) {
  const back = () => {
    props.back();
  };
  return (
    <div className={`booking ${props.frameStyle ?? ""}`}>
      <button type="button" className="booking__back" onClick={back}>
        <span className="custIcon custIcon--back"></span>
      </button>
      <div className="booking__title">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        {props.title && (
          <div className="booking__title-text">{props.title}</div>
        )}
        {props.label && (
          <div className={`booking__title-label ${props.label?.style ?? ""}`}>
            <div className="booking__title-label-ico">
              <img src={imgPath + props.label?.ico} alt="ico" />
            </div>
            <strong>{props.label?.text}</strong>
          </div>
        )}
      </div>
      <div className={`booking__grid ${props.listStyle ?? ""}`}>
        {props.list.map((item, index) => (
          <SelectGridButton {...item} setStep={props.setStep} key={index} />
        ))}
      </div>
    </div>
  );
}

const SelectGridButton = ({
  text,
  img = "",
  subtext = "",
  small = "",
  nextStep,
  setStep = () => {},
}) => {
  const onClick = () => {
    if (nextStep && nextStep !== "") {
      setStep(nextStep);
    }
  };
  return (
    <button className="booking__grid-button" onClick={onClick}>
      <div className="booking__grid-button-img">
        <img src={imgPath + img} alt="ico" />
      </div>
      <span className="booking__grid-button-text">{text}</span>
      {subtext && subtext !== "" && (
        <span className="booking__grid-button-subtext">{subtext}</span>
      )}
      {small && small !== "" && (
        <small className="booking__grid-button-small">{small}</small>
      )}
    </button>
  );
};
