import React from "react";
import { Link } from "react-router-dom";

import THEATERS from "../../data/Theater";

import "./style.css";

function Cinama() {
  const theatersToShow = THEATERS.filter(
    (theater) =>
      theater.id !== "" &&
      theater.amount_like !== "" &&
      theater.img !== "" &&
      theater.name !== "" &&
      theater.href !== ""
  );
  return (
    <>
      {theatersToShow.map((cinema) => (
        <li key={cinema.id} className="col-md-3 col-sm-6 col-xs-12">
          <div className="news--item">
            <Link to={`/he-thong-rap/${cinema.href}`}>
              <img alt="cinema-img" width="243" height="330" src={cinema.img} />
            </Link>
            <Link className="news-title" to={`/he-thong-rap/${cinema.href}`}>
              {cinema.name}
            </Link>
            <span>{cinema.amount_like}</span>
            <a href="*" className="btn--share">
              Chia sẻ
            </a>
          </div>
        </li>
      ))}
    </>
  );
}

export default Cinama;
