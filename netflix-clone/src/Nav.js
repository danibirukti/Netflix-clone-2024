import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
     const [show, handleShow] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
         handleShow(true);
        } else handleShow(false);
      });
      return () => {
        // window.removeEventListener("scroll");
      };
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar logo"
      />
    </div>
  );
}
  


export default Nav;