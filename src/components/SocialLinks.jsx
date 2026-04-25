import "./SocialLinks.css";

const LINKS = [
  {
    id: "facebook",
    href: "https://www.facebook.com/profile.php?id=61582192970322",
    label: "Facebook",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/progettosenigalliariformista/",
    label: "Instagram",
  },
  {
    id: "linktree",
    href: "https://linktr.ee/SenigalliaRiformista",
    label: "Linktree",
  },
];

function SocialIcon({ id }) {
  if (id === "facebook") {
    return (
      <svg
        className="social-links__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.989 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    );
  }
  if (id === "instagram") {
    return (
      <svg
        className="social-links__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
        />
      </svg>
    );
  }
  return (
    <svg
      className="social-links__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1H13v1.9h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
      />
    </svg>
  );
}

function SocialLinks({ variant = "default", className = "" }) {
  const rootClass = [
    "social-links",
    variant !== "default" ? `social-links--${variant}` : "",
    className.trim(),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={rootClass} aria-label="Social">
      <ul className="social-links__list" role="list">
        {LINKS.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="social-links__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                item.id === "linktree"
                  ? "Senigallia Riformista su Linktree: tutti i link"
                  : `Progetto Senigallia Riformista su ${item.label}`
              }
            >
              <SocialIcon id={item.id} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialLinks;
