import "./style.css";

import { Link } from "react-router-dom";

const Regulation = () => {
  return (
    <div className="regulation">
      <h3>1.cách thức đăng ký tài khoản</h3>
      <p>
        Khách hàng có thể đăng ký tài khoản thành viên miễn phí tại{" "}
        <Link to="/dang-ky">www.bhdstar.vn/dang-ky</Link> hoặc trên ứng dụng di
        động BHD Star (iOS hoặc Android)
      </p>
      <ul>
        <li>
          Vui lòng kiểm tra và đảm bảo thông tin cá nhân chính xác trước khi
          hoàn tất đăng ký tài khoản. Tất cả thông tin ngoại trừ mật khẩu sẽ
          không thể chỉnh sửa sau khi đăng ký.
        </li>
        <li>
          Nếu có nhu cầu điều chỉnh thông tin cá nhân, quý khách vui lòng gửi
          email bằng địa chỉ đã đăng ký thành viên đến{" "}
          <Link to="mailto:cskh@bhdstar.vn">cskh@bhdstar.vn</Link> để được hỗ
          trợ.
        </li>
        <li>Tài khoản thành viên có thể sử dụng ngay sau khi đăng ký.</li>
      </ul>
    </div>
  );
};

export default Regulation;
