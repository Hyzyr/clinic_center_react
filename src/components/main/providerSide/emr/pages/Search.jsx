import React, { useState } from "react";
import Input from "components/items/Input";
import ProfilePic from "components/items/ProfilePic";
import * as SVG from "components/items/SVG";
import User from "./User";

const Search = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <div className="emrSearch">
        <div className="emrSearch__form">
          <Input label={"First name"} />
          <Input label={"Last name"} />
          <Input label={"Date of Birth"} svg={SVG.calendarDay} />
          <Input label={"Health Card"} />
          <button className="button button--main">Search</button>
        </div>
      </div>
      {user === null && <SearchList />}
      {user !== null && <User />}
    </>
  );
};

const SearchList = ({ data }) => {
  return (
    <>
      <div className="emrSearch__title">3 results found</div>
      <div className="emrSearch__list">
        <div className="emrSearch__list-header">
          <div className="emrSearch__header">Patient Full name</div>
          <div className="emrSearch__header">Date of Birth</div>
          <div className="emrSearch__header small">Sex</div>
          <div className="emrSearch__header">Email</div>
          <div className="emrSearch__header">Phone</div>
          <div className="emrSearch__header">Action</div>
        </div>
        <SearchItem
          data={{
            avatar: "user.png",
            fullName: "Johanna Stevens",
            birthDate: "21 Nov 2000",
            gender: "Male",
            email: "brad@gmail.com",
            phone: "+1 321 654 987",
          }}
        />
        <SearchItem
          data={{
            avatar: "user-1.png",
            fullName: "Johanna Stevens",
            birthDate: "21 Nov 2000",
            gender: "Male",
            email: "brad@gmail.com",
            phone: "+1 321 654 987",
          }}
        />
        <SearchItem
          data={{
            avatar: "user-2.png",
            fullName: "Johanna Stevens 4",
            birthDate: "21 Nov 2000",
            gender: "Male",
            email: "brad@gmail.com",
            phone: "+1 321 654 987",
          }}
        />
        <SearchItem
          data={{
            avatar: "user-1.png",
            fullName: "Johanna Stevens 1",
            birthDate: "21 Nov 2000",
            gender: "Male",
            email: "brad@gmail.com",
            phone: "+1 321 654 987",
          }}
        />
        <SearchItem
          data={{
            avatar: "user.png",
            fullName: "Johanna Stevens 3",
            birthDate: "21 Nov 2000",
            gender: "Male",
            email: "brad@gmail.com",
            phone: "+1 321 654 987",
          }}
        />
      </div>
    </>
  );
};
const SearchItem = ({ data }) => {
  const avatarPath =
    process.env.PUBLIC_URL + "/assets/images/avatars/" + data.avatar;

  return (
    <div className="emrSearch__list-item">
      <div className="emrSearch__list-field first">
        <ProfilePic src={avatarPath} alt="avatar" />
        <strong>{data.fullName}</strong>
      </div>
      <div className="emrSearch__list-field">
        <div className="emrSearch__header">Date of Birth</div>
        <strong>{data.birthDate}</strong>
      </div>
      <div className="emrSearch__list-field small">
        <div className="emrSearch__header">Sex</div>
        <strong>{data.gender}</strong>
      </div>
      <div className="emrSearch__list-field">
        <div className="emrSearch__header">Email</div>
        <strong>{data.email}</strong>
      </div>
      <div className="emrSearch__list-field">
        <div className="emrSearch__header">Phone</div>
        <strong>{data.phone}</strong>
      </div>
      <div className="emrSearch__list-field last">
        <div className="emrSearch__label">View details</div>
      </div>
    </div>
  );
};

export { SearchItem };
export default Search;
