import React from "react";
import * as SVG from "components/items/SVG";
import InlineInput from "components/items/InlineInput";

export default function General() {
  const avatarPath = process.env.PUBLIC_URL + "/assets/images/avatars/";
  return (
    <>
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.personCircle}</div>
        <div className="tabs__body-title-text">General informations</div>

        <button className="tabs__body-title-button button button--delete">
          <div className="icon">{SVG.bin2}</div>
          <span>Deactivate Account</span>
        </button>
      </div>
      <div className="account__user">
        <div className="account__user-avatar">
          <div className="account__user-avatar-image">
            <img src={avatarPath + "avatar.png"} alt="avatar" />
          </div>
          <button className="account__user-avatar-edit">{SVG.pen}</button>
        </div>
      </div>
      <div className="account__form form">
        <div className="form__row">
          <div className="form__column">
            <InlineInput defaultValue={"Johanna Stevens"} label={"Full name"} />
            <InlineInput
              defaultValue={"invalid date"}
              label={"Date of birth"}
            />
            <InlineInput defaultValue={"Male"} label={"Sex"} />
            <InlineInput defaultValue={"help.@gmail.com"} label={"Email"} />
            <InlineInput defaultValue={"+16476150824"} label={"Mobile"} />
          </div>
          <div className="form__column">
            <InlineInput defaultValue={"Cumilla"} label={"Street Name"} />
            <InlineInput defaultValue={"America"} label={"City"} />
            <InlineInput defaultValue={"Toronto"} label={"Province"} />
            <InlineInput defaultValue={"3050"} label={"Postal Code"} />
          </div>
        </div>
        <div className="form__buttons">
          <button className="button button--secondary">Cancel</button>
          <button className="button button--main">Update Settings</button>
        </div>
      </div>
    </>
  );
}
