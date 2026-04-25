import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";

  const navItems = [
    { to: "/", label: "Home", hash: "" },
    { to: "/#candidati", label: "Candidati", hash: "#candidati" },
    { to: "/#programma", label: "Programma", hash: "#programma" },
  ];

  return (
    <header className="site-header" role="banner">
      <div className="container site-header__inner">
        <Link
          to="/"
          className="site-header__brand"
          aria-label="Torna alla home"
        >
          <span className="site-header__mark" aria-hidden="true">
            PSR
          </span>
          <span className="site-header__brand-text">
            <span className="site-header__brand-top">Progetto</span>
            <span className="site-header__brand-bottom">
              Senigallia Riformista
            </span>
          </span>
        </Link>

        <nav
          className="site-header__nav"
          aria-label="Navigazione principale"
        >
          <ul>
            {navItems.map((item) => {
              const isActive = item.hash
                ? isHome && hash === item.hash
                : isHome && !hash;

              if (item.hash) {
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={`site-header__link${
                        isActive ? " is-active" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive: routeActive }) =>
                      `site-header__link${
                        routeActive && !hash ? " is-active" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
