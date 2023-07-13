import React from "react";
import { BsSearch, BsFillPersonFill, BsCart3, BsBagPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <h2>BCS STORES</h2>
    </div>
    <nav className="header__nav">
      <ul>
        <li className="header--items">
          <a href="/">New In</a>
        </li>
        <li>
          <a href="/">Beddings</a>
        </li>
        <li>
          <a href="/">Clothings</a>
        </li>
        <li>
          <a href="/">Stores</a>
        </li>
      </ul>
    </nav>
    <div className="header__icons">
      <span>
        <BsSearch />
      </span>
      <span>
        <BsFillPersonFill />
      </span>
      <span>
        <AiOutlineHeart />
      </span>
      <span>
        <BsCart3 />
      </span>
      <span>
        <BsBagPlus />
      </span>
    </div>
  </header>
);

export default Header;
