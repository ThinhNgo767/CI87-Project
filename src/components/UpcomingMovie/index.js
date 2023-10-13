import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { GiTicket } from "react-icons/gi";
import { Button } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import settings from "./SettingSlick";
import "./style.css";

const UpComingMoive = ({movies}) => {
  const navigate = useNavigate();
  const upComing = movies.filter((upComing) => upComing.status === "comingsoon");
  return (
    <Slider {...settings}>
      {upComing.map((movie) => (
        <div className="card" key={movie.id}>
          <div className="card-top" onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}>
            <img src={movie.thumnail} alt={movie.title} />
            <p className="title-movie">{movie.title}</p>
          </div>
          <div className="card-bottom">
            <Button
              className="btn-antd"
              type="primary"
              size="lagre"
              style={{ backgroundColor: "#45AB3C", width: "100%" }}
              onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}
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

export default UpComingMoive;
