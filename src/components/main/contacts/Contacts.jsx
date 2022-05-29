import Input from "components/items/Input";
import Select from "components/items/Select";
import { send } from "components/items/SVG";
import Text from "components/items/Text";
import React from "react";

export default function Contacts() {
  const usersList = ["Select User", "John Wick", "John Wick 2"];
  const icoPath = process.env.PUBLIC_URL + "/assets/images/logo.png";

  return (
    <div className="contacts">
      <div className="contacts__title ">
        <div className="contacts__title-ico">
          <img src={icoPath} alt="logo" />
        </div>
        <div className="contacts__title-text">
          Who would you like to contact?
        </div>
      </div>
      <div className="contacts__form form">
        <div className="form__row">
          <div className="form__column form__column--wide">
            <Select list={usersList} />
          </div>
          <div className="form__column form__column--wide">
            <Input type="email" placeholder="Mail Subject *" />
          </div>
          <div className="form__column form__column--wide">
            <Text placeholder={"Mail Content *"} />
          </div>
        </div>
        <div className="form__buttons">
          <button className="button button--main">
            {send}
            {" Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
