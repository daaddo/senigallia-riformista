import logo from "../assets/logo-senigallia-riformista.svg";
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
              Elezioni amministrative - 24 e 25 maggio 2026
            </p>
          </div>

          <div className="hero__logo-wrap">
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
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,80 C240,10 480,130 720,70 C960,10 1200,110 1440,60 L1440,140 L0,140 Z"
          fill="var(--color-purple)"
          opacity="0.85"
        />
        <path
          d="M0,110 C240,60 520,150 780,100 C1040,50 1260,130 1440,100 L1440,140 L0,140 Z"
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
