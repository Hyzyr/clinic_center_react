import React from "react";
import Input from "components/items/Input";
import Select from "components/items/Select";
import * as SVG from "components/items/SVG";
import CustomFile from "components/items/CustomFile";

export default function UserForm({ form, updateForm }) {
  const setFirst = (value) => {
    updateForm({ first: value });
  };
  const setLast = (value) => {
    updateForm({ last: value });
  };
  const setDate = (value) => {
    updateForm({ birthDate: value });
  };
  const setGender = (value) => {
    updateForm({ gender: value });
  };

  return (
    <>
      <div className="form__row">
        <div className="form__column form__column--wide">
          <div className="form__title">
            {SVG.user}
            <span>Name </span>
            <span className="sup">*</span>
          </div>
        </div>
        <div className="form__column">
          <Input setValue={setFirst} label="First & Middle" />
        </div>
        <div className="form__column">
          <Input setValue={setLast} label="Last " />
        </div>
      </div>
      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.calendar}
            <span>Date of Birth </span>
            <span className="sup">*</span>
          </div>
          <Input setValue={setDate} type="date" />
        </div>
        <div className="form__column">
          <div className="form__title">
            {SVG.gender}
            <span>Gender </span>
            <span className="sup">*</span>
          </div>
          <Select onChange={setGender} list={["Male", "Female", "Unset"]} />
        </div>
      </div>
      <div className="form__row">
        <div className="form__column">
          <div className="form__title">
            {SVG.shieldHealth}
            <span>Specialty </span>
            <span className="sup">*</span>
          </div>
          <Select
            onChange={setGender}
            selectedItem="Speciality"
            list={["Doc", "Nurse", "Assitent"]}
          />
        </div>
        <div className="form__column">
          <div className="form__title">
            {SVG.img}
            <span>Upload Photo </span>
            <span className="sup">*</span>
          </div>
          <CustomFile inline />
        </div>
      </div>
    </>
  );
}
