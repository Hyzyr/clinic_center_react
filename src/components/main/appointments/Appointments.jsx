import React, { forwardRef } from "react";
import { calendarEmpty } from "components/items/SVG";
import CalendarPopup from "components/items/CalendarPopup";

export default function Appointments() {
  // return <AppointmentEmpty />;
  return (
    <>
      <div className="appointments">
        <h4 className="appointments__title">Upcoming Appointments</h4>
        <div className="appointments__body">
          <ul className="appointments__body-filters">
            <li>{"Doctors"}</li>
            <li>{"Reason"}</li>
            <li>
              {"Date & Time"}
              <CalendarPopup CustomButton={SortDayButton} />
            </li>
            <li>
              {"Status"}
              <div className="appointments__body-filters-buttons">
                <button>
                  <span className="custIcon custIcon--up"></span>
                </button>
                <button>
                  <span className="custIcon custIcon--down"></span>
                </button>
              </div>
            </li>
            <li></li>
          </ul>
          <AppointmentRow
            data={{
              docImage: "doc (1).png",
              docName: "Brad Simmons",
              docProf: "Expert at Disease",
              reason: "Alergy",
              issueDate: "21 July 2021",
              bookingTime: "03:00 PM",
              bookingDate: "21 July 2021",
              status: "Upcoming",
            }}
          />
        </div>
      </div>
      <div className="appointments">
        <h4 className="appointments__title">Changed requests</h4>
        <div className="appointments__body">
          <ul className="appointments__body-filters">
            <li>{"Doctors"}</li>
            <li>{"Reason"}</li>
            <li className="active">{"Date & Time"}</li>
            <li>{"Status"}</li>
            <li></li>
          </ul>
          <AppointmentRow
            data={{
              docImage: "doc (1).png",
              docName: "Brad Simmons",
              docProf: "Expert at Disease",
              reason: "Alergy",
              issueDate: "21 July 2021",
              bookingTime: "03:00 PM",
              bookingDate: "21 July 2021",
              status: "Cancelled",
            }}
          />
          <AppointmentRow
            data={{
              docImage: "doc (2).png",
              docName: "Brad Simmons",
              docProf: "Expert at Disease",
              reason: "Alergy",
              issueDate: "21 July 2021",
              bookingTime: "03:00 PM",
              bookingDate: "21 July 2021",
              status: "Change Request",
            }}
          />
          <AppointmentRow
            data={{
              docImage: "doc (3).png",
              docName: "Brad Simmons",
              docProf: "Expert at Disease",
              reason: "Alergy",
              issueDate: "21 July 2021",
              bookingTime: "03:00 PM",
              bookingDate: "21 July 2021",
              status: "Completed",
            }}
          />
        </div>
      </div>
    </>
  );
}

const SortDayButton = forwardRef(({ onClick }, ref) => (
  <button
    className="appointments__body-filters-dayButton"
    onClick={onClick}
    ref={ref}
  >
    <span className="custIcon custIcon--up"></span>
    <span className="custIcon custIcon--down"></span>
  </button>
));
const AppointmentEmpty = ({ data }) => {
  return (
    <div className="appointments appointments--empty">
      <div className="appointments__empty">
        <div className="appointments__empty-ico">{calendarEmpty}</div>
        <div className="appointments__empty-text">
          Currently you don’t have any appointments to show! Do you wish to add
          one?
        </div>
        <div className="appointments__empty-button">
          <button className="button button--main">Book Now</button>
        </div>
      </div>
    </div>
  );
};
const AppointmentRow = ({ data }) => {
  const imgPath = process.env.PUBLIC_URL + "assets/images/users/";
  let labelClass = "appointments__label";
  labelClass += data.status === "Upcoming" ? " appointments__label--mint" : "";
  labelClass += data.status === "Cancelled" ? " appointments__label--red" : "";
  labelClass +=
    data.status === "Change Request" ? " appointments__label--orange" : "";
  labelClass +=
    data.status === "Completed" ? " appointments__label--green" : "";

  return (
    <div className="appointments__body-row">
      <div className="appointments__item">
        <div className="appointments__item-row">
          <div className="profilePic">
            <img src={imgPath + data.docImage} alt="" />
          </div>
          <div className="appointments__item-column">
            <strong className="appointments__item-title">{data.docName}</strong>
            <span className="appointments__item-para">{data.docProf}</span>
          </div>
        </div>
      </div>
      <div className="appointments__item">
        <div className="appointments__item-column">
          <strong className="appointments__item-title">{data.reason}</strong>
          <span className="appointments__item-para">{data.issueDate}</span>
        </div>
      </div>
      <div className="appointments__item">
        <div className="appointments__item-column">
          <strong className="appointments__item-title">
            {data.bookingTime}
          </strong>
          <span className="appointments__item-para">{data.bookingDate}</span>
        </div>
      </div>
      <div className="appointments__item">
        <div className="appointments__item-column status">
          <strong className="appointments__item-title ">Status</strong>

          <label className={labelClass}>{data.status}</label>
        </div>
      </div>
      <div className="appointments__item">
        <button className="appointments__more">
          <span className="custIcon custIcon--dots"></span>
        </button>
      </div>
    </div>
  );
};
