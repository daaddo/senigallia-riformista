import { Link } from "react-router-dom";
import "./CandidateCard.css";

function getInitials(name) {
  if (!name) return "";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function CandidateCard({ slug, name, role, bio, imageUrl }) {
  return (
    <Link
      to={`/candidati/${slug}`}
      className="candidate-card"
      aria-label={`Scopri il profilo di ${name}`}
    >
      <div className="candidate-card__media">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Fotografia di ${name}`}
            className="candidate-card__photo"
            loading="lazy"
          />
        ) : (
          <div
            className="candidate-card__placeholder"
            role="img"
            aria-label={`Fotografia di ${name} non disponibile`}
          >
            <span className="candidate-card__initials">{getInitials(name)}</span>
            <span className="candidate-card__placeholder-label">
              Foto in arrivo
            </span>
          </div>
        )}
      </div>

      <div className="candidate-card__body">
        {role ? <p className="candidate-card__role">{role}</p> : null}
        <h3 className="candidate-card__name">{name}</h3>
        {bio ? <p className="candidate-card__bio">{bio}</p> : null}
        <span className="candidate-card__cta" aria-hidden="true">
          Leggi il profilo
          <span className="candidate-card__cta-arrow">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

export default CandidateCard;
