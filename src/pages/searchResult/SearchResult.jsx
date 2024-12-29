import React, { useState, useEffect } from "react";
import { APIKey } from "../../apis/Api.jsx";
import axios from "axios";
import Card from "../../components/card/Card.jsx";
import "./searchResult.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Footer from "../footer/Footer.jsx";

function SearchResult() {
  const { term } = useParams();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const ApiUrl = axios.create({ baseURL: "https://www.omdbapi.com/" });

  const fetchMovies = async () => {
    if (term) {
      try {
        const response = await ApiUrl.get(
          `?apikey=${APIKey}&s=${term}&type=movie`
        );
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    }
  };

  const fetchSeries = async () => {
    if (term) {
      try {
        const response = await ApiUrl.get(
          `?apikey=${APIKey}&s=${term}&type=series`
        );
        setSeries(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching series:", error);
        setSeries([]);
      }
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchSeries();
  }, [term]);

  return (
    <>
      <section id="omdb-api" className="omdb-api">
        <div className="container-fluid">
          <div className="row">
            <div className="backBtn">
              <Link to="http://localhost:3000/">
                <Button
                  icon={<ion-icon name="log-out-outline"></ion-icon>}
                  name="back to home"
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <h4 className="section-title">
              <i>
                OMDB <span>Movie</span> API
              </i>
            </h4>
          </div>
          <div className="row">
            {Array.isArray(movies) && movies.length > 0 ? (
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
            {Array.isArray(series) && series.length > 0 ? (
              series.map((serie) => <Card key={serie.imdbID} movie={serie} />)
            ) : (
              <p>No series found</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchResult;
