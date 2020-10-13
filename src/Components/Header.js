import React, { useState } from "react";
import "../Style/css/Header.css";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Logo from "../Style/image/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img className="header__logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="header__center">
        <input
       
          onChange={e => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        ></input>
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <AccountCircleSharpIcon />
      </div>
    </div>
  );
}

export default Header;
