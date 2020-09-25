import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl0bi7ql2BO-ve3uj7t6_FjTj0wZxsK-ck5Q&usqp=CAU"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
