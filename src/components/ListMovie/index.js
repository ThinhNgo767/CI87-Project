import React from "react";
import {  Link } from "react-router-dom";
import { useState } from "react";

import MovieShowing from "../MovieShowing";
import UpComingMoive from "../UpcomingMovie";
import PreSaleTickets from "../PreSaleTickets";


import "./style.css";
const ListMovie = ({movies}) => {
  const [active , setActive] = useState("active")
  
  return (
    <div className="list-movie">
      <nav>
        <ul className="nav--titles">
          <li>
            <Link to="/" onClick={()=> setActive("active")} className={active === "active" ? "active-link":""}>Phim Đang Chiếu</Link>
          </li>
          <li>
            <Link to="/" onClick={()=> setActive("comingsoon")} className={active === "comingsoon" ? "active-link":""}>Phim Sắp Chiếu</Link>
          </li>
          <li> 
          <Link to="/" onClick={()=> setActive("presale")} className={active === "presale" ? "active-link":""}>Vé Bán Trước</Link>
          </li>
        </ul>
      </nav>
      {active === "active" && <MovieShowing movies={movies}/>}
      {active === "comingsoon" && <UpComingMoive movies={movies}/>}
      {active === "presale" && <PreSaleTickets movies={movies}/>}
    </div>
  )
};

export default ListMovie;
