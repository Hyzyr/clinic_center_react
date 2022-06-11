import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./booking/Booking";
import Membership from "./membership/Membership";
import Appointments from "./appointments/Appointments.jsx";
import Account from "./patient/account/Account.jsx";
import Contacts from "./contacts/Contacts.jsx";
import Patient from "./addpatient/AddPatient.jsx";
import ChartSection from "./chartSection/ChartSection";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Main() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Sidebar menu={menu} setMenu={setMenu} />
      <Header menu={menu} setMenu={setMenu} />
      <main className="main">
        <Routes>
          <Route path="/" index element={<ChartSection />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/account" element={<Account />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/patient" element={<Patient />} />
        </Routes>
      </main>
    </>
  );
}
