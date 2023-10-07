import React from "react";

import ListMovie from "../../components/ListMovie";
import CardsMember from "../../components/CardsMember";
import Banner from "./component/Banner";
import ListPromotion from "../../components/ListPromotion";

import "./style.css";

const Home = () => {
  return (
    <div className="home-page">
      <Banner/>
      <div className="section--product-view">
        <ListMovie />
      </div>
      <div className="section--member">
        <CardsMember />
      </div>
<ListPromotion/>
    </div>
  );
};

export default Home;
