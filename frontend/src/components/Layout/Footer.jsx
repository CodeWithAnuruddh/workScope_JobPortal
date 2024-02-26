import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {  FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Anuruddh Pratap Singh.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/anniac/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/apsingh56/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://github.com/codeWithAnuruddh"} target="_blank">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
