import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo-cipher.png";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#aboutciphers">What are Ciphers</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#possibility">Future Scope</a>
      </p>
      <p>
        <a href="#resources">Resources</a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
  }, []);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={`navbar ${navScroll ? "navbar-scrolled" : ""}`}>
      <div className="navbar__links">
        <div className="navbar__logo">
          <img src={logo} alt="logo" style={{ height: "70px" }} />
          {/* <h1 style={{ color: "#fff" }}>CIPHERS</h1> */}
        </div>
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar__sign">
        <p></p>
        <button type="button">Explore</button>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__menu-container__links">
              <Menu />
              <div className="navbar__menu-container__sign">
                <p></p>
                <button type="button">Explore</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
