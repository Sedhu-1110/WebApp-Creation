import React from "react";
import { Link } from "react-router-dom";

const WhyPledge = () => {
  return (
    <section className="pledge-section">
      <div className="pledge-container">

        <p className="pledge-subtitle">
          WHY PLEDGE INSTEAD OF SELLING?
        </p>

        <h2 className="pledge-title">
          Unlock cash, Preserve wealth
        </h2>

        <div className="pledge-grid">

          <div className="pledge-card">
            <div className="pledge-icon">📈</div>
            <h3>Compounding Works</h3>
            <p>
              Your funds stay invested, keep earning - even while pledged.
              No loss on market upside.
            </p>
          </div>

          <div className="pledge-card">
            <div className="pledge-icon">📉</div>
            <h3>Avoid Bad Timing Losses</h3>
            <p>
              Selling in a dip locks losses. Pledging lets you ride the
              recovery and access cash.
            </p>
          </div>

          <div className="pledge-card">
            <div className="pledge-icon">🧾</div>
            <h3>Maintain Tax Efficiency</h3>
            <p>
              No capital gains tax triggered because you're not selling units.
              Keep your tax planning intact.
            </p>
          </div>

          <div className="pledge-card">
            <div className="pledge-icon">💳</div>
            <h3>Access More, Pay Less</h3>
            <p>
              Get up to 80% of your MF value with lower rates than
              personal loans or credit cards.
            </p>
          </div>

          <div className="pledge-card">
            <div className="pledge-icon">⚙️</div>
            <h3>Flexibility with Control</h3>
            <p>
              Pay interest only on what you use. Repay principal
              when you want without penalties.
            </p>
          </div>

        </div>

        <div className="pledge-pill">
          ✨ Let your portfolio keep growing while you get the funds you need
        </div>

        <Link to="/get-loan" className="pledge-btn">
          Check my eligibility →
        </Link>

      </div>
    </section>
  );
};

export default WhyPledge;