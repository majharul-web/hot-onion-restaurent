import React from "react";

import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import AllItem from "../AllItem/AllItem/AllItem";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllItem></AllItem>
      <Choose></Choose>
    </div>
  );
};

export default Home;
