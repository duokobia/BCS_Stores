import { BsSearch, BsFillPersonFill, BsCart3, BsBagPlus } from "react-icons/bs";
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
            {/* <ul className="drop-menu">
              <li>
                <a href="/"> Drop menu 1</a>
              </li>
              <li>
                <a href="/">Drop menu 2</a>
              </li>
              <li>
                <a href="/">Drop menu 3</a>
              </li>
              <li>
                <a href="/">Drop menu 4</a>
              </li>
            </ul> */}
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
  </header>
);

export default Header;
