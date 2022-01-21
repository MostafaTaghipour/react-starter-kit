import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`footer mt-auto py-3 ${s.footer}`}>
      <div className="container">
        <span className={s.test}>© Your Copyright </span>
      </div>
    </footer>
  );
};

export default Footer;
