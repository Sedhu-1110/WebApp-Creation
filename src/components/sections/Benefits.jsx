import React from "react";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">

        <p className="benefits-subtitle">
          WHY LOAN AGAINST MUTUAL FUNDS
        </p>

        <h2 className="benefits-title">Key Benefits</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
            <div className="icon-box">💰</div>
            <h3>Stay Invested, Keep Growing</h3>
            <p>
              Your mutual funds remain invested, so you keep earning
              returns while accessing cash.
            </p>
          </div>

          <div className="benefit-card">
            <div className="icon-box">📉</div>
            <h3>Lower Interest, Higher Value</h3>
            <p>
              Enjoy rates far below personal loans or credit cards,
              with higher sanctioned amount.
            </p>
          </div>

          <div className="benefit-card">
            <div className="icon-box">🔄</div>
            <h3>Flexible Repayments</h3>
            <p>
              Pay interest only on what you use and repay principal
              anytime without penalties.
            </p>
          </div>

          <div className="benefit-card">
            <div className="icon-box">⚡</div>
            <h3>Instant & 100% Digital Process</h3>
            <p>
              Apply online, pledge digitally, & get disbursal in
              minutes without branch visits.
            </p>
          </div>

        </div>

        <div className="benefits-pill">
          ✨ Enjoy rates lower than personal loans or credit cards, with higher sanctioned limits
        </div>

        <Link to="/get-loan" className="benefits-btn">
          Check my eligibility →
        </Link>

      </div>
    </section>
  );
};

export default Benefits;