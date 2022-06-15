import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as SVG from "components/items/SVG";

export default function Sidebar({ menu, setMenu, children }) {
  const close = () => {
    setMenu(false);
  };
  useEffect(() => {
    if (menu) document.body.classList.add("active");
    else document.body.classList.remove("active");
  }, [menu]);

  return (
    <aside className={`sidebar ${menu ? "active" : ""}`} onClick={close}>
      <div className="sidebar__inner">{children}</div>
    </aside>
  );
}

export const SidebarPatient = ({ routes }) => {
  const pubFolder = process.env.PUBLIC_URL;

  return (
    <>
      <div className="sidebar__inner-links">
        {Object.keys(routes)
          .filter((key) => !routes[key].removeFromSidebar)
          .map((key, index) => (
            <NavLink
              key={index}
              to={routes[key].link === "index" ? "" : routes[key].link}
              className="sidebar__inner-link"
              {...(routes[key].props ?? {})}
            >
              <div className="sidebar__inner-link-ico">{routes[key].svg}</div>
              <div className="sidebar__inner-link-text">
                {routes[key].title}
              </div>
            </NavLink>
          ))}
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
            src={pubFolder + "/assets/images/illustrations/doc_illustration.svg"}
            alt="Doc"
          />
        </div>
        <div className="sidebar__inner-help-card">
          <strong>Do you need help?</strong>
          <a href="tel:4168308181">416-830-8181</a>
          <a href="tel:18557496646">1-855-749-6646</a>
        </div>
      </div>
    </>
  );
};
export const SidebarProvider = ({ routes }) => {
  const pubFolder = process.env.PUBLIC_URL;

  return (
    <>
      <div className="sidebar__inner-links">
        {Object.keys(routes)
          .filter((key) => !routes[key].removeFromSidebar)
          .map((key, index) => (
            <NavLink
              key={index}
              to={routes[key].link === "index" ? "" : routes[key].link}
              className="sidebar__inner-link"
              {...(routes[key].props ?? {})}
            >
              <div className="sidebar__inner-link-ico">{routes[key].svg}</div>
              <div className="sidebar__inner-link-text">
                {routes[key].title}
              </div>
            </NavLink>
          ))}
        <NavLink to={"/login"} className="sidebar__inner-link red">
          <div className="sidebar__inner-link-ico">{SVG.exit}</div>
          <div className="sidebar__inner-link-text">Sign Out</div>
        </NavLink>
      </div>
    </>
  );
};
