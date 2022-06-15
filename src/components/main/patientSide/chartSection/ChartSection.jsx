import React, { useEffect, useState } from "react";
import Allergies from "./tabs/Allergies";
import Medications from "./tabs/Medications";
import Social from "./tabs/Social";
import History from "./tabs/History";
import Sent from "./tabs/Sent";
import Recieved from "./tabs/Recieved";
import ProfilePic from "components/items/ProfilePic";
import Loading from "components/items/Loading";

export default function ChartSection() {
  const [tab, setTab] = useState("Allergies");
  const [loading, setLoading] = useState(true);
  const avatarPath = process.env.PUBLIC_URL + "/assets/images/avatars/";
  const checkClass = (tabName) => (tab === tabName ? "active" : "");
  const swapTab = (tabName) => {
    setTab(tabName);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="welcome fadeInUp">
        <div className="welcome__row">
          <div className="card card--main">
            <div className="card__title">Hello test Acc,</div>
            <p className="card__para">
              Please fill out your medical history and allergies below to the
              best of your knowledge prior to booking an online consultation. If
              this is a medical emergency, please call 9-1-1 or go to your
              nearest emergency department.
            </p>
          </div>
          <div className="card card--main">
            <div className="card__title">Upcoming Appointments</div>
            <div className="card__row">
              <div className="card card--white card--date">
                <strong>05</strong>
                <span>Appointments</span>
              </div>
              <div className="card card--white card--user">
                <ProfilePic src={avatarPath + "user-1.png"} />
                <div className="card__content">
                  <strong>Dr. Michale Doe</strong>
                  <span>Alergy Specialist</span>
                  <div className="card__content-group">
                    <span className="color--main">10-July - </span>
                    <span className="color--secondary">10:00 AM</span>
                  </div>
                </div>
              </div>
              <div className="card card--white card--user">
                <ProfilePic src={avatarPath + "user-2.png"} />
                <div className="card__content">
                  <strong>Dr. Michale Doe</strong>
                  <span>Alergy Specialist</span>
                  <div className="card__content-group">
                    <span className="color--main">10-July - </span>
                    <span className="color--secondary">10:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tabs fadeInUp">
        <div className="tabs__buttons">
          <div className="tabs__buttons-inner">
            <button
              className={checkClass("Allergies")}
              onClick={() => swapTab("Allergies")}
            >
              Allergies
            </button>
            <button
              className={checkClass("Current medications")}
              onClick={() => swapTab("Current medications")}
            >
              Current medications
            </button>
            <button
              className={checkClass("Social History")}
              onClick={() => swapTab("Social History")}
            >
              Social History
            </button>
            <button
              className={checkClass("Medical History")}
              onClick={() => swapTab("Medical History")}
            >
              Medical History
            </button>
            <button
              className={checkClass("Documents sent")}
              onClick={() => swapTab("Documents sent")}
            >
              Documents sent
            </button>
            <button
              className={checkClass("Documents recieved")}
              onClick={() => swapTab("Documents recieved")}
            >
              Documents recieved
            </button>
          </div>
        </div>
        {loading ? (
          <div className="tabs__body ">
            <Loading />
          </div>
        ) : (
          <>
            {tab === "Allergies" && <Allergies />}
            {tab === "Current medications" && <Medications />}
            {tab === "Social History" && <Social />}
            {tab === "Medical History" && <History />}
            {tab === "Documents sent" && <Sent />}
            {tab === "Documents recieved" && <Recieved />}
          </>
        )}
      </section>
    </>
  );
}
