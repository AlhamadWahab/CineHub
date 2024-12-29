import React, { useState } from "react";
import "./playBtn.css";
import Modal from "../modal/Modal";

function PlayBtn({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div
        className={`trailer d-flex align-center justify-content-center ${
          movie.active ? "active" : undefined
        }`}
      >
        <a className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-circle-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && (
        <Modal movie={movie} modalStatus={modal} toggleModalBtn={toggleModal} />
      )}
    </>
  );
}

export default PlayBtn;
