import React, { useEffect, useState } from "react";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header";
import Sidebar, { SidebarPatient } from "../Sidebar";
import Account from "./account/Account";
import AddPatient from "./addpatient/AddPatient";
import Appointments from "./appointments/Appointments";
import Booking from "./booking/Booking";
import ChartSection from "./chartSection/ChartSection";
import Contacts from "./contacts/Contacts";
import Membership from "./membership/Membership";
import * as SVG from "components/items/SVG";

export default function Index() {
  const [menu, setMenu] = useState(false);
  const [breadText, setBreadText] = useState("My Chart");

  const routes = {
    index: {
      link: "index",
      title: "My Chart",
      bread: "My Chart",
      svg: SVG.home,
      porps: {
        index: true,
      }
    },
    booking: {
      removeFromSidebar: true,
      link: "booking",
      title: "",
      bread: "Book an appointment",
    },
    membership: {
      link: "membership",
      title: "Membership",
      bread: "Membership",
      svg: SVG.addUser,
    },
    account: {
      link: "account",
      title: "Account",
      bread: "Account",
      svg: SVG.person,
    },
    appointments: {
      link: "appointments",
      title: "Appointments",
      bread: "Appointments",
      svg: SVG.calendar,
    },
    contacts: {
      link: "contacts",
      title: "Contacts",
      bread: "Contacts",
      svg: SVG.certificate,
    },
    patient: {
      link: "patient",
      title: "Add Patient",
      bread: "Add Patient",
      svg: SVG.contacts,
    },
  };
  const routesLinks = React.useMemo(() =>
    Object.keys(routes).map((key) => routes[key].link)
  );

  const { pathname } = useLocation();
  const currentPath = React.useMemo(
    () =>
      routesLinks.find((route) => {
        if (matchPath({ path: "", exact: true }, pathname) !== null)
          return routes.index.link;
        return (
          matchPath({ path: `/${route}/*`, exact: false }, pathname) !== null
        );
      }),
    [pathname]
  );

  useEffect(() => {
    setBreadText(routes[currentPath]?.bread ?? "");
  }, [currentPath]);

  return (
    <>
      <Sidebar menu={menu} setMenu={setMenu} setBread={setBreadText}>
        <SidebarPatient routes={routes} />
      </Sidebar>

      <Header title={breadText} menu={menu} setMenu={setMenu} />
      <main className="main">
        <Routes>
          <Route path="/" index element={<ChartSection />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/account" element={<Account />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/patient" element={<AddPatient />} />
        </Routes>
      </main>
    </>
  );
}
