import "./style.css";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    const handleScroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? "header scrolled-up" :"header scrolled-down"}>
      <div className="header_item--left header_toggle-menu">
        {isOpen ? (
          <div className="toggle_menu">
            <button
              type="button"
              className="header_button--toggle"
              onClick={toggleMenu}
            >
              <FaTimes className="toggle_button-size" />
              CLOSE
            </button>

            <ul
              className={isOpen ? "nav-menu open" : "nav-menu close"}
              ref={menuRef}
            >
              <li>lịch chiếu</li>
              <li>hệ thống rạp</li>
              <li>khuyến mãi | sự kiện</li>
              <li>dịch vụ quảng cáo</li>
              <li>tuyển dụng</li>
              <li>về chúng tôi</li>
            </ul>
          </div>
        ) : (
          <div className="toggle_menu">
            <button
              type="button"
              className="header_button--toggle"
              onClick={toggleMenu}
            >
              <FaBars className="toggle_button-size" />
              MENU
            </button>
          </div>
        )}
        <button type="button" className="header_button_order-ticket">
          MUA VÉ
        </button>
      </div>
      <div className="header_logo">
        <img
          src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="header_item--right">
        <div className="header_social_login">
          <button type="button" className="header_button_social">
            <FaInstagram className="social" />
          </button>
          <button type="button" className="header_button_social">
            <FaFacebook className="social" />
          </button>
          <button type="button" className="header_button_social">
            <FaTiktok className="social" />
          </button>
          <button type="button" className="header_button_social">
            <FaYoutube className="social" />
          </button>
          <button type="button" className="header_button_login">
            ĐĂNG NHẬP
          </button>
        </div>
      </div>
      <img
        src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/line-header1.png"
        alt="line"
        className="image--line"
      />
    </div>
  );
};

export default Header;
