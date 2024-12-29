import React, { useState, useEffect } from "react";
import { APIKey } from "../../apis/Api.jsx";
import axios from "axios";
import Card from "../card/Card";
import "./omdbApi.css";

function OmdbApi() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const textName = "Friends";
  const ApiUrl = axios.create({ baseURL: "https://www.omdbapi.com/" });

  const fetchMovies = async () => {
    const response = await ApiUrl.get(
      `?apikey=${APIKey}&s=${textName}&type=movie`
    );
    setMovies(response.data.Search);
    console.log(response.data.Search);
  };

  const fetchSeries = async () => {
    const response = await ApiUrl.get(
      `?apikey=${APIKey}&s=${textName}&type=series`
    );
    setSeries(response.data.Search);
    console.log(response.data.Search);
  };

  useEffect(() => {
    fetchMovies();
    fetchSeries();
  }, []);

  return (
    <>
      <section id="omdb-api" className="omdb-api">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">
              <i>
                OMDB <span>Movie</span> API
              </i>
            </h4>
          </div>
          <div className="row">
            {movies.length > 0 ? (
              movies.map((movie) => <Card key={movie.imdbID} movie={movie} />)
            ) : (
              <p>No movies found</p>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">
              <i>
                OMDB <span>Serie</span> API
              </i>
            </h4>
          </div>
          <div className="row">
            {series.length > 0 ? (
              series.map((serie) => <Card key={serie.imdbID} movie={serie} />)
            ) : (
              <p>No movies found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default OmdbApi;
