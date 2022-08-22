import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      &copy; {new Date().getFullYear()} All copyright reserved by Ariful Islam
      <p className="icons">
        <AiFillInstagram /> <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
