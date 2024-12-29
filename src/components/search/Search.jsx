import React, { useState } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Search() {
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const regex = /^[A-Za-z0-9\s]+$/;
    if (term && regex.test(term)) {
      setError("");
      navigate(`/search/${term}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please enter a valid name, use only letters, numbers and spaces!",
      });
    }
  };
  return (
    <>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </>
  );
}

export default Search;
