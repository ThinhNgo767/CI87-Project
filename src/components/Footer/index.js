import BackTopTopButton from "../BackTopTopButton";
import "./style.css";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-logo">
          <img
            src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="container">
          <div className="footer_row-left">
            <h3 className="title">về bhd star</h3>
            <div className="menu-intro">
              <ul>
                <li><Link to="/he-thong-rap">hệ thống rạp</Link></li>
                <li>tuyển dụng</li>
                <li>liên hệ</li>
              </ul>
              <a href="*" style={{ position: "absolute", bottom: "136px" }}>
                <img
                  alt="bocongthuong"
                  style={{ width: "150px" }}
                  src="https://www.bhdstar.vn/wp-content/uploads/2020/02/dathongbao-1.png"
                />
              </a>
            </div>
          </div>
          <div className="footer_row-right">
            <h3 className="title">quy định & điều khoản</h3>
            <div className="menu-rules">
              <ul>
                <li><Link to="/quy-dinh-thanh-vien">Quy định thành viên</Link></li>
                <li>Điều khoản</li>
                <li>Hướng dẫn đặt vé trực tuyến</li>
                <li>Quy định và chính sách chung</li>
                <li>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_copyright">
          <p>© 2015 BHD Star Cineplex</p>
        </div>
      </footer>

      <BackTopTopButton />
    </>
  );
};

export default Footer;
