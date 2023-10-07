import "./style.css";
import MenuToggle from "../MenuToggle";
import LoginHeader from "../LoginHeader";

import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
    <div className={isScrolled ? "header scrolled-up" : "header scrolled-down"}>
      <MenuToggle />

      <div className="header--flex">
        <div className="header_item--left">
          <button
          onClick={()=> {navigate("/lich-chieu-phim")}}
            type="button"
            className="header_button_order-ticket header_button--style"
          >MUA VÉ
            
          </button>
        </div>
        <div className="header_logo">
          <Link to="/" title="logo">
          <img
            src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
            alt="logo"
            className="logo"
          />
          </Link>
         
        </div>
        <div className="header_item--right">
          <div className="header_social_login">
            <Link
              to="https://www.instagram.com/bhdstar.cineplex/"
              target="_blank"
              className="header_button_social" title="instagram"
            >
              <FaInstagram className="social" />
            </Link>
            <Link
              to="https://www.facebook.com/BHDStar"
              target="_blank"
              className="header_button_social" title="facebook"
            >
              <FaFacebook className="social" />
            </Link>
            <Link
              to="https://www.tiktok.com/@bhdstar.cineplex"
              target="_blank"
              className="header_button_social" title="tiktok"
            >
              <FaTiktok className="social" />
            </Link>
            <Link
              to="https://www.youtube.com/user/BHDStar"
              target="_blank"
              className="header_button_social" title="youtube"
            >
              <FaYoutube className="social" />
            </Link>
          </div>
        </div>
      </div>
      <LoginHeader />
      <img
        src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/line-header1.png"
        alt="line"
        className="image--line"
      />
    </div>
  );
};

export default Header;
