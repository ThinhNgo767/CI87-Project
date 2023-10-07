import React from "react";

import ListMovie from "../../components/ListMovie";
import CardsMember from "../../components/CardsMember";
import ListPromotion from "../../components/ListPromotion";

import "./style.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="section--product-view">
        <ListMovie />
      </div>
      <div className="section--member">
        <CardsMember />
      </div>
      <div className="section--promotion">
        <ListPromotion />
      </div>
      <div className="section--footer"></div>
    </div>
  );
};

export default Home;
