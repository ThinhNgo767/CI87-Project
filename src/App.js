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
import Error from "./pages/Error";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lich-theo-chieu-phim" element={<ShowTimes />} />
        <Route path="/he-thong-rap" element={<Cinema />} />
        <Route path="/khuyen-mai-su-kien" element={<PromotionsEvents />} />
        <Route path="/quang-cao" element={<Advertisement />} />
        <Route path="/ve-chung-toi" element={<Abouts />} />
        <Route path="/dang-ky" element={<LoginRegister />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
