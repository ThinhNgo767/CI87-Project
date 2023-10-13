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
import TheaterDetail from "./pages/Cinema/TheaterDetail";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const App = () => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");

  const urlUser = "https://65219433a4199548356d628d.mockapi.io/use";

  useEffect(() => {
    const handleFetchUser = async () => {
      const response = await axios.get(urlUser);
      setUsers(response.data);
    };
    handleFetchUser();
  }, []);

  useEffect(() => {
    const handleGetCookie = () => {
      const userCookie = Cookies.get("token");
      const cookieValue = userCookie !== undefined ? userCookie : [];
      const decodedEmail = atob(cookieValue);
      setToken(decodedEmail);
    };
    handleGetCookie();
  }, []);

  return (
    <div className="App">
      <Header users={users} token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lich-theo-chieu-phim" element={<ShowTimes />} />
        <Route path="/he-thong-rap" exact element={<Cinema />} />
        <Route path="/he-thong-rap/:slug" element={<TheaterDetail />} />
        <Route path="/khuyen-mai-su-kien" element={<PromotionsEvents />} />
        <Route path="/quang-cao" element={<Advertisement />} />
        <Route path="/ve-chung-toi" element={<Abouts />} />
        <Route path="/dang-ky" element={<LoginRegister users={users} />} />
        <Route path="/tai-khoan" element={<Infomation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
