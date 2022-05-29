import React from "react";
import Input from "components/items/Input";
import Select from "components/items/Select";
import * as SVG from "components/items/SVG";

const userFolder = process.env.PUBLIC_URL + "/assets/images/users/";

export default function BookingSearch(props) {
  const back = () => {
    props.back();
  };
  const next = () => {
    props.setStep(props.nextStep);
  };

  return (
    <>
      <div className="booking__search">
        <div className="booking__search-bar">
          <button type="button" className="booking__back" onClick={back}>
            <span className="custIcon custIcon--back"></span>
          </button>

          <div className="booking__search-bar-input">
            <Input
              placeholder="Search doctor’s name"
              iconLeft={true}
              svg={SVG.search}
            />
          </div>
          <div className="booking__search-bar-select">
            <label>Specialty</label>
            <Select list={["aaaa", "bbbb"]} />
          </div>
          <div className="booking__search-bar-select">
            <label>Language</label>
            <Select list={["aaaa", "bbbb"]} />
          </div>
        </div>
        <div className="booking__search-row">
          <BookingCard
            user={{
              name: "John Wick",
              prof: "Nurse Practitioner",
              image: "doc (1).png",
              languages: "English",
              location: "Ontario",
              patients: "4",
            }}
            onClick={next}
          />
          <BookingCard
            user={{
              name: "Samuel el Jackson",
              prof: "Practitioner",
              image: "doc (2).png",
              languages: "Deutch",
              location: "Ontario",
              patients: "4",
            }}
            onClick={next}
          />
          <BookingCard
            user={{
              name: "Johny Depnh",
              prof: "Suregery assistent",
              image: "doc (3).png",
              languages: "English",
              location: "Ontario",
              patients: "4",
            }}
            onClick={next}
          />
          <BookingCard
            user={{
              name: "Johny Depnh",
              prof: "Suregery assistent",
              image: "doc (3).png",
              languages: "English",
              location: "Ontario",
              patients: "4",
            }}
            onClick={next}
          />
          <BookingCard
            user={{
              name: "Johny Depnh",
              prof: "Suregery assistent",
              image: "doc (3).png",
              languages: "English",
              location: "Ontario",
              patients: "4",
            }}
            onClick={next}
          />
          <BookingCard
            user={{
              name: "Johny Depnh",
              prof: "Suregery assistent",
              image: "doc (3).png",
              languages: "English",
              location: "Ontario",
              patients: "4",
            }}
            onClick={next}
          />
        </div>
      </div>
    </>
  );
}

const BookingCard = ({ user, onClick = () => {} }) => {
  return (
    <div className="booking__card">
      <div className="booking__card-image">
        <img src={userFolder + user.image} alt="user phtoto" />
      </div>
      <div className="booking__card-title">{user.name}</div>
      <div className="booking__card-subtitle">{user.prof}</div>
      <div className="booking__card-content">
        <div className="booking__card-content-row">
          <div className="booking__card-content-ico">
            {SVG.transalate}
            Languages
          </div>
          <div className="booking__card-content-title">{user.languages}</div>
        </div>
        <div className="booking__card-content-row">
          <div className="booking__card-content-ico">
            {SVG.locationMark}
            Location
          </div>
          <div className="booking__card-content-title">{user.location}</div>
        </div>
        <div className="booking__card-content-row">
          <div className="booking__card-content-ico">
            {SVG.person}
            Patients
          </div>
          <div className="booking__card-content-title">
            {user.patients} in Queue
          </div>
        </div>
      </div>
      <div className="booking__button">
        <button className="button button--main" onClick={onClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};
