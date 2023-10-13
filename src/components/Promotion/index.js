import React from "react";
import Promotions from "../../data/Promotions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import settings from "./SettingSlick.js";
import "./style.css";

function Promotion() {
  const promo = Promotions.filter((promos) => promos.status === "1");
  return (
    <div className="container">
      <div className="promotion-1">
        <Slider {...settings}>
          {promo.map((promo) => (
            <div
              className="img--promo"
              key={promo.id}
              style={{
                width: "430px",
                marginRight: "24px",
                float: "left",
                display: "block",
              }}
            >
              <a href="*">
                <img alt="none" src={promo.url} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Promotion;
