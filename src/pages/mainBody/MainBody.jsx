import React from "react";
import "./mainBody.css";
import OmdbApi from "../../components/omdbApi/OmdbApi";

function MainBody() {
  return (
    <>
      <main>
        <OmdbApi />
      </main>
    </>
  );
}

export default MainBody;
