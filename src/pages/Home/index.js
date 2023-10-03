import React from "react";

import ListMovie from "../../components/ListMovie";
import CardsMember from "../../components/CardsMember";

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
    </div>
  );
};

export default Home;
