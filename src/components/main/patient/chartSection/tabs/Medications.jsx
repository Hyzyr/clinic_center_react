import React from "react";
import * as SVG from "components/items/SVG";
import Select from "components/items/Select";
import { ItemEditable } from "./Items";

export default function Medications() {
  const medicationsList = [
    "Capsule",
    "Tablet",
    "Inhalers",
    "Drops",
    "Injection",
    "Syrup",
  ];
  return (
    <div className="tabs__body tabs__body--allergies">
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.medications}</div>
        <div className="tabs__body-title-text">Current medications</div>
      </div>
      <div className="tabs__body-row">
        <div className="tabs__body-column">
          <Select label={"Type"} list={medicationsList} />

          {/* <Input label={"Add Allergy"} /> */}
          <button className="button button--main">SAVE</button>
        </div>
        <div className="tabs__body-column">
          <ItemEditable SVG={SVG.allergy} label={"Test"} />
          <ItemEditable SVG={SVG.allergy} label={"Test"} />
        </div>
      </div>
    </div>
  );
}
