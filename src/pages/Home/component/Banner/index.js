import "./style.css";
import settingsBanner from "./settingSideBanner";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  return (
    <div className="banner">
      <Slider {...settingsBanner}>
        <img
          src="https://www.bhdstar.vn/wp-content/uploads/2023/08/MUACBLONTANGCBNHO-KA-1920X1080.png"
          alt="banner"
        />
        <img
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-3-2.jpg"
          alt="banner"
        />
        <img
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-1-13.jpg"
          alt="banner"
        />
        <img
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/App.jpg"
          alt="banner"
        />
      </Slider>
    </div>
  );
};

export default Banner;
