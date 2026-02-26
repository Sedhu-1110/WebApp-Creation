import { Link } from "react-router-dom";

const partners = [
  {
    name: "City Union Bank",
    badge: "LOWEST INTEREST RATES",
    badgeColor: "#3b82f6",
    badgeBg: "#eff6ff",
    logo: "CUB",
    logoBg: "#1e40af",
    logoColor: "white",
    img: new URL("../../assets/logos/City.png", import.meta.url).href,
  },
  {
    name: "Bajaj Finance Limited",
    badge: "LEADS WITH 35%+ MARKET SHARE",
    badgeColor: "#8f76bb",
    badgeBg: "#f5f3ff",
    logo: "B",
    logoBg: "#1e3a8a",
    logoColor: "white",
    img: new URL("../../assets/logos/Bajaj.png", import.meta.url).href,
  },
  {
    name: "Suryoday Small Finance Bank",
    badge: "HIGHEST LOAN-TO-VALUE",
    badgeColor: "#16a34a",
    badgeBg: "#f0fdf4",
    logo: "S",
    logoBg: "#f97316",
    logoColor: "white",
    img: new URL("../../assets/logos/Suryodaya.png", import.meta.url).href,
  },
  {
    name: "Karur Vysya Bank",
    badge: "NEWLY ADDED PARTNER",
    badgeColor: "#ca8a04",
    badgeBg: "#fefce8",
    logo: "KVB",
    logoBg: "#15803d",
    logoColor: "white",
    img: new URL("../../assets/logos/Karur.png", import.meta.url).href,
  },
  {
    name: "Aditya Birla Capital",
    badge: "NEWLY ADDED PARTNER",
    badgeColor: "#ca8a04",
    badgeBg: "#fefce8",
    logo: "AB",
    logoBg: "#dc2626",
    logoColor: "white",
    img: new URL("../../assets/logos/Aditya.png", import.meta.url).href,
  },
];

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-container">
        <h1 className="hero-title">
          Digital Infrastructure for <br />
          Loan Against Mutual Funds and Shares
        </h1>

        <p className="hero-sub">
          <span className="hero-check">✓</span>
          Building for RBI-Regulated Banks and NBFCs
        </p>

        <div className="hero-cards">
          {partners.map((p, i) => (
            <div className="hero-card" key={i}>
              <div className="hero-card-img">
                <img
                  src={p.img}
                  alt={p.name}
                  className="hero-card-photo"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="hero-card-logo" style={{ background: p.logoBg, color: p.logoColor }}>
                  {p.logo}
                </div>
              </div>
              <div className="hero-card-body">
                <p className="hero-card-name">{p.name}</p>
                <span className="hero-card-badge" style={{ color: p.badgeColor, background: p.badgeBg }}>
                  <span className="hero-badge-dot" style={{ background: p.badgeColor }} />
                  {p.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-buttons">
          <Link to="/book-demo" className="hero-link">
            How it works <span>↗</span>
          </Link>
          <Link to="/get-loan" className="hero-cta">
            Check my eligibility →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
