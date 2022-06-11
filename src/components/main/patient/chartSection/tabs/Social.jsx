import React from "react";
import * as SVG from "components/items/SVG";
import Select from "components/items/Select";
import { ItemEditable } from "./Items";

export default function Social() {
  const socialList = [
    "Smoking",
    "Alcohol",
    "Recreational Drug Use",
    "Gender Identity",
  ];
  return (
    <div className="tabs__body tabs__body--allergies">
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.shield}</div>
        <div className="tabs__body-title-text">Social History</div>
      </div>
      <div className="tabs__body-row">
        <div className="tabs__body-column">
          <Select label={"Type"} list={socialList} />

          {/* <Input label={"Add Allergy"} /> */}
          <button className="button button--main">SAVE</button>
        </div>
        <div className="tabs__body-column">
          <ItemEditable SVG={SVG.allergy} label={"Smoking"} />
          <ItemEditable SVG={SVG.allergy} label={"Alcohol"} />
        </div>
      </div>
    </div>
  );
}
