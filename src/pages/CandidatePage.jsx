import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getCandidateBySlug } from "../data/candidates.js";
import NotFoundPage from "./NotFoundPage.jsx";
import "./CandidatePage.css";

function getInitials(name) {
  if (!name) return "";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function openCasellario(casellarioUrl) {
  window.open(encodeURI(casellarioUrl), "_blank", "noopener,noreferrer");
}

function CandidatePage() {
  const { slug } = useParams();
  const candidate = useMemo(() => getCandidateBySlug(slug), [slug]);

  if (!candidate) {
    return <NotFoundPage />;
  }

  const bioParagraphs = candidate.bio
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="candidate-page">
      <header className="candidate-page__hero">
        <div className="container candidate-page__hero-inner">
          <nav
            aria-label="Percorso di navigazione"
            className="candidate-page__breadcrumb"
          >
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/candidati">Candidati</Link>
            <span aria-hidden="true">/</span>
            <span className="candidate-page__breadcrumb-current">
              {candidate.name}
            </span>
          </nav>

          <div className="candidate-page__hero-grid">
            <div className="candidate-page__media">
              {candidate.imageUrl ? (
                <img
                  src={candidate.imageUrl}
                  alt={`Fotografia di ${candidate.name}`}
                  className="candidate-page__photo"
                />
              ) : (
                <div
                  className="candidate-page__placeholder"
                  role="img"
                  aria-label={`Fotografia di ${candidate.name} non disponibile`}
                >
                  <span className="candidate-page__initials">
                    {getInitials(candidate.name)}
                  </span>
                  <span className="candidate-page__placeholder-label">
                    Foto in arrivo
                  </span>
                </div>
              )}
            </div>

            <div className="candidate-page__intro">
              <p className="candidate-page__role">{candidate.role}</p>
              <h1 className="candidate-page__name">{candidate.name}</h1>

              <ul className="candidate-page__meta">
                {candidate.birthplace ? (
                  <li>
                    <span className="candidate-page__meta-label">
                      Luogo di nascita
                    </span>
                    <span className="candidate-page__meta-value">
                      {candidate.birthplace}
                    </span>
                  </li>
                ) : null}
                {candidate.birthdate ? (
                  <li>
                    <span className="candidate-page__meta-label">
                      Data di nascita
                    </span>
                    <span className="candidate-page__meta-value">
                      {candidate.birthdate}
                    </span>
                  </li>
                ) : null}
              </ul>

              <div className="candidate-page__actions">
                {candidate.casellarioUrl ? (
                  <button
                    type="button"
                    className="candidate-page__download"
                    onClick={() => openCasellario(candidate.casellarioUrl)}
                  >
                    Apri Casellario Giudiziario
                  </button>
                ) : null}
                <Link to="/candidati" className="candidate-page__back">
                  Torna all&apos;elenco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="candidate-page__body" aria-labelledby="cv-title">
        <div className="container candidate-page__body-inner">
          <div className="candidate-page__cv">
            <p className="eyebrow">Curriculum Vitae</p>
            <h2 id="cv-title" className="candidate-page__cv-title">
              Profilo e percorso
            </h2>

            <div className="candidate-page__cv-content">
              {bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {candidate.casellarioUrl ? (
              <div className="candidate-page__cv-footer">
                <button
                  type="button"
                  className="candidate-page__download candidate-page__download--ghost"
                  onClick={() => openCasellario(candidate.casellarioUrl)}
                >
                  Apri Casellario Giudiziario
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </article>
  );
}

export default CandidatePage;
