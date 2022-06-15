import React from "react";
import * as SVG from "components/items/SVG";

const List = () => {
  const testData = {
    serviceDate: "12 Apr 2022",
    firstName: "John Wick",
    lastName: "Madien",
    dateofBirth: "21 Nov 1999",
    healthCard: "3232564CT",
    feeCode: "A123",
    diagonsticCode: "523 - Ginivits",
    amountHC: "$50.00",
    amountTotal: "$50.00",
  };

  return (
    <div className="billing">
      <div className="billing__info">
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
      <div className="billing__list">
        <div className="billing__list-headers">
          <div className="billing__list-header">Service Date</div>
          <div className="billing__list-header">First Name</div>
          <div className="billing__list-header">Last Name</div>
          <div className="billing__list-header">Date of Birth</div>
          <div className="billing__list-header">Health Card</div>
          <div className="billing__list-header">Fee Code</div>
          <div className="billing__list-header">Diagonstic Code</div>
          <div className="billing__list-header">Amount(HC)</div>
          <div className="billing__list-header">Amount(Total)</div>
        </div>
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
        <ListItem data={testData} />
      </div>
    </div>
  );
};
const ListItem = ({ data }) => {
  return (
    <div className="billing__list-item">
      <div className="billing__list-item-field">
        <div className="billing__list-header">Service Date</div>
        <div className="billing__list-text">{data.serviceDate}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">First Name</div>
        <div className="billing__list-text">{data.firstName}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">Last Name</div>
        <div className="billing__list-text">{data.lastName}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">Date of Birth</div>
        <div className="billing__list-text">{data.dateofBirth}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">Health Card</div>
        <div className="billing__list-text">{data.healthCard}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">Fee Code</div>
        <div className="billing__list-text">{data.feeCode}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">Diagonstic Code</div>
        <div className="billing__list-text">{data.diagonsticCode}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">Amount(HC)</div>
        <div className="billing__list-text">{data.amountHC}</div>
      </div>
      <div className="billing__list-item-field">
        <div className="billing__list-header">Amount(Total)</div>
        <div className="billing__list-text">{data.amountTotal}</div>
      </div>
      <div className="billing__list-item-buttons">
        <button className="billing__list-edit">
          <span>Edit</span> {SVG.pen}
        </button>
      </div>
    </div>
  );
};
export default List;
