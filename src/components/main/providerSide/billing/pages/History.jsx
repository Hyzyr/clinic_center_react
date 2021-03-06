import React from "react";
import * as SVG from "components/items/SVG";

const History = ({ setPage }) => {
  const testData = {
    month: "December",
    fileName: "Covid19_extracautiousness v2.pdf",
    createDate: "21 Nov 1999",
  };
  const testList = [testData, testData, testData];

  const back = () => {
    setPage("list");
  };
  return (
    <div className="billing fadeInUp">
      <div className="billing__info">
        <button type="button" className="billing__info-back" onClick={back}>
          <span className="custIcon custIcon--back"></span>
        </button>
        <div className="billing__info-label">
          <span>22Jul - 22Dec, 2022</span>
          {SVG.calendarDay}
        </div>
        <div className="billing__info-buttons">
          <button className="button button--main">
            {SVG.receipt} Billing History
          </button>
          <button className="button button--main">
            {SVG.download} Download CSV
          </button>
        </div>
      </div>
      <div className="billing__list billing__list--auto">
        <div className="billing__list-headers">
          <div className="billing__list-header left">Month</div>
          <div className="billing__list-header left wide">File Name</div>
          <div className="billing__list-header">Create Date</div>
        </div>
        {testList.map((data, index) => (
          <HistoryItem data={data} key={index} />
        ))}
      </div>
    </div>
  );
};
const HistoryItem = ({ data }) => {
  return (
    <div className="billing__list-item">
      <div className="billing__list-item-field left">
        <div className="billing__list-header">Month</div>
        <div className="billing__list-text">{data.month}</div>
      </div>
      <div className="billing__list-item-field left wide">
        <div className="billing__list-header">File Name</div>
        <div className="billing__list-text">{data.fileName}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">Create Date</div>
        <div className="billing__list-text">{data.createDate}</div>
      </div>
    </div>
  );
};
export default History;
