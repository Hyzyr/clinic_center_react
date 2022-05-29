import React, { useState } from "react";
import General from "./tabs/General";
import Security from "./tabs/Security";

export default function Account() {
  const [tab, setTab] = useState("General");
  const checkClass = (tabName) => (tab === tabName ? "active" : "");
  const swapTab = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="account">
      <div className="account__tabs tabs">
        <div className="tabs__buttons">
          <div className="tabs__buttons-inner">
            <button
              className={checkClass("General")}
              onClick={() => swapTab("General")}
            >
              General informations
            </button>
            <button
              className={checkClass("Security")}
              onClick={() => swapTab("Security")}
            >
              Security
            </button>
          </div>
        </div>
        <div className="tabs__body ">
          {tab === "General" && <General />}
          {tab === "Security" && <Security />}
        </div>
      </div>
    </div>
  );
}
