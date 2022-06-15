import React from "react";
import * as SVG from "components/items/SVG";
import CustomFile from "components/items/CustomFile";
import { Item } from "./Items";

export default function Recieved() {
  return (
    <div className="tabs__body ">
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.doc}</div>
        <div className="tabs__body-title-text">Documents sent by provider</div>
      </div>
      <div className="tabs__body-row">
        <div className="tabs__body-column">
          <Item SVG={SVG.doc} label={"Covid_Report.pdf"} />
          <Item SVG={SVG.pdf} label={"Covid_Report v2.doc"} />
          <Item SVG={SVG.img} label={"snapshots.png"} />
        </div>
      </div>
    </div>
  );
}
