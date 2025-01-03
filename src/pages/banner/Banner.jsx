import React, { useEffect, useState } from "react";
import "./banner.css";
import MovieContent from "../../components/movieContent/MovieContent";
import MovieDate from "../../components/movieDate/MovieDate";
import PlayBtn from "../../components/playBtn/PlayBtn";
import MovieSwiper from "../../components/movieSwiper/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/mockData/movieData.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    const displayNewMovie = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(displayNewMovie);
  };
  return (
    <>
      <div className="banner">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <div className="movie" key={movie._id}>
              <img
                src={movie.bgImg}
                alt="Background-Image"
                className={`bgImg ${movie.active ? "active" : undefined}`}
              />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <MovieContent movie={movie} />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <MovieDate movie={movie} />
                    <PlayBtn movie={movie} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {movies && movies.length > 0 && (
          <MovieSwiper slides={movies} onClickSlideChange={handleSlideChange} />
        )}
      </div>
    </>
  );
}

export default Banner;
