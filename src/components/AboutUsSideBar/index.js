import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUsSideBar = ({ theaters }) => {
  const navigate = useNavigate();

  return (
    <ul className="list-cinema">
      {theaters.map((theater) => (
        <li
          key={theater.id}
          onClick={() => {
            navigate(`/he-thong-rap/${theater.href}`);
          }}
        >
          <p className="item--cinema">
            <i className="fa fa-map-marker"></i>
            <span className="theater-title">{theater.name}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default AboutUsSideBar;
