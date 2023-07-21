import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
// import { AiOutlineHeart } from "react-icons/ai";

const Footer = () => (
  <footer className="footerContainer">
    <footer className="subfooter">
      <div>
        <div className="footer__logo">
          <a href="#">BCS STORES</a>
        </div>
        <form className="example" action="action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search" />
            search
          </button>
        </form>
      </div>
      <nav className="footer__nav">
        <div className="footer__nav--div">
          <h5>New In</h5>{" "}
          <ul>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
          </ul>
        </div>
        <div className="footer__nav--div">
          <h5>Beddings</h5>{" "}
          <ul>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
          </ul>
        </div>
        <div className="footer__nav--div">
          <h5>Clothings</h5>{" "}
          <ul>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
          </ul>
        </div>
        <div className="footer__nav--div">
          <h5>Stores</h5>{" "}
          <ul>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
            <li>Lorem new</li>
          </ul>
        </div>
      </nav>
      <nav className="subfooter__nav">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Help Desk</a>
          </li>
        </ul>
      </nav>
    </footer>
    <footer className="footer">
      <div className="footer__logo">
        <a href="#">BCS STORES</a>
      </div>
      <div className="footer__copyright">
        <span>
          Copyright &copy; 2023{" "}
          <a href="https://github.com/duokobia">duokobia</a>. All rights
          reserved
        </span>
      </div>
      <div>
        <h6>CONNECT WITH US</h6>
        <div className="footer__icons">
          <span>
            <a href="https://github.com/duokobia">
              <BiLogoFacebook />
            </a>
          </span>
          <span>
            <a href="https://github.com/duokobia">
              <BiLogoTwitter />
            </a>
          </span>
          <span>
            <a href="https://github.com/duokobia">
              <BiLogoInstagram />
            </a>
          </span>
          <span>
            <a href="https://github.com/duokobia">
              <BiLogoYoutube />
            </a>
          </span>
        </div>
      </div>
    </footer>
  </footer>
);

export default Footer;
