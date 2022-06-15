import React from "react";

export default function Sidebar({ tab, setTab, menu, setMenu }) {
  const pubFolder = process.env.PUBLIC_URL;
  const signinFunc = () => {
    setTab("signin");
    setMenu(false);
  };
  const signupFunc = () => {
    setTab("signup");
    setMenu(false);
  };
  return (
    <aside className={`sidebar sidebar--lg ${menu ? "active" : ""}`}>
      <div className="sidebar__inner">
        <div className="sidebar__inner-logo">
          <div className="sidebar__inner-logo-ico">
            <img src={pubFolder + "/assets/images/logo.png"} alt="logo" />
          </div>
          <div className="sidebar__inner-logo-text">
            <img
              src={pubFolder + "/assets/images/logo_text.png"}
              alt="RhynoCare"
            />
          </div>
        </div>
        <div className="sidebar__inner-help lg">
          <div className="sidebar__inner-help-img">
            <img
              src={
                pubFolder + "/assets/images/illustrations/doc_illustration.svg"
              }
              alt="Doc"
            />
          </div>
          <div className="sidebar__inner-help-buttons">
            <div className="button button--main" onClick={signupFunc}>
              Register Now
            </div>
            <div className="button button--secondary" onClick={signinFunc}>
              Log In
            </div>
          </div>
          <div className="sidebar__inner-help-para">
            {tab === "signin" && (
              <>
                {"Don’t have an account? "}
                <span
                  className="link"
                  onClick={() => {
                    console.log("settab signin");
                    setTab("signup");
                  }}
                >
                  Register Now
                </span>
              </>
            )}
            {tab === "signup" && (
              <>
                {"Already have an account? "}
                <span
                  className="link"
                  onClick={() => {
                    console.log("settab signup");
                    setTab("signin");
                  }}
                >
                  Log In
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
