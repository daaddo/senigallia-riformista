import SocialLinks from "./SocialLinks.jsx";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__brand-top">Progetto</p>
          <p className="site-footer__brand-bottom">Senigallia Riformista</p>
          <p className="site-footer__tagline">
            Elezioni amministrative - 24 e 25 maggio 2026
          </p>
          <SocialLinks variant="footer" className="site-footer__social" />
        </div>

        <div className="site-footer__meta">
          <p className="site-footer__note">
            Committente responsabile: Michela Gambelli
          </p>
          <p className="site-footer__copy">
            &copy; {year} Progetto Senigallia Riformista. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>

      <div className="site-footer__bar" aria-hidden="true" />
    </footer>
  );
}

export default Footer;
