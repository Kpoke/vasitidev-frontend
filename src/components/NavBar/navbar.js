import React from "react";
import NavigationItem from "./NavItem/navitem";

import "./navbar.css";

const NavBar = () => {
  return (
    <ul className="navbar">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/checkout" exact>
        Checkout
      </NavigationItem>
    </ul>
  );
};

export default NavBar;
