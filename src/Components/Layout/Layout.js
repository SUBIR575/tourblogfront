import React from "react";
import Footer from "../Footer/Footer";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
const Layout = ({ children }) => {
  return (
    <>
      <NavbarMenu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
