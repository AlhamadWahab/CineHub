import React from "react";
import NavList from "../../components/navigations/NavList";
import navListData from "../../data/NavListData";
import "./header.css";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <header>
        <a href="/" className="logo">
          Cine <span className="logo-span"> Hub </span>
        </a>
        <ul className="nav">
          {navListData.map((item) => {
            return <NavList key={item._id} item={item} />;
          })}
        </ul>
        <Search />
        <Link to="http://localhost:3000/">
          <Button
            icon={<ion-icon name="log-out-outline"></ion-icon>}
            name="back to home"
          />
        </Link>
      </header>
    </>
  );
}

export default Header;
