import React from "react";
import TopMenu from "../../Shared/TopMenu";
import Footer from "../../Shared/Footer";

import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import AllItem from "../AllItem/AllItem/AllItem";

const Home = () => {
  return (
    <div>
      <TopMenu></TopMenu>
      <Banner></Banner>
      <AllItem></AllItem>
      <Choose></Choose>
      <Footer></Footer>
    </div>
  );
};

export default Home;
