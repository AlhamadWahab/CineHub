import React from "react";
import "./movieContent.css";
import Button from "../button/Button";

function MovieContent({ movie }) {
  return (
    <>
      <div className={`content ${movie.active ? "active" : undefined}`}>
        <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
        <h4>
          <span>{movie.year}</span>
          <span>
            <i>{movie.ageLimit}</i>
          </span>
          <span>{movie.length}</span>
          <span>{movie.category}</span>
        </h4>
        <p>{movie.description}</p>
        <div className="button">
          <Button
            icon={<ion-icon name="logo-youtube"></ion-icon>}
            name="Subscribe us"
          />
          <Button
            icon={<ion-icon name="logo-facebook"></ion-icon>}
            name="follow on facebook"
            color="#000000"
            bgColor="#ffffff"
          />
        </div>
      </div>
    </>
  );
}

export default MovieContent;
