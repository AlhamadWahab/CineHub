import React from "react";
import "./modal.css";

function Modal({ movie, modalStatus, toggleModalBtn }) {
  return (
    <>
      <div className={`movieModal ${modalStatus ? "active" : undefined}`}>
        <a className="modalCloseBtn" onClick={toggleModalBtn}>
          <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe
          src={movie.video}
          frameBorder="0"
          width="1280"
          height="720"
          title={`${movie.title} | Official Trailer`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; wev-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Modal;
