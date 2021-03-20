import React, { Fragment } from "react";
import Header from "../header";
import Footer from "../footer";
import GlobalStyle from "../../global-styles";
import MenuHeader from "../menuHeader";
import Header2 from "../header/header2";
const Layout = (props) => {
  return (
    <Fragment>
      <GlobalStyle />

      <Header2 />
      {/* <MenuHeader /> */}
      {/* Menu Header */}
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
