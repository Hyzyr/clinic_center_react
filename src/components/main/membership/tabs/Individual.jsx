import React from "react";
import * as SVG from "components/items/SVG";

export default function Individual({ choosseFunc, closeFunc }) {
  return (
    <div className="tabs__body tabs__body--membership">
      <div className="membership__container">
        <div className="tabs__body-title">
          <div className="tabs__body-title-ico">{SVG.person}</div>
          <div className="tabs__body-title-text">
            Sign up for an individual subscription
          </div>
        </div>
        <div className="membership__tabs-button">
          <button className="button button--main">Cad 19.99 / month</button>
        </div>
        <ul className="customList">
          <li>
            1 Rhynogo dispatch (Daytime 8am to 7pm) - Rhynogo includes
            phlebotomy, IM injections, Pre-screen visit, Wellness visit, IV
            Therapy and Covid - 19 Testing (not coverd),
          </li>
          <li>2 After hours virtual consultation (7pm to midnight)</li>
          <li>
            Member rates apply for additional Rhynogo services or after hours
            virtual consultation
          </li>
        </ul>
        <div className="membership__tabs-button">
          <button className="button button--main" onClick={choosseFunc}>
            Choose
          </button>
        </div>
      </div>
    </div>
  );
}
