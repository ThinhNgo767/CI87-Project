import "./App.css";
import { fetchUser } from "./api/users";
import {fetchMovies} from "./api/movies"
import { useAuth } from "./hooks/useAuth";
import THEATERS from "./data/Theater";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cinema from "./pages/Cinema";
import ShowTimes from "./pages/ShowTimes";
import Advertisement from "./pages/Advertisement";
import PromotionsEvents from "./pages/PromotionsEvents";
import Movie from "./pages/Movie";
import Abouts from "./pages/Abouts";
import LoginRegister from "./pages/LoginRegister";
import Regulation from "./components/Regulation";
import Account from "./pages/Account";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import TheaterDetail from "./pages/Cinema/TheaterDetail";

import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const {isLogin, setIsLogin} = useAuth();

  useEffect(() => {
    const fetchDataUserFromAPI = async () => {
      try {
        const resultUser = await fetchUser();
        if (resultUser.length > 0) {
          setUsers(resultUser);
        }
      } catch (error) {
        return -1;
      }
    };

    fetchDataUserFromAPI();
  }, []);

  useEffect(() => {
    const fetchDataMoviesFromAPI = async () => {
      try {
        const resultMovies = await fetchMovies();
        if (resultMovies.length > 0) {
          setMovies(resultMovies);
          
        }
      } catch (error) {
        return -1;
      }
    };

    fetchDataMoviesFromAPI();
  }, []);


  return (
    <div className="App">
      <Header users={users} isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
      <Route path="/" element={<Home movies={movies}/>} />
        <Route path="/lich-theo-chieu-phim" element={<ShowTimes movies={movies}/>} />
        <Route path="/he-thong-rap" exact element={<Cinema movies={movies} theaters={THEATERS} />} />
        <Route path="/he-thong-rap/:slug" element={<TheaterDetail theaters={THEATERS}/>} />
        <Route path="/khuyen-mai-su-kien" element={<PromotionsEvents movies={movies} />} />
        <Route path="/quang-cao" element={<Advertisement theaters={THEATERS}/>} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/ve-chung-toi" element={<Abouts theaters={THEATERS}/>} />

        <Route
          path="/dang-ky"
          element={
            isLogin ? (
              <Navigate to="/tai-khoan" replace={true} />
            ) : (
              <LoginRegister
                users={users}
                setUsers={setUsers}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
              />
            )
          }
        />

        <Route
          path="/tai-khoan"
          element={
            isLogin ? (
              <Account users={users} isLogin={isLogin} />
            ) : (
              <Navigate to="/dang-ky" replace={true} />
            )
          }
        />
        <Route path="/quy-dinh-thanh-vien" element={<Regulation/>}/>
        <Route path="/movie/:movieId" element={<Movie movies={movies} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
