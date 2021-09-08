import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./img/logo1w.png";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppinBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/* Logo */}
      <img className="header__logo" src={Logo} alt="logo1w"></img>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* link para login */}
      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello! </span>
            <span className="header__optionLineTwo">Come On</span>
          </div>
        </Link>

        {/* link para orden de compra */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>

      {/* Carrito */}
      <Link to="/checkout" className="header__link">
        <div className="header_optionBasket">
          <ShoppinBasketIcon />
          <span className="header_optionLineTwo header__basketCount">2</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
