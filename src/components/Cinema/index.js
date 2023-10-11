import React from "react";

import THEATERS from "../../data/Theater";

import "./style.css";

function Cinama() {
  const theatersToShow = THEATERS.filter(
    (theater) =>
      theater.amount_like !== "" && theater.img !== "" && theater.name !== ""
  );
  return (
    <>
      {theatersToShow.map((cinema) => (
        <li className="col-md-3 col-sm-6 col-xs-12">
          <div className="news--item">
            <a href="*">
              <img alt="cinema-img" width="243" height="330" src={cinema.img} />
            </a>
            <a className="news-title" href="*">
              {cinema.name}
            </a>
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
