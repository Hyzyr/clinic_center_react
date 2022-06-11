import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { SigninPatient, SigninProvider } from "./signin/Signin";
import { SignupPatient, SignupProvider } from "./signup/Signup";

export default function Login() {
  const [menu, setMenu] = useState(true);
  const [tab, setTab] = useState("signup");
  const [type, setType] = useState("Provider");

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
                onClick={() => setType("Patient")}
                className={type === "Patient" ? "active" : ""}
              >
                Patient
              </button>
              <button
                type="button"
                onClick={() => setType("Provider")}
                className={type === "Provider" ? "active" : ""}
              >
                Provider
              </button>
            </div>
            {tab === "signin" && type === "Patient" && <SigninPatient />}
            {tab === "signin" && type === "Provider" && <SigninProvider />}
            {tab === "signup" && type === "Patient" && <SignupPatient />}
            {tab === "signup" && type === "Provider" && <SignupProvider />}
          </div>
        </section>
      </main>
    </>
  );
}
