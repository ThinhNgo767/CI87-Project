import MOVIES from "../../data/Movies";
import "./style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./SettingSlick";
import ListPromotion from "../../components/ListPromotion";

const ShowTimes = () => {
  const showing = MOVIES.filter((movieShowing) => movieShowing.status === "active");
  return (
    <>
      <div className="warper-content">
        <div className="showtimes section--product-view">
          <div className="lich-chieu-theo-phim">
            <ul>
              <li className="product--title">
                <h3>LỊCH CHIẾU THEO PHIM</h3>
                <span>|</span>
                <h3>LỊCH CHIẾU THEO RẠP</h3>
              </li>
              <li>
                <Slider {...settings}>
                  {showing.map((movie) => (
                    <div className="card" key={movie.id}>
                      <div className="card-top">
                        <img src={movie.thumnail} alt={movie.title} />
                        <p className="title-movie">{movie.title}</p>
                      </div>
                      <div className="card-bottom"></div>
                    </div>
                  ))}
                </Slider>
              </li>
            </ul>
            <div className="border-bottom" id="hastag"></div>
          </div>
        </div>
        <div className="section--promotion">
          <ListPromotion />
        </div>
      </div>
    </>
  );
};

export default ShowTimes;
