import logo from "../assets/logo-senigallia-riformista.png";
import SocialLinks from "./SocialLinks.jsx";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__band hero__band--blue">
        <div className="container hero__content">
          <div className="hero__text">
            <p className="hero__eyebrow">Progetto</p>
            <h1 id="hero-title" className="hero__title">
              Senigallia Riformista
            </h1>
            <p className="hero__subtitle">
              Elezioni amministrative &mdash; 24 e 25 maggio 2026
            </p>
            <p className="hero__description">
              Progetto Senigallia Riformista e&apos; una lista civica a sostegno
              di Dario Romano sindaco. Uno spazio condiviso tra cittadini,
              associazioni e culture riformiste. Punta su competenze e
              credibilita&apos; per una politica concreta, partecipata e
              orientata al bene comune. Promuove valori di democrazia,
              solidarieta&apos;, giustizia, legalita&apos; e buona
              amministrazione, coinvolgendo giovani, accademici e realta&apos;
              associative per costruire una visione comune del futuro.
            </p>
            <SocialLinks variant="hero" />
          </div>

          <div className="hero__logo-wrap">
            <span className="hero__logo-halo" aria-hidden="true" />
            <img
              src={logo}
              alt="Logo Progetto Senigallia Riformista"
              className="hero__logo"
            />
          </div>
        </div>
      </div>

      <svg
        className="hero__wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C220,-10 460,70 720,30 C980,-10 1220,60 1440,20 L1440,120 L0,120 Z"
          fill="var(--color-purple-light)"
          opacity="0.9"
        />
        <path
          d="M0,55 C220,15 480,95 740,55 C1000,15 1220,75 1440,50 L1440,120 L0,120 Z"
          fill="var(--color-purple)"
          opacity="0.95"
        />
        <path
          d="M0,85 C240,50 520,115 780,85 C1040,55 1260,100 1440,85 L1440,120 L0,120 Z"
          fill="var(--color-magenta)"
        />
      </svg>

      <div className="hero__band hero__band--magenta">
        <div className="container hero__bottom">
          <p className="hero__claim">Scegli l&apos;alternativa</p>
          <p className="hero__cta">Vota Riformista</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
