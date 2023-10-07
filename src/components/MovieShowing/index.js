import React from "react";
import Slider from "react-slick";
import { GiTicket } from "react-icons/gi";
import { Button } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MOVIES from "../../data/Movies";
import settings from "./SettingSlick";
import "./style.css";

const PreSaleTicket = () => {
  const showing = MOVIES.filter((movieShowing) => movieShowing.status === true);
  return (
    <Slider {...settings}>
      {showing.map((movie) => (
        <div className="card">
          <div className="card-top">
            <img src={movie.thumnail} alt={movie.title} />
            <p className="title-movie">{movie.title}</p>
          </div>
          <div className="card-bottom">
            <Button
              className="btn-antd"
              type="primary"
              size="lagre"
              style={{ backgroundColor: "#45AB3C", width: "100%" }}
            >
              <GiTicket />
              Mua vé
            </Button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PreSaleTicket;
