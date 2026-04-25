import CandidateCard from "./CandidateCard.jsx";
import { councilCandidates } from "../data/candidates.js";
import "./CandidatesList.css";

function CandidatesList() {
  return (
    <section
      className="candidates"
      id="candidati"
      aria-labelledby="candidates-title"
    >
      <div className="container">
        <header className="candidates__header">
          <p className="eyebrow">I candidati della lista</p>
          <h2 id="candidates-title" className="candidates__title">
            Le donne e gli uomini del Progetto Senigallia Riformista
          </h2>
          <p className="candidates__intro">
            Una squadra plurale, competente e radicata nel territorio. Conosci le
            candidate e i candidati che si mettono al servizio della citta'.
          </p>
        </header>

        <div className="candidates__group">
          <p className="candidates__group-label">
            Candidate e candidati al Consiglio Comunale
          </p>
          <ul className="candidates__grid" role="list">
            {councilCandidates.map((candidate) => (
              <li key={candidate.slug} className="candidates__item">
                <CandidateCard
                  slug={candidate.slug}
                  name={candidate.name}
                  role={candidate.role}
                  bio={candidate.bio}
                  imageUrl={candidate.imageUrl}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CandidatesList;
