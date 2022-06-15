import React from "react";


export default function Header({ children, menu, setMenu }) {
  const logoPath = process.env.PUBLIC_URL + "/assets/images/logo_combined.png";

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner-logo">
          <img src={logoPath} alt="" />
        </div>

        {children}
        <div className="header__inner-burger">
          <div
            className={`burger ${menu ? "active" : ""}`}
            onClick={() => setMenu(!menu)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
