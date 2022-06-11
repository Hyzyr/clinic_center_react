import React, { useEffect, useState } from "react";
import * as SVG from "components/items/SVG";
import Input from "components/items/Input";
import Select from "components/items/Select";
import CustomFile from "components/items/CustomFile";
import BookingSearch from "./Steps/BookingSearch";
import InlineInput from "components/items/InlineInput";
import CalendarBig from "../CalendarBig";
import SelectGrid from "./Steps/SelectGrid";
import Summary from "./Steps/Summary";
import Check from "components/items/Check";
import { Link } from "react-router-dom";

const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";
const imgPath =
  process.env.PUBLIC_URL + "/assets/images/illustrations/medical/";
const testList = [
  {
    text: "At Home COVID-19 Testing",
    img: "008-test-results.svg",
    nextStep: "select-covid",
  },
  {
    text: "At Home Blood & Urine Testing",
    img: "007-test-tubes.svg",
    nextStep: "confirmBlood&Urine",
  },
  {
    text: "At Home ECG Testing",
    img: "029-medical-appointment.svg",
    nextStep: "confirmECG",
  },
  {
    text: "At Home IM/SUBQ Injections",
    img: "010-syringe.svg",
    nextStep: "confirmInjections",
  },
  {
    text: "At Home Wellness Visits",
    img: "025-doctor.svg",
    nextStep: "select-home",
  },
  {
    text: "IV Therapy & Hydration",
    img: "intravenous-saline-drip.svg",
    nextStep: "select-hydration",
  },
];
const hydrationList = [
  {
    text: "REHYDRATION THERAPY",
    img: "drops.svg",
    nextStep: "confirmTherapy",
  },
  {
    text: "HANGOVER THERAPY",
    img: "headache.svg",
    nextStep: "confirmTherapy",
  },
  {
    text: "FOOD POISONING RELIEF",
    img: "toxic-apple.svg",
    nextStep: "confirmTherapy",
  },
  {
    text: "MULTI 12 COCKTAIL",
    img: "coctail.svg",
    nextStep: "confirmTherapy",
  },
  {
    text: "MYER’S COCKTAIL",
    img: "coctail2.svg",
    nextStep: "confirmTherapy",
  },
  {
    text: "FLU RELIEF",
    img: "sore-throat.svg",
    nextStep: "confirmTherapy",
  },
];
const homeList = [
  {
    text: "Covid-19 Assessment",
    img: "covid.svg",
    nextStep: "search",
  },
  {
    text: "Sinus, Cough & Allergy",
    img: "sore-throat.svg",
    nextStep: "search",
  },
  {
    text: "Eye & Ear",
    img: "eye-ear.svg",
    nextStep: "search",
  },
  {
    text: "Men & Women's Health",
    img: "parents.svg",
    nextStep: "search",
  },
  {
    text: "Kids Health",
    img: "baby-boy.svg",
    nextStep: "search",
  },
  {
    text: "Chornic & Preventative",
    img: "stethoscope.svg",
    nextStep: "search",
  },
];
const covidList = [
  {
    text: "URGENT PCR < 6 HOURS: ",
    subtext: "$ 249.99 + HST",
    img: "clock-pill.svg",
    nextStep: "confirmCall",
  },
  {
    text: "PCR TESTING:",
    subtext: "$134.99 + HST",
    img: "tube.svg",
    nextStep: "confirmCall",
  },
  {
    text: "ANTIGEN TESTING: ",
    subtext: "$39.99 to $59.99 + HST ",
    small: "(US, EUROPE & CARIBBEAN ONLY)",
    img: "quick-test.svg",
    nextStep: "confirmCall",
  },
];

const testDateList = [
  "07.00 AM - 10.00 AM",
  "10.00 AM - 11.00 AM",
  "11.00 AM - 12.00 PM",
  "01.00 PM - 02.00 PM",
  "03.00 PM - 04.00 PM",
  "07.00 PM - 08.00 AM",
  "08.00 AM - 09.00 AM",
  "09.00 AM - 10.00 AM",
];
export default function Booking() {
  const [prevstep, setPrevstep] = useState("switchhome");
  const [step, setCurrentStep] = useState("switchhome");
  const back = () => {
    setStep(prevstep);
  };
  const setStep = (newstep) => {
    setPrevstep(step);
    setCurrentStep(newstep);
  };
  const commonProps = {
    back,
    step,
    setStep,
  };

  // return <BookingSearch />;
  // return <Summary />;
  return (
    <>
      {step === "switchhome" && <SwitchHome {...commonProps} />}
      {step === "summary" && (
        <Summary {...commonProps} nextStep={"formpayment"} />
      )}
      {step === "search" && (
        <BookingSearch {...commonProps} nextStep={"calendar"} />
      )}
      {step === "addressform" && (
        <FormAddress {...commonProps} nextStep={"select-rhyno"} />
      )}
      {step === "addressform2" && (
        <FormAddress {...commonProps} nextStep={"search"} />
      )}
      {step === "householdform" && (
        <FormHousehold {...commonProps} nextStep={"calendar"} />
      )}
      {step === "switchfuture" && <SwitchFuture {...commonProps} />}
      {step === "formpayment" && (
        <FormPayment
          {...commonProps}
          nextStep={"success"}
          frameStyle={"booking--small"}
        />
      )}
      {step === "formpayment-wide" && (
        <FormPayment
          {...commonProps}
          nextStep={"success"}
          frameStyle={""}
          check=" John Wick consent(s) to the testing samples being taken."
        />
      )}
      {step === "filedrop" && <FileDrop {...commonProps} />}
      {step === "picktime" && (
        <PickTime {...commonProps} list={testDateList} nextStep={"summary"} />
      )}
      {step === "calendar" && (
        <CalendarBig {...commonProps} nextStep={"picktime"} />
      )}
      {step === "select-home" && (
        <SelectGrid
          {...commonProps}
          list={homeList}
          // listStyle={"secondary"}
          label={{
            style: "wide",
            ico: "025-doctor.svg",
            text: "Select the reason for at home assessment",
          }}
        />
      )}
      {step === "select-hydration" && (
        <SelectGrid
          {...commonProps}
          list={hydrationList}
          // listStyle={"secondary"}
          label={{
            style: "wide",
            ico: "intravenous-saline-drip.svg",
            text: "Select the reason for IV Therapy & Hydration",
          }}
        />
      )}
      {step === "select-rhyno" && (
        <SelectGrid
          {...commonProps}
          list={testList}
          title={"Please Choose a RhynoGo Service"}
        />
      )}
      {step === "select-covid" && (
        <SelectGrid
          {...commonProps}
          frameStyle={"booking--widegrid "}
          listStyle={"secondary"}
          list={covidList}
          label={{
            ico: "008-test-results.svg",
            text: "At Home COVID-19 Testing",
          }}
        />
      )}

      {/*  confirm boxes are here  */}
      {step === "confirmTherapy" && (
        <ConfirmBox
          {...commonProps}
          framseStyle="booking--wide"
          label={{
            ico: "010-syringe.svg",
            text: "At Home IM/SUBQ Injections",
          }}
          para={
            "Have you seen a RhynoCare provider provider for consultation regarding this?"
          }
          buttonText={["NO", "YES"]}
          nextStep={"search"}
          backStep={"confirmProvider"}
        />
      )}
      {step === "confirmInjections" && (
        <ConfirmBox
          {...commonProps}
          framseStyle="booking--wide"
          label={{
            ico: "010-syringe.svg",
            text: "At Home IM/SUBQ Injections",
          }}
          para={
            "Do you have a referral/requisition from a provider for this service?"
          }
          buttonText={["Cancel", "OK"]}
          nextStep={"calendar"}
          backStep={"confirmProvider"}
        />
      )}
      {step === "confirmECG" && (
        <ConfirmBox
          {...commonProps}
          framseStyle="booking--wide"
          label={{
            ico: "029-medical-appointment.svg",
            text: "At Home ECG Testing",
          }}
          para={
            "Do you have a referral/requisition from a provider for this service?"
          }
          buttonText={["Cancel", "OK"]}
          nextStep={"calendar"}
          backStep={"confirmProvider"}
        />
      )}
      {step === "confirmBlood&Urine" && (
        <ConfirmBox
          {...commonProps}
          framseStyle="booking--wide"
          label={{
            ico: "007-test-tubes.svg",
            text: "At Home Blood & Urine Testing",
          }}
          para={
            "Do you have a referral/requisition from a provider for this service?"
          }
          buttonText={["Cancel", "OK"]}
          nextStep={"calendar"}
          backStep={"confirmProvider"}
        />
      )}
      {step === "confirmProvider" && (
        <ConfirmBox
          {...commonProps}
          para={
            "Please book an appointment with a provider for the RHYNO GO service assessment."
          }
          text={"At Home COVID-19 Testing"}
          nextStep={"search"}
          buttonText={["Back", "Continue"]}
        />
      )}
      {step === "confirmCall" && (
        <ConfirmBox
          {...commonProps}
          framseStyle="booking--small"
          para={"Please call 416-830-8181 prior to booking"}
          buttonText={["Cancel", "OK"]}
          nextStep={"householdform"}
        />
      )}

      {step === "confirmbox" && (
        <ConfirmBox
          {...commonProps}
          framseStyle="booking--wide"
          label={{
            ico: "008-test-results.svg",
            text: "At Home COVID-19 Testing",
          }}
          para={
            "Do you have a referral/requisition from a provider for this service?"
          }
          text={"At Home COVID-19 Testing"}
          buttonText={["No", "Yes"]}
          nextStep={""}
        />
      )}
      {step === "success" && <Success />}
    </>
  );
}

const Success = (props) => {
  return (
    <div className="successBox">
      <div className="successBox__ico">
        <img src={icoPath} alt="logo" />
      </div>
      <div className="successBox__para">
        Booking Successful Wed, Oct 8, 2022, 10.00 AM - 11.00 AM
      </div>
      <div className="successBox__button">
        <Link to={"/appointments"} className="button button--main">
          See my Appointments!
        </Link>
      </div>
    </div>
  );
};

const FormHousehold = (props) => {
  const back = () => {
    props.back();
  };
  const next = () => {
    props.setStep(props.nextStep);
  };
  return (
    <div className="booking  booking--wide booking--household">
      <div className="booking__title booking__title--back">
        <button type="button" className="booking__back" onClick={back}>
          <span className="custIcon custIcon--back"></span>
        </button>
        <div className="booking__title-label">
          <div className="booking__title-label-ico">
            <img src={imgPath + "008-test-results.svg"} alt="ico" />
          </div>
          <strong>At Home COVID-19 Testing</strong>
        </div>
        <div className="booking__title-info">
          {"URGENT PCR < 6 HOURS:  $ 249.99 + HST"}
        </div>
      </div>
      <div className="booking__form ">
        <div className="form">
          <div className="form__row">
            <div className="form__column form__column--wide">
              <div className="form__title">
                {SVG.family}
                <span>Household Memebers </span>
              </div>
              <Input type="number" numberButtons={true} defaultValue={1} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__column">
              <InlineInput
                defaultValue="Johanna Stevens"
                label={"First name"}
              />
            </div>
            <div className="form__column">
              <InlineInput defaultValue="Hawkings" label={"Last name"} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__column">
              <InlineInput defaultValue="12/11/2000" label={"Date of birth"} />
            </div>
            <div className="form__column">
              <InlineInput defaultValue="Male" label={"Gender"} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__column">
              <InlineInput defaultValue="AB 123456789" label={"Health Card"} />
            </div>
            <div className="form__column">
              <InlineInput defaultValue="AB 123456789" label={"Passport No"} />
            </div>
          </div>
          <div className="form__paging">
            <button className="form__paging-nav">
              <span className="custIcon custIcon--back"></span>
            </button>
            <button className="form__paging-switch">1</button>
            <button className="form__paging-switch ">2</button>
            <button className="form__paging-switch active">3</button>
            <button className="form__paging-switch">4</button>
            <button className="form__paging-switch">5</button>
            <button className="form__paging-nav">
              <span className="custIcon custIcon--next"></span>
            </button>
          </div>

          <div className="form__buttons">
            <button className="button button--secondary">Cancel</button>
            <button className="button button--main" onClick={next}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SwitchHome = (props) => {
  const back = () => {
    props.back();
  };

  return (
    <div className="booking">
      <button type="button" className="booking__close" onClick={back}>
        <span className="custIcon custIcon--error"></span>
      </button>
      <div className="booking__title">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="booking__title-text">Book an Appointment</div>
      </div>
      <div className="booking__switch booking__switch--large">
        <button
          className="booking__switch-button"
          onClick={() => props.setStep("addressform")}
        >
          {SVG.home}
          At home testing Service
        </button>
        <button
          className="booking__switch-button"
          onClick={() => props.setStep("switchfuture")}
        >
          {SVG.devices}
          See a Provider Virtually
        </button>
      </div>
    </div>
  );
};

const SwitchFuture = (props) => {
  const back = () => {
    props.back();
  };

  return (
    <div className="booking">
      <button type="button" className="booking__close" onClick={back}>
        <span className="custIcon custIcon--error"></span>
      </button>
      <div className="booking__title">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="booking__title-text">Book an Appointment</div>
      </div>
      <div className="booking__switch ">
        <button className="booking__switch-button">
          {SVG.sort}
          Virtual Queue
        </button>
        <button
          className="booking__switch-button"
          onClick={() => props.setStep("addressform2")}
        >
          {SVG.schedule}
          Future
        </button>
      </div>
    </div>
  );
};

const FormAddress = (props) => {
  const cityList = [
    "Ottawa",
    "Edmonton",
    "Victoria",
    "Winnipeg",
    "Fredericton",
    "St. John's",
    "Halifax",
    "Toronto",
    "Charlottetown",
    "City",
    "Regina",
    "Yellowknife",
    "Iqaluit",
    "Whitehorse",
  ];
  const back = () => {
    props.back();
  };
  return (
    <div className="booking">
      <button type="button" className="booking__close" onClick={back}>
        <span className="custIcon custIcon--error"></span>
      </button>
      <div className="booking__title ">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="booking__title-text">Book an Appointment</div>
      </div>
      <div className="booking__form form">
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.phone}
              <span>Phone </span>
            </div>
            <Input type="text" placeholder="Phone Number" prefix="+1" />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.locationMark}
              <span>Street address </span>
            </div>
            <Input placeholder="Enter Street Address" />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.city}
              <span>City</span>
            </div>
            <Select list={cityList} />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column form__column--wide">
            <div className="form__title">
              {SVG.gps}
              <span>Zip Code</span>
              <span className="sup">*</span>
            </div>
            <Input type="number" placeholder="area zip code" />
          </div>
        </div>

        <div className="form__buttons">
          <button className="button button--secondary">Reset</button>
          <button
            className="button button--main"
            onClick={() => props.setStep(props.nextStep)}
          >
            Confirm Address
          </button>
        </div>
      </div>
    </div>
  );
};
const FormPayment = (props) => {
  const submit = () => {
    props.setStep(props.nextStep);
  };
  const back = () => {
    props.back();
  };
  return (
    <div className={`booking ${props.frameStyle ?? ""}`}>
      <button type="button" className="booking__close" onClick={back}>
        <span className="custIcon custIcon--error"></span>
      </button>
      <div className="booking__title ">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        {props.check && (
          <div className="booking__title-check">
            <Check id="sign_check" />
            <label htmlFor="sign_check">{props.check}</label>
          </div>
        )}
        <div className="booking__title-text">Make Payment</div>
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

        <div className="form__buttons" onClick={submit}>
          <button className="button button--main">Book Now CAD $50.00</button>
        </div>
      </div>
    </div>
  );
};
const FileDrop = (props) => {
  const back = () => {
    props.back();
  };
  return (
    <div className="booking">
      <button type="button" className="booking__close" onClick={back}>
        <span className="custIcon custIcon--error"></span>
      </button>
      <div className="booking__title ">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="booking__title-text">
          Please upload the referral and any other document
        </div>
      </div>
      <div className="booking__form form">
        <div className="form__row">
          <div className="form__column form__column--wide">
            <CustomFile type="email" label="Email addresss" svg={SVG.email} />
          </div>
        </div>

        <div className="form__buttons form__buttons--single ">
          <button className="button button--main">Continue</button>
        </div>
      </div>
    </div>
  );
};

const PickTime = (props) => {
  const list = props.list;
  const [selected, setSelected] = useState(null);
  const next = () => {
    props.setStep(props.nextStep);
  };
  const back = () => {
    props.back();
  };
  return (
    <div className="booking booking--small">
      <button type="button" className="booking__back" onClick={back}>
        <span className="custIcon custIcon--back"></span>
      </button>
      <div className="booking__title booking__title--text">
        <div className="booking__title-text">Choose a schedule</div>
      </div>
      <div className="booking__tag">
        <div className="booking__tag-ico">
          {SVG.calendar}
          <span>Date</span>
        </div>
        <div className="booking__tag-text">Wed, Oct 8, 2022</div>
      </div>
      <div className="booking__row booking__row--time">
        {list.map((item, index) => (
          <button
            onClick={() => setSelected(item)}
            className={`booking__row-button ${
              selected === item ? "active" : ""
            }`}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="booking__button">
        <button className="button button--main" onClick={next}>
          Continue
        </button>
      </div>
    </div>
  );
};

const ConfirmBox = (props) => {
  const confirm = () => {
    props.setStep(props.nextStep);
  };
  const reject = () => {
    if (props.backStep) {
      props.setStep(props.backStep);
    } else {
      props.back();
    }
  };
  const back = () => {
    if (props.back) {
      props.back();
    } else {
      props.setStep(props.prevstep);
    }
  };
  return (
    <div className={`booking ${props.framseStyle ?? ""}`}>
      <button type="button" className="booking__back" onClick={back}>
        <span className="custIcon custIcon--back"></span>
      </button>
      <div className="booking__title">
        <div className="booking__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        {props.text && <div className="booking__title-text">{props.text}</div>}

        {props.label && (
          <div className="booking__title-label">
            <div className="booking__title-label-ico">
              <img src={imgPath + props.label.ico} alt="ico" />
            </div>
            <strong>{props.label.text}</strong>
          </div>
        )}
      </div>

      <div className="form__info">{props.para}</div>
      <div className="form__buttons">
        <button className="button button--secondary" onClick={reject}>
          {props.buttonText[0]}
        </button>
        <button className="button button--main" onClick={confirm}>
          {props.buttonText[1]}
        </button>
      </div>
    </div>
  );
};
