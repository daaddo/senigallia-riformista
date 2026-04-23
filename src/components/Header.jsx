import "./Header.css";

function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#home" aria-label="Torna alla home">
          <span className="site-header__mark" aria-hidden="true">PSR</span>
          <span className="site-header__brand-text">
            <span className="site-header__brand-top">Progetto</span>
            <span className="site-header__brand-bottom">Senigallia Riformista</span>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Navigazione principale">
          <ul>
            <li>
              <a href="#home" className="site-header__link is-active">
                Home
              </a>
            </li>
            <li>
              <a href="#candidati" className="site-header__link">
                Candidati
              </a>
            </li>
            <li>
              <a href="#programma" className="site-header__link">
                Programma
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
