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

function CandidateCard({ name, role, bio, imageUrl }) {
  return (
    <article className="candidate-card">
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
              Foto non disponibile
            </span>
          </div>
        )}
      </div>

      <div className="candidate-card__body">
        {role ? <p className="candidate-card__role">{role}</p> : null}
        <h3 className="candidate-card__name">{name}</h3>
        {bio ? <p className="candidate-card__bio">{bio}</p> : null}
      </div>
    </article>
  );
}

export default CandidateCard;
