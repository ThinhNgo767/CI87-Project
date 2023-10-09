import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cinema from "./pages/Cinema";
import ShowTimes from "./pages/ShowTimes";
import Advertisement from "./pages/Advertisement";
import PromotionsEvents from "./pages/PromotionsEvents";
import Abouts from "./pages/Abouts";
import LoginRegister from "./pages/LoginRegister";
import Infomation from "./pages/Account";
import Error from "./pages/Error";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const App = () => {
  const checkLogin = !!Cookies.get("token");

  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(checkLogin);

  const urlUser = "https://65219433a4199548356d628d.mockapi.io/use";

  useEffect(() => {
    const handleFetchUser = async () => {
      const response = await axios.get(urlUser);
      setUsers(response.data);
    };
    handleFetchUser();
  }, []);

  return (
    <div className="App">
      <Header users={users} isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lich-theo-chieu-phim" element={<ShowTimes />} />
        <Route path="/he-thong-rap" element={<Cinema />} />
        <Route path="/khuyen-mai-su-kien" element={<PromotionsEvents />} />
        <Route path="/quang-cao" element={<Advertisement />} />
        <Route path="/ve-chung-toi" element={<Abouts />} />
        <Route
          path="/dang-ky"
          element={<LoginRegister users={users} setIsLogin={setIsLogin} />}
        />
        <Route path="/tai-khoan" element={<Infomation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
