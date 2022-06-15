import React, { useEffect, useState } from "react";
import { Link, matchPath, Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header";
import Sidebar, { SidebarPatient, SidebarProvider } from "../Sidebar";
import * as SVG from "components/items/SVG";
import Appointments from "./appointments/Appointments";
import Emr from "./emr/Emr";
import Billing from "./billing/Billing";
import Contacts from "../patientSide/contacts/Contacts";
import Account from "./account/Account";
import ProfilePic from "components/items/ProfilePic";

export default function Index() {
  const [menu, setMenu] = useState(false);
  const [breadText, setBreadText] = useState("My Chart");
  const avatarPath = process.env.PUBLIC_URL + "/assets/images/avatars/user.png";

  const routes = {
    appointments: {
      link: "index",
      title: "Appointments",
      bread: "Appointment Calender",
      svg: SVG.calendar,
      props: {
        end: true,
      },
    },
    account: {
      svg: SVG.person,
      link: "account",
      title: "Account",
      bread: "Account",
    },
    emr: {
      link: "emr",
      title: "EMR",
      bread: "EMR",
      svg: SVG.emr,
    },
    billing: {
      link: "billing",
      title: "Billing",
      bread: "Billing",
      svg: SVG.receipt,
    },
    contacts: {
      link: "contacts",
      title: "Contacts",
      bread: "Contacts",
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
        if (matchPath({ path: "/provider", exact: true }, pathname) !== null)
          return routes.appointments.link;
        return (
          matchPath(
            { path: `/provider/${route}/*`, exact: false },
            pathname
          ) !== null
        );
      }),
    [pathname]
  );

  useEffect(() => {
    if (currentPath === routes.appointments.link)
      setBreadText(routes.appointments.bread);
    else setBreadText(routes[currentPath]?.bread ?? "");
  }, [currentPath]);

  return (
    <>
      <Sidebar menu={menu} setMenu={setMenu} setBread={setBreadText}>
        <SidebarProvider routes={routes} />
      </Sidebar>
      <Header menu={menu} setMenu={setMenu}>
        <div className="header__inner-group">
          <div className="header__inner-bread">
            <div className="header__inner-bread-ico">{SVG.lines}</div>
            <div className="header__inner-bread-title">{breadText}</div>
          </div>
          <div className="header__inner-content">
            <button className="bellButton bellButton--new">{SVG.bell}</button>
            <ProfilePic src={avatarPath} alt="avatar" />
          </div>
        </div>
      </Header>
      <main className="main">
        <Routes>
          <Route path="" index element={<Appointments />} />
          <Route path={routes.account.link} element={<Account />} />
          <Route path={routes.emr.link} element={<Emr />} />
          <Route path={routes.billing.link} element={<Billing />} />
          <Route path={routes.contacts.link} element={<Contacts />} />
        </Routes>
      </main>
    </>
  );
}
