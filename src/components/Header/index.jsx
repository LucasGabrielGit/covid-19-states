/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../resources/virus.png";

const Header = () => (
  <header className="bg-info p-3 text-uppercase text-white">
    <img src={logo} className="mr-2" />
    Covid-19 Status
  </header>
);

export default Header;
