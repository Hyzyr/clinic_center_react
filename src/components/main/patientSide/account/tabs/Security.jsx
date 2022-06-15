import React from "react";
import * as SVG from "components/items/SVG";
import InlineInput from "components/items/InlineInput";

export default function Security() {
  const avatarPath = process.env.PUBLIC_URL + "/assets/images/avatars/";

  return (
    <>
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.shield}</div>
        <div className="tabs__body-title-text">Security</div>
        <button className="tabs__body-title-button button button--delete">
          <div className="icon">{SVG.lock}</div>
          <span>Forget Password?</span>
        </button>
      </div>

      <div className="account__form form">
        <div className="form__row">
          <div className="form__column">
            <InlineInput
              type="password"
              defaultValue={"1234567890"}
              label={"Old Password"}
            />
            <InlineInput
              type="password"
              defaultValue={"1234567890"}
              label={"New Password"}
            />
            <InlineInput
              type="password"
              defaultValue={"1234567890"}
              label={"Confirm Password"}
            />
          </div>
        </div>
        <div className="form__row">
          <div className="form__column">
            <div className="form__buttons">
              <button className="button button--secondary">Cancel</button>
              <button className="button button--main">Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
