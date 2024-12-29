import React from "react";
import "./scrollBtn.css";

function ScrollBtn({ scrollIt }) {
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <a
        className={`back-to-top ${scrollIt > 100 ? "active" : undefined}`}
        onClick={scroll}
      >
        <ion-icon name="arrow-up-outline"></ion-icon>
      </a>
    </>
  );
}

export default ScrollBtn;
