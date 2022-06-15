import React from "react";
import * as SVG from "components/items/SVG";
import Select from "components/items/Select";
import { ItemEditable } from "./Items";

export default function Allergies() {
  const AllergiesList = [
    "Peanut",
    "Olive Oil",
    "Hilsha Fish",
    "Prawn",
    "Capsule",
    "Tablet",
    "Inhalers",
    "Drops",
  ];
  return (
    <div className="tabs__body ">
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.allergy}</div>
        <div className="tabs__body-title-text">Allergies</div>
      </div>
      <div className="tabs__body-row">
        <div className="tabs__body-column">
          <Select label={"Add Allergy"} list={AllergiesList} />
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
