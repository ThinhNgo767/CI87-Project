import "./style.css"

import { useParams } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Movie = ({ movies }) => {
  const movieParams = useParams();
  const movie = movies.find((movie) => movie.id === Number(movieParams.movieId) );

  useEffect(() => {
    const scrollPosition = 4 * 16;

    window.scrollTo({
      top: scrollPosition, 
      behavior: 'smooth'
    });

  }, [])

  return (
    <div className="movie">
      {movie && (
        <div className="container-movie">
          <div className="movie-detail-title">
            <h2><Link to="/">TRANG CHỦ</Link> | {movie.title}</h2>
          </div>
          <div className="movie-detail-content">
            <div className="movie-detail-content--left">
              <img src={movie.thumnail} alt={movie.title} />
            </div>
            <div className="movie-detail-content--right">
            <h2 className="text-content--right itle">
            {movie.title}
              </h2>
              <p className="text-content--right description">
                {movie.description}
              </p>
              <p className="text-content--right">
                Phân Loại <span className="classify">{movie.classify}</span>
              </p>
              <p className="text-content--right">
                Đạo diễn <span>{movie.director}</span>
              </p>
              <p className="text-content--right">
                Thể Loại <span>{movie.category}</span>
              </p>
              <p className="text-content--right">
                Khởi chiếu <span>{movie.premiere}</span>
              </p>
              <p className="text-content--right">
                Thời lượng <span>{movie.videoDuration}</span>
              </p>
              <p className="text-content--right">
                Ngôn ngữ <span>Phim có phụ đề</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
