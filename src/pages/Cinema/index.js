import Cinama from "../../components/Cinema";
import ListMovie from "../../components/ListMovie";

import "./style.css";

const Cinema = ({movies}) => {
  return (
    <div className="warper-content">
      <div className="page--news cinema--background">
        <div className="container-cinema">
          <h1 className="about--us-title-title">HỆ THỐNG RẠP</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ul
              className="list--news"
              style={{
                position: "relative",
                height: "1329px",
                width: "1170px",
              }}
            >
              <Cinama />
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ListMovie movies={movies} />
      </div>
    </div>
  );
};

export default Cinema;
