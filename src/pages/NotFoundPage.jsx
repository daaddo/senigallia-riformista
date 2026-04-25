import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="container not-found__inner">
        <p className="eyebrow">Errore 404</p>
        <h1 id="not-found-title" className="not-found__title">
          Pagina non trovata
        </h1>
        <p className="not-found__text">
          La pagina richiesta non esiste o e' stata spostata. Torna alla home per
          consultare l&apos;elenco dei candidati.
        </p>
        <Link to="/" className="not-found__link">
          Torna alla home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
