import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
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
              <li>hệ thống rạp</li>
              <li>tuyển dụng</li>
              <li>liên hệ</li>
            </ul>
          </div>
        </div>
        <div className="footer_row-right">
          <h3 className="title">quy định & điều khoản</h3>
          <div className="menu-rules">
            <ul>
              <li>Quy định thành viên</li>
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
    </div>
  );
};

export default Footer;
