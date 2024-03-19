import React from "react";
import Header from "../common/Header";
import Landing from "./Landing";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Service />
      <Portfolio />
      <Team />
    </>
  );
};

export default Home;
