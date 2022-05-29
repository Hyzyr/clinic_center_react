import React from "react";
import * as SVG from "components/items/SVG";
import Select from "components/items/Select";
import { ItemEditableContent } from "./Items";
import Text from "components/items/Text";

export default function History() {
  const diagnoseList = [
    "X Ray",
    "CT Scan",
    "Electrocardiogram (ECG)",
    "Electroencephalogram (EEG)",
  ];
  const yearsList = ["2022", "2021", "2020", "2019"];
  return (
    <div className="tabs__body tabs__body--allergies">
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.shield}</div>
        <div className="tabs__body-title-text">Medical History</div>
      </div>
      <div className="tabs__body-row">
        <div className="tabs__body-column">
          <Select label={"Past Diagnose"} list={diagnoseList} />
          <Select label={"Year"} list={yearsList} />
          <Text title={"Comments"} placeholder={"Not Sure"} />
          {/* <Input label={"Add Allergy"} /> */}
          <button className="button button--main">SAVE</button>
        </div>

        <div className="tabs__body-column">
          <ItemEditableContent
            SVG={SVG.graph}
            label={"Smoking"}
            content={{
              title: "2022 - ",
              para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis magni, perferendis tempora ullam voluptas quod doloribus reprehenderit dicta at eius, esse eligendi ducimus iusto numquam mollitia laborum similique nemo unde?",
            }}
          />
          <ItemEditableContent
            SVG={SVG.graph}
            label={"Alcohol"}
            content={{
              title: "2022 - ",
              para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis magni, perferendis tempora ullam voluptas quod doloribus reprehenderit dicta at eius, esse eligendi ducimus iusto numquam mollitia laborum similique nemo unde?",
            }}
          />
        </div>
      </div>
    </div>
  );
}
