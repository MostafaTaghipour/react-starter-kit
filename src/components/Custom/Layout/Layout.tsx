import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import s from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`${s.content} flex-shrink-0 py-5`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
