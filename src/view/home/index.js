import React from "react";
import Header from "../common/Header";
import Landing from "./Landing";
import Service from "./Service";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Service />
      <Portfolio />
    </>
  );
};

export default Home;
