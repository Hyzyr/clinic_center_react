import React from "react";
import * as SVG from "components/items/SVG";
import InlineInput from "components/items/InlineInput";
import SignatureInput from "components/items/SignatureInput";

export default function General() {
  const avatarPath = process.env.PUBLIC_URL + "/assets/images/avatars/";
  return (
    <>
      <div className="tabs__body-title">
        <div className="tabs__body-title-ico">{SVG.personCircle}</div>
        <div className="tabs__body-title-text">General informations</div>
        <div className="tabs__body-title-buttons">
          <button className="button button--public">
            <div className="icon">{SVG.lock}</div>
            <span>Profile Data: Public</span>
          </button>
          <button className="button button--delete">
            <div className="icon">{SVG.bin2}</div>
            <span>Deactivate Account</span>
          </button>
        </div>
      </div>
      <div className="account__form account__form--user form">
        <div className="form__row">
          <div className="form__column">
            <div className="account__user">
              <div className="account__user-avatar large">
                <div className="account__user-avatar-image">
                  <img src={avatarPath + "avatar.png"} alt="avatar" />
                </div>
                <button className="account__user-avatar-edit">{SVG.pen}</button>
              </div>
              <div className="account__user-form">
                <InlineInput defaultValue={"English"} label={"Language"} />
                <InlineInput
                  defaultValue={"Family Medicine"}
                  label={"Specialty"}
                />
              </div>
            </div>
          </div>
          <div className="form__column">
            <div className="account__user-signature">
              <div className="inlineInput__label">Signature</div>
              <SignatureInput path={"signature1.png"} />
            </div>
          </div>
        </div>
      </div>

      <div className="account__form form">
        <div className="form__row">
          <div className="form__column">
            <InlineInput defaultValue={"Johanna Stevens"} label={"Full name"} />
            <InlineInput
              defaultValue={"invalid date"}
              label={"Date of birthrth"}
            />
            <InlineInput defaultValue={"Male"} label={"Sex"} />
            <InlineInput
              defaultValue={"help.@gmail.com"}
              label={"Email Address"}
            />
            <InlineInput
              defaultValue={"+16476150824"}
              label={"Mobile Number"}
            />
            <InlineInput defaultValue={"012345678999"} label={"Billing Info"} />
          </div>
          <div className="form__column">
            <InlineInput defaultValue={"Cumilla"} label={"Road Name"} />
            <InlineInput defaultValue={"America"} label={"City"} />
            <InlineInput defaultValue={"Toronto"} label={"State"} />
            <InlineInput defaultValue={"3050"} label={"Zip/Postal Code"} />
            <InlineInput defaultValue={"America"} label={"Zone"} />
            <InlineInput
              defaultValue={"AB 012345678999"}
              label={"License Info"}
            />
          </div>
        </div>
        <div className="form__buttons">
          <button className="button button--secondary">Reset</button>
          <button className="button button--main">Update Settings</button>
        </div>
      </div>
    </>
  );
}
