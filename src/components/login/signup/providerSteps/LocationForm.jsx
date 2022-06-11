import React from "react";
import Input from "components/items/Input";
import Select from "components/items/Select";
import * as SVG from "components/items/SVG";

export default function LocationForm({ form, updateForm }) {
  const setCountry = (value) => {
    updateForm({ first: value });
  };
  const setPostalCode = (value) => {
    updateForm({ postCode: value });
  };
  const setMail = (value) => {
    updateForm({ email: value });
  };
  const setProvince = (value) => {
    updateForm({ province: value });
  };
  const setCity = (value) => {
    updateForm({ city: value });
  };

  return (
    <>
      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.flag}
            <span>Country </span>
            <span className="sup">*</span>
          </div>
          <Input setValue={setCountry} label="Country" />
        </div>
        <div className="form__column">
          <div className="form__title">
            {SVG.flagProvince}
            <span>Province </span>
            <span className="sup">*</span>
          </div>
          <Select
            selectedItem={"State"}
            onChange={setProvince}
            list={["Male", "Female", "Unset"]}
          />
        </div>
      </div>
      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.signpost}
            <span>Mailing Address </span>
            <span className="sup">*</span>
          </div>
          <Input placeholder="Mailing Address" setValue={setMail} type="date" />
        </div>
        <div className="form__column">
          <div className="form__title">
            {SVG.postCode}
            <span>Postal Code </span>
            <span className="sup">*</span>
          </div>
          <Input
            placeholder="Postal Code"
            setValue={setPostalCode}
            type="number"
          />
        </div>
        <div className="form__column form__column--wide">
          <p className="form__para">
            The Street Address and the postal code will auto-populate on Lab
            Requisitions & other forms for patients
          </p>
        </div>
      </div>

      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.city}
            <span>City </span>
            <span className="sup">*</span>
          </div>
          <Input placeholder="City" setValue={setCity} type="text" />
        </div>
      </div>
    </>
  );
}
