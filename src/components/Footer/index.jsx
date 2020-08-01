import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => (
  <footer className="bg-info p-4 shadow-sm">
    <p className="m-0 ">
      Desenvolvido com <BsFillHeartFill className="text-danger" /> por{" "}
      <span className="font-weight-bold text-danger">Lucas Gabriel</span>
    </p>

    <a
      href="http://github.com/LucasGabrielGit"
      target="_blank"
      rel="noopener noreferrer" className="text-dark"
    >
      <GoMarkGithub />
    </a>
  </footer>
);

export default Footer;
