import React from "react";
import "./card.css";

function Card({ movie }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
          alt={movie.Title}
          className="img-fluid"
        />
        <p>{movie.Title}</p>
        <div className="content">
          <div className="card-icons">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
