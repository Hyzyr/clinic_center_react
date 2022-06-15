import React, { useEffect, useState } from "react";
import Loading from "components/items/Loading";
import Allergies from "components/main/patientSide/chartSection/tabs/Allergies";
import History from "components/main/patientSide/chartSection/tabs/History";
import Medications from "components/main/patientSide/chartSection/tabs/Medications";
import Recieved from "components/main/patientSide/chartSection/tabs/Recieved";
import Social from "components/main/patientSide/chartSection/tabs/Social";
import Appointments from "./tabs/Appointments";
import Notes from "./tabs/Notes";

const User = () => {
  const [tab, setTab] = useState("Appointments");
  const [loading, setLoading] = useState(true);

  const checkClass = (tabName) => (tab === tabName ? "active" : "");
  const swapTab = (tabName) => {
    setTab(tabName);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="emrUser">
      <div className="emrUser__tabs tabs fadeInUp">
        <div className="tabs__buttons">
          <div className="tabs__buttons-inner">
            <button
              className={checkClass("Appointments")}
              onClick={() => swapTab("Appointments")}
            >
              Appointments
            </button>
            <button
              className={checkClass("Notes")}
              onClick={() => swapTab("Notes")}
            >
              Notes
            </button>
            <button
              className={checkClass("Documents from Patient")}
              onClick={() => swapTab("Documents from Patient")}
            >
              Documents from Patient
            </button>
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
          </div>
        </div>
        {loading ? (
          <div className="tabs__body ">
            <Loading />
          </div>
        ) : (
          <>
            {tab === "Appointments" && <Appointments />}
            {tab === "Notes" && <Notes />}
            {tab === "Documents from Patient" && <Recieved />}
            {tab === "Allergies" && <Allergies />}
            {tab === "Current medications" && <Medications />}
            {tab === "Social History" && <Social />}
            {tab === "Medical History" && <History />}
            {tab === "Progress Note Template" && <History />}
          </>
        )}
      </div>
    </div>
  );
};

export default User;
