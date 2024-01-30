import React, { useState } from "react";
import "./header-style.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo";
import MenuIcon from "../../assets/images/MenuIcon";
import MenuCloseIcon from "../../assets/images/MenuCloseIcon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const openMenu = () => {
    console.log("Lets open menu!!");
    setShowMobileMenu(true);
  };

  const closeMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="header_container">
      <div className="header_left_side">
        <div className="header_logo_container">
          <Logo />
        </div>
      </div>
      <div className="header_right_side">
        <ul className="navbar_list">
          <li>
            <Link to={"/"} className="navbar_list_item">
              Home
            </Link>
          </li>

          <li>
            <Link to={"/#"} className="navbar_list_item">
              New
            </Link>
          </li>

          <li>
            <Link to={"/#"} className="navbar_list_item">
              Popular
            </Link>
          </li>

          <li>
            <Link to={"/#"} className="navbar_list_item">
              Trending
            </Link>
          </li>

          <li>
            <Link to={"/#"} className="navbar_list_item">
              Categories
            </Link>
          </li>
        </ul>
        <button className="menu_icon" onClick={openMenu}>
          <MenuIcon />
        </button>
        <div
          className={`mobile_menu_overlay ${
            showMobileMenu ? "show_mobile_menu" : ""
          }`}
        >
          <div className="mobile_menu">
            <button className="menu_icon" onClick={closeMenu}>
              <MenuCloseIcon />
            </button>
            <ul className="navbar_list_mobile">
              <li>
                <Link to={"/"} className="navbar_list_item">
                  Home
                </Link>
              </li>

              <li>
                <Link to={"/#"} className="navbar_list_item">
                  New
                </Link>
              </li>

              <li>
                <Link to={"/#"} className="navbar_list_item">
                  Popular
                </Link>
              </li>

              <li>
                <Link to={"/#"} className="navbar_list_item">
                  Trending
                </Link>
              </li>

              <li>
                <Link to={"/#"} className="navbar_list_item">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
