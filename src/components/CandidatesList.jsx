import CandidateCard from "./CandidateCard.jsx";
import "./CandidatesList.css";

const candidates = [
  {
    id: 1,
    name: "Dario Romano",
    role: "Candidato Sindaco",
    bio: "Guida della coalizione riformista per la citta di Senigallia.",
  },
  {
    id: 2,
    name: "Nome Cognome",
    role: "Candidato Consigliere",
    bio: "Breve biografia del candidato. Esperienza, competenze e impegno per la citta.",
  },
  {
    id: 3,
    name: "Nome Cognome",
    role: "Candidato Consigliere",
    bio: "Breve biografia del candidato. Esperienza, competenze e impegno per la citta.",
  },
  {
    id: 4,
    name: "Nome Cognome",
    role: "Candidato Consigliere",
    bio: "Breve biografia del candidato. Esperienza, competenze e impegno per la citta.",
  },
  {
    id: 5,
    name: "Nome Cognome",
    role: "Candidato Consigliere",
    bio: "Breve biografia del candidato. Esperienza, competenze e impegno per la citta.",
  },
  {
    id: 6,
    name: "Nome Cognome",
    role: "Candidato Consigliere",
    bio: "Breve biografia del candidato. Esperienza, competenze e impegno per la citta.",
  },
  {
    id: 7,
    name: "Nome Cognome",
    role: "Candidato Consigliere",
    bio: "Breve biografia del candidato. Esperienza, competenze e impegno per la citta.",
  },
  {
    id: 8,
    name: "Nome Cognome",
    role: "Candidato Consigliere",
    bio: "Breve biografia del candidato. Esperienza, competenze e impegno per la citta.",
  },
];

function CandidatesList() {
  return (
    <section className="candidates" id="candidati" aria-labelledby="candidates-title">
      <div className="container">
        <header className="candidates__header">
          <p className="eyebrow">I candidati della lista</p>
          <h2 id="candidates-title" className="candidates__title">
            Le donne e gli uomini del Progetto Senigallia Riformista
          </h2>
          <p className="candidates__intro">
            Una squadra plurale, competente e radicata nel territorio. Conosci le
            candidate e i candidati che si mettono al servizio della citta.
          </p>
        </header>

        <ul className="candidates__grid" role="list">
          {candidates.map((candidate) => (
            <li key={candidate.id} className="candidates__item">
              <CandidateCard
                name={candidate.name}
                role={candidate.role}
                bio={candidate.bio}
                imageUrl={candidate.imageUrl}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CandidatesList;
