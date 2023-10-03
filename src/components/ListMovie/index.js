import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MOVIES from "../../data/Movies";
import settings from "./SettingSlick";
import "./style.css";

import { GiTicket } from "react-icons/gi";
import { Button } from "antd";

const ListMovie = () => {
  return (
    <div>
      <Slider {...settings}>
        {/* {MOVIES.filter((movie) => movie.status === false)} */}
        {MOVIES.map((movie) => (
          <div className="card">
            <div className="card-top">
              <img src={movie.thumnail} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
            <div className="card-bottom">
              <Button
                type="primary"
                size="medium"
                style={{ backgroundColor: "#45AB3C", width: "100%" }}
              >
                <GiTicket />
                Mua vé
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ListMovie;
