import React from "react";
import * as SVG from "components/items/SVG";
import CustomFile from "components/items/CustomFile";
import { ItemEditable } from "./Items";

export default function Sent() {
  return (
    <div className="tabs__body ">
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.doc}</div>
        <div className="tabs__body-title-text">
          Documents/Referrals to upload
        </div>
      </div>
      <div className="tabs__body-row">
        <div className="tabs__body-column">
          <CustomFile />
        </div>

        {/* second column */}
        <div className="tabs__body-column">
          <ItemEditable SVG={SVG.doc} label={"Covid_Report.pdf"} />
          <ItemEditable SVG={SVG.pdf} label={"Covid_Report v2.doc"} />
          <ItemEditable SVG={SVG.img} label={"snapshots.png"} />
        </div>
      </div>
    </div>
  );
}
