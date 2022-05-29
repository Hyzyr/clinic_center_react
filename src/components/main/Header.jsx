import React from "react";
import ProfilePic from "../items/ProfilePic";
import * as SVG from "components/items/SVG";
import { Link } from "react-router-dom";

export default function Header({ menu, setMenu }) {
  const logoPath = process.env.PUBLIC_URL + "assets/images/logo_combined.png";
  const avatarPath = process.env.PUBLIC_URL + "assets/images/avatars/user.png";

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner-logo">
          <img src={logoPath} alt="" />
        </div>

        <div className="header__inner-group">
          <div className="header__inner-bread">
            <div className="header__inner-bread-ico">{SVG.lines}</div>
            <div className="header__inner-bread-title">My Chart</div>
          </div>
          <div className="header__inner-content">
            <Link to={"/booking"} className="button button--main">
              Book Now
            </Link>
            <button className="bellButton bellButton--new">{SVG.bell}</button>
            <ProfilePic src={avatarPath} alt="avatar" />
          </div>
        </div>
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
