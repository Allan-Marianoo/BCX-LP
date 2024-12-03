import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <ul>
            <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about-us">SOBRE NÓS</Link>
              </li>
              <li>
                <Link to="/glossario">GLOSSÁRIO</Link>
              </li>
              <li>
                <a href="#produtos">PRODUTOS</a>
              </li>
              <li>
              <Link to="/faq">F.A.Q</Link>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
          <a
                href="https://bcxcorretora.com.br/panel/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
            <button
              className="btn register"
            >
              REGISTRAR
            </button>
            </a>
            <a
                href="https://bcxcorretora.com.br/panel/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
            <button
              className="btn login"
            >
              ENTRAR
            </button>
              </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
