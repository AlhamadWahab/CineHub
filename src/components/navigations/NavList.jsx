import React from "react";
import "./navList.css";

function NavList({ item }) {
  return (
    <>
      <li>
        <a href={item.link}>{item.name}</a>
      </li>
    </>
  );
}

export default NavList;
