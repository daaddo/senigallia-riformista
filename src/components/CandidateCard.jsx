import { Link } from "react-router-dom";
import listLogo from "../assets/logo-senigallia-riformista.png";
import "./CandidateCard.css";

function CandidateCard({ slug, name, role, bio, imageUrl, priority = false }) {
  return (
    <Link
      to={`/candidati/${slug}`}
      className="candidate-card"
      aria-label={`Scopri il profilo di ${name}`}
    >
      <div
        className={`candidate-card__media${
          !imageUrl ? " candidate-card__media--default-logo" : ""
        }`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Fotografia di ${name}`}
            className="candidate-card__photo"
            loading={priority ? "eager" : "lazy"}
            fetchpriority={priority ? "high" : "auto"}
          />
        ) : (
          <img
            src={listLogo}
            alt={`Logo Progetto Senigallia Riformista (fotografia di ${name} in arrivo)`}
            className="candidate-card__photo candidate-card__logo"
            loading={priority ? "eager" : "lazy"}
            fetchpriority={priority ? "high" : "auto"}
          />
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
