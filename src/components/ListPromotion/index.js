import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Promotion from "../Promotion";
import Event from "../Event";
import "./style.css";

function ListPromotion() {
  return (
    <div className="list-promotion">
      <nav>
        <ul className="nav--titles-promotion">
          <li>
            <Link to="/">Khuyến Mãi</Link>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <Link to="/sukien">Sự Kiện</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Promotion />}></Route>
        <Route path="/sukien" element={<Event />}></Route>
      </Routes>
    </div>
  );
}

export default ListPromotion;
