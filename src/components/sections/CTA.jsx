import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const LaurelLeft = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M3 12C3 12 5 7 9 6C8 9 9 11 12 12C9 12 7 13 6 16C4 15 3 12 3 12Z" stroke="#1a5f6e" strokeWidth="1.2"/>
    <path d="M3 12C3 12 4 16 7 17C7 14 9 13 12 12C9 12 8 10 9 7C6 8 3 12 3 12Z" stroke="#1a5f6e" strokeWidth="1.2"/>
    <line x1="12" y1="6" x2="12" y2="18" stroke="#1a5f6e" strokeWidth="1" strokeDasharray="1 1"/>
  </svg>
);

const LaurelRight = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: 'scaleX(-1)' }}>
    <path d="M3 12C3 12 5 7 9 6C8 9 9 11 12 12C9 12 7 13 6 16C4 15 3 12 3 12Z" stroke="#1a5f6e" strokeWidth="1.2"/>
    <path d="M3 12C3 12 4 16 7 17C7 14 9 13 12 12C9 12 8 10 9 7C6 8 3 12 3 12Z" stroke="#1a5f6e" strokeWidth="1.2"/>
    <line x1="12" y1="6" x2="12" y2="18" stroke="#1a5f6e" strokeWidth="1" strokeDasharray="1 1"/>
  </svg>
);

export default function CTA() {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState("hidden");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === "hidden") {
          // crack of light appears
          setPhase("crack");
          // door swings open
          setTimeout(() => setPhase("open"), 600);
          // dark fades away, content appears
          setTimeout(() => setPhase("reveal"), 1400);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [phase]);

  return (
    <section className="cta-section" ref={sectionRef}>

      {/* Dark overlay - left panel */}
      <div className={`cta-door cta-door-left cta-door--${phase}`} />
      {/* Dark overlay - right panel */}
      <div className={`cta-door cta-door-right cta-door--${phase}`} />

      {/* Light crack in the center */}
      <div className={`cta-crack cta-crack--${phase}`} />

      {/* Glow behind the door */}
      <div className={`cta-glow cta-glow--${phase}`} />

      {/* Content */}
      <div className={`cta-container cta-container--${phase}`}>
        <h2 className="cta-title">
          Unlock More Power From Your <br />
          Portfolio – Starting Today
        </h2>

        <div className="cta-badges">
          <LaurelLeft />
          <span>100% Secure</span>
          <span className="cta-plus">+</span>
          <span>Regulatory Compliant</span>
          <span className="cta-plus">+</span>
          <span>No-Prepayment Charges</span>
          <LaurelRight />
        </div>

        <p className="cta-desc">
          Stop letting your investments sit idle– unlock instant liquidity.<br />
          Borrow smart, stay invested, and keep growing.
        </p>

        <div className="cta-buttons">
          <Link to="/get-loan" className="cta-link">
            Check My Eligibility <span>↗</span>
          </Link>
          <Link to="/get-loan" className="cta-apply">
            Apply Now →
          </Link>
        </div>
      </div>

    </section>
  );
}
