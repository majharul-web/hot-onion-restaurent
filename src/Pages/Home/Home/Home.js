import React from "react";
import Footer from "../../Shared/Footer";
import TopMenu from "../../Shared/TopMenu";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";

const Home = () => {
  return (
    <div>
      <header>
        <TopMenu></TopMenu>
        <Banner></Banner>
        <Choose></Choose>
        <Footer></Footer>
      </header>
    </div>
  );
};

export default Home;
