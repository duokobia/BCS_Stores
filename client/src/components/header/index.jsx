import { BsSearch, BsFillPersonFill, BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => (
  <header className="headerContainer">
    <header className="subheader">
      <nav className="subheader__nav">
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Register</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
        </ul>
      </nav>
    </header>
    <header className="header">
      <div className="header__logo">
        <a href="#">BCS STORES</a>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
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
      </div>
    </header>
  </header>
);

export default Header;
