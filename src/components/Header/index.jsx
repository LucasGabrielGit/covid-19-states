/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../resources/virus.png";

const Header = () => (
  <header className="bg-info p-3 text-uppercase text-white">
    <img src={logo} className="mr-2" />
    Covid-19 Status
    <div  className="text-center">
      <h5
        style={{ justifyContent: "center", justifyItems: "center" }}
        className="font-weight-bold col-md"
      >
        Situação de cada estado brasileiro em relação ao Covid-19
      </h5>
    </div>
  </header>
);

export default Header;
