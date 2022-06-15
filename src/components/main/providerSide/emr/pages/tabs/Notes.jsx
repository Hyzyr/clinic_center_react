import React from "react";
import * as SVG from "components/items/SVG";
import Select from "components/items/Select";
import Text from "components/items/Text";
import { ItemEditableContent } from "components/main/patientSide/chartSection/tabs/Items";
import Input from "components/items/Input";

export default function Notes() {
  const diagnoseList = [
    "X Ray",
    "CT Scan",
    "Electrocardiogram (ECG)",
    "Electroencephalogram (EEG)",
  ];
  const yearsList = ["2022", "2021", "2020", "2019"];
  return (
    <div className="tabs__body tabs__body--notes">
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.doc}</div>
        <div className="tabs__body-title-text">Medical History</div>
      </div>
      <div className="tabs__body-row">
        <div className="tabs__body-column">
          <Input customLabel={"Title"} placeholder={"title goes here"} />
          <Text customLabel={"Description"} placeholder={"description goes here"} />
          <div className="emrUser__buttons">
            <button className="button button--red">Reset</button>
            <button className="button button--main">Save Note</button>
          </div>
        </div>

        <div className="tabs__body-column">
          <ItemEditableContent
            SVG={SVG.doc}
            label={"Title"}
            content={{
              para: "Lorem ipsum dolor sit amet, consectetur which as adipiscing elit. Vitae amet, malesuada aliquam fgh egestas ornare viverra vel elit. Elementum.",
            }}
          />
          <ItemEditableContent
            SVG={SVG.doc}
            label={"Title"}
            content={{
              para: "Lorem ipsum dolor sit amet, consectetur which as adipiscing elit. Vitae amet, malesuada aliquam fgh egestas ornare viverra vel elit. Elementum. Lorem ipsum dolor sit amet, consectetur which as adipiscing elit. Vitae amet, malesuada aliquam fgh egestas ornare viverra vel elit. Elementum.",
            }}
          />
          <ItemEditableContent
            SVG={SVG.doc}
            label={"Title"}
            content={{
              para: "Lorem ipsum dolor sit amet.",
            }}
          />
        </div>
      </div>
    </div>
  );
}
