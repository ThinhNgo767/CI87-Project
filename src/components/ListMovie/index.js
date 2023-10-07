import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import MovieShowing from "../MovieShowing";
import UpComingMoive from "../UpcomingMovie";
import PreSaleTickets from "../PreSaleTickets";


import "./style.css";
const ListMovie = () => {
  
  return (
    <div className="list-movie">
      <nav>
        <ul className="nav--titles">
          <li>
            <Link to="/">Phim Đang Chiếu</Link>
          </li>
          <li>
            <Link to="/phimsapchieu">Phim Sắp Chiếu</Link>
          </li>
          <li>
            <Link to="/vebantruoc">Vé Bán Trước</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MovieShowing />}></Route>
        <Route path="/phimsapchieu" element={<UpComingMoive />}></Route>
        <Route path="/vebantruoc" element={<PreSaleTickets />}></Route>
      </Routes>
    </div>
  );
};

export default ListMovie;
