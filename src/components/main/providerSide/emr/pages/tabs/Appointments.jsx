import React from "react";
import * as SVG from "components/items/SVG";
import Select from "components/items/Select";
import ProfilePic from "components/items/ProfilePic";

const Appointments = () => {
  const dateList = [
    "21 Apr 2022",
    "22 Apr 2022",
    "23 Apr 2022",
    "24 Apr 2022",
    "25 Apr 2022",
    "26 Apr 2022",
    "27 Apr 2022",
    "28 Apr 2022",
  ];
  const timeList = [
    "09.00AM - 10.00AM",
    "10.00AM - 11.00AM",
    "11.00AM - 12.00AM",
    "12.00AM - 01.00PM",
    "01.00PM - 02.00PM",
    "02.00PM - 03.00PM",
    "03.00PM - 04.00PM",
    "04.00PM - 05.00PM",
  ];
  const avatarPath =
    process.env.PUBLIC_URL + "/assets/images/avatars/avatar.png";

  return (
    <div className="tabs__body ">
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.allergy}</div>
        <div className="tabs__body-title-text">Allergies</div>
      </div>
      <div className="tabs__body-row">
        <div className="tabs__body-column">
          <Select label={"Date"} list={dateList} />
          <Select label={"Time"} list={timeList} />
          <div className="emrUser__buttons">
            <button className="button button--red">delete</button>
            <button className="button button--main">
              COMPLETE APPOINTMENT
            </button>
          </div>
        </div>
        <div className="emrUser__details">
          <div className="emrUser__details-user">
            <div className="emrUser__details-user-pic">
              <img src={avatarPath} alt="avatar" />
            </div>
          </div>
          <div className="emrUser__details-row">
            <div className="emrUser__details-label">Full name</div>
            <div className="emrUser__details-text">Johanna Stevens</div>
          </div>
          <div className="emrUser__details-row">
            <div className="emrUser__details-label">Date of birth</div>
            <div className="emrUser__details-text">21 Nov, 2000</div>
          </div>
          <div className="emrUser__details-row">
            <div className="emrUser__details-label">Sex</div>
            <div className="emrUser__details-text">Male</div>
          </div>
          <div className="emrUser__details-row">
            <div className="emrUser__details-label">Email</div>
            <div className="emrUser__details-text">help.@gmail.com</div>
          </div>
          <div className="emrUser__details-row">
            <div className="emrUser__details-label">Mobile</div>
            <div className="emrUser__details-text">+16476150824</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
