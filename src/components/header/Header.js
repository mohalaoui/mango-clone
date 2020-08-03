import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://st.mngbcn.com/images/headerNew/logos/mango.svg"
          alt=""
        />
      </Link>
      <div className="header__items">
        <div className="header__item">
          <p>Soldes</p>
        </div>
        <div className="header__item">
          <p>Nouveautés</p>
        </div>
        <div className="header__item">
          <p>Femme</p>
        </div>
        <div className="header__item">
          <p>Homme</p>
        </div>
        <div className="header__item">
          <p>Fille</p>
        </div>
        <div className="header__item">
          <p>Garçon</p>
        </div>
        <div className="header__item">
          <p>Violeta</p>
        </div>
        <div className="header__item">
          <p>Edits</p>
        </div>
      </div>

      <div className="header__actions">
        <div className="header__action">
          <SearchIcon className="header__icon" />
          <p>Chercher</p>
        </div>
        <div className="header__action">
          <PersonOutlineIcon className="header__icon" />
          <p>Me connecter</p>
        </div>
        <div className="header__action">
          <FavoriteBorderIcon className="header__icon" />
          <p>Favoris</p>
        </div>
        <div className="header__action">
          <ShoppingBasketOutlinedIcon className="header__icon" />
          <p>Panier</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
