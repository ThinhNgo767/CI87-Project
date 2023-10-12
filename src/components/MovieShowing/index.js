import React from "react";
import Slider from "react-slick";
import { GiTicket } from "react-icons/gi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MOVIES from "../../data/Movies";
import settings from "./SettingSlick";
import "./style.css";

const MovieShowing = () => {
  const showing = MOVIES.filter(
    (movieShowing) => movieShowing.status === "active"
  );
  return (
    <Slider {...settings}>
      {showing.map((movie) => (
        <div className="card" key={movie.id}>
          <div className="card-top">
            <img src={movie.thumnail} alt={movie.title} />
            <p className="title-movie">{movie.title}</p>
          </div>
          <div className="card-bottom">
            <a
              href="*"
              className="btn-antd"
              style={{
                color: "#fff",
                backgroundColor: "#45AB3C",
                width: "100%",
                height: "45px",
                borderRadius: "3px",
              }}
            >
              <GiTicket />
              Mua vé
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MovieShowing;
