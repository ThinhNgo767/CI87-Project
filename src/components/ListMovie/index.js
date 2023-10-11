import React from "react";
import { useState } from "react";

import MovieShowing from "../MovieShowing";
import UpComingMoive from "../UpcomingMovie";
import PreSaleTickets from "../PreSaleTickets";

import "./style.css";
const ListMovie = () => {
  const [active, setActive] = useState("active");

  return (
    <div className="list-movie">
      <nav>
        <ul className="nav--titles">
          <li>
            <h3
              onClick={() => setActive("active")}
              className={active === "active" ? "active-link" : ""}
            >
              Phim Đang Chiếu
            </h3>
          </li>
          <li>
            <h3
              onClick={() => setActive("comingsoon")}
              className={active === "comingsoon" ? "active-link" : ""}
            >
              Phim Sắp Chiếu
            </h3>
          </li>
          <li>
            <h3
              onClick={() => setActive("presaletickets")}
              className={active === "presaletickets" ? "active-link" : ""}
            >
              Vé Bán Trước
            </h3>
          </li>
        </ul>
      </nav>
      {active === "active" && <MovieShowing />}
      {active === "comingsoon" && <UpComingMoive />}
      {active === "presaletickets" && <PreSaleTickets />}
    </div>
  );
};

export default ListMovie;
