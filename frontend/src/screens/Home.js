import React, { Fragment } from "react";
import Carousel from "../components/carousel";
import Layout from "../components/layout";

import {  CssBaseline } from "@material-ui/core";



const Home = () => {


  return (
    <Fragment>
      <Layout>

       <Carousel />
       <CssBaseline />







      </Layout>
    </Fragment>
  );
};

export default Home;
