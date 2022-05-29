import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as SVG from "components/items/SVG";

export default function Sidebar({ menu, setMenu }) {
  const pubFolder = process.env.PUBLIC_URL;

  const close = () => {
    setMenu(false);
  };
  useEffect(() => {
    if (menu) document.body.classList.add("active");
    else document.body.classList.remove("active");
  }, [menu]);

  return (
    <aside className={`sidebar ${menu ? "active" : ""}`} onClick={close}>
      <div className="sidebar__inner">
        <div className="sidebar__inner-links">
          <NavLink to={"/"} className="sidebar__inner-link">
            <div className="sidebar__inner-link-ico">{SVG.home}</div>
            <div className="sidebar__inner-link-text">My Chart</div>
          </NavLink>
          <NavLink to={"/patient"} className="sidebar__inner-link">
            <div className="sidebar__inner-link-ico">{SVG.addUser}</div>
            <div className="sidebar__inner-link-text">Add Patient</div>
          </NavLink>
          <NavLink to={"/account"} className="sidebar__inner-link">
            <div className="sidebar__inner-link-ico">{SVG.person}</div>
            <div className="sidebar__inner-link-text">Account</div>
          </NavLink>
          <NavLink to={"/appointments"} className="sidebar__inner-link">
            <div className="sidebar__inner-link-ico">{SVG.calendar}</div>
            <div className="sidebar__inner-link-text">Appointments</div>
          </NavLink>
          <NavLink to={"/membership"} className="sidebar__inner-link">
            <div className="sidebar__inner-link-ico">{SVG.certificate}</div>
            <div className="sidebar__inner-link-text">Membership</div>
          </NavLink>
          <NavLink to={"/contacts"} className="sidebar__inner-link">
            <div className="sidebar__inner-link-ico">{SVG.contacts}</div>
            <div className="sidebar__inner-link-text">Contacts</div>
          </NavLink>
          <NavLink to={"/login"} className="sidebar__inner-link red">
            <div className="sidebar__inner-link-ico">{SVG.exit}</div>
            <div className="sidebar__inner-link-text">Sign Out</div>
          </NavLink>
        </div>
        <div className="sidebar__inner-button">
          <NavLink to={"/booking"} className="button button--main">
            Book now
          </NavLink>
        </div>

        <div className="sidebar__inner-help">
          <div className="sidebar__inner-help-img">
            <img
              src={
                pubFolder + "assets/images/illustrations/doc_illustration.svg"
              }
              alt="Doc"
            />
          </div>
          <div className="sidebar__inner-help-card">
            <strong>Do you need help?</strong>
            <a href="tel:4168308181">416-830-8181</a>
            <a href="tel:18557496646">1-855-749-6646</a>
          </div>
        </div>
      </div>
    </aside>
  );
}
