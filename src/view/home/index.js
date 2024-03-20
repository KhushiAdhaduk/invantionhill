import React from "react";
import Header from "../common/Header";
import Landing from "./Landing";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Service />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
