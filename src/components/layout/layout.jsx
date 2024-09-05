import React from "react";
import Header from "./header/Header";
import { Helmet } from "react-helmet";
import Footer from "./footer/Footer.jsx";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>Now And Forever | {title}</title>
      </Helmet>
      <Header />
      <div className="d-flex"></div>
      <main className="main-section" style={{marginTop: "85px"}}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
