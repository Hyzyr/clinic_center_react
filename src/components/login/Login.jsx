import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Login() {
  const [menu, setMenu] = useState(true);
  const [tab, setTab] = useState("signin");
  const [account, setAccount] = useState("Patient");
  return (
    <>
      <Sidebar tab={tab} setTab={setTab} menu={menu} setMenu={setMenu} />
      <Header menu={menu} setMenu={setMenu} />
      <main className="main main--noheader main--login">
        <section className="login">
          <div className="login__inner">
            <div className="login__inner-buttons">
              <button
                type="button"
                onClick={() => setAccount("Patient")}
                className={account === "Patient" ? "active" : ""}
              >
                Patient
              </button>
              <button
                type="button"
                onClick={() => setAccount("Provider")}
                className={account === "Provider" ? "active" : ""}
              >
                Provider
              </button>
            </div>
            {tab === "signin" && <Signin />}
            {tab === "signup" && <Signup />}
          </div>
        </section>
      </main>
    </>
  );
}
