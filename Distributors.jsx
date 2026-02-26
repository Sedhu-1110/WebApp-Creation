import React from "react";
import { useNavigate } from "react-router-dom";


const Distributors = () => {
  const navigate = useNavigate();

  return (
    <div className="dist-page">
      {/* Hero Section */}
      <section className="dist-hero">
        <p className="dist-tagline">
          POWERING BANKS, NBFCs &amp; FINTECHs TO LAUNCH AND SCALE SEAMLESSLY
        </p>
        <h1 className="dist-hero-title">
          Digital Infrastructure for
          <br />
          <span>Loan Against Mutual Funds and Shares</span>
        </h1>
        <p className="dist-compliance">
          <span className="dist-check">✔</span> The Tech Stack is Compliant with the Regulator-Approved Process
        </p>

        {/* Monitor mockup */}
        <div className="dist-monitors">
          <div className="dist-monitor dist-monitor--left">
            <div className="dist-monitor-screen">
              <div className="dist-screen-placeholder">
                <div className="dist-bar" style={{ width: "80%", background: "#4db6ac" }} />
                <div className="dist-bar" style={{ width: "60%", background: "#80cbc4" }} />
                <div className="dist-bar" style={{ width: "90%", background: "#4db6ac" }} />
                <div className="dist-mini-chart" />
              </div>
            </div>
            <div className="dist-monitor-stand" />
            <div className="dist-monitor-base" />
          </div>

          <div className="dist-monitor dist-monitor--center">
            <div className="dist-monitor-screen dist-monitor-screen--main">
              <div className="dist-screen-placeholder">
                <div className="dist-chart-area">
                  <svg viewBox="0 0 160 80" style={{ width: "100%", height: "60px" }}>
                    <polyline
                      points="0,60 30,40 60,50 90,20 120,35 160,10"
                      fill="none"
                      stroke="#26a69a"
                      strokeWidth="2"
                    />
                    <polyline
                      points="0,70 30,55 60,65 90,40 120,50 160,30"
                      fill="none"
                      stroke="#80cbc4"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="dist-bar-group">
                  {[70, 50, 85, 40, 65, 55].map((h, i) => (
                    <div key={i} className="dist-bar-col" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="dist-monitor-stand" />
            <div className="dist-monitor-base" />
          </div>

          <div className="dist-monitor dist-monitor--right">
            <div className="dist-monitor-screen">
              <div className="dist-screen-placeholder dist-screen-table">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="dist-table-row">
                    <div className="dist-table-cell" style={{ width: "40%" }} />
                    <div className="dist-table-cell" style={{ width: "25%" }} />
                    <div className="dist-table-cell" style={{ width: "25%" }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="dist-monitor-stand" />
            <div className="dist-monitor-base" />
          </div>
        </div>
      </section>

      {/* Request Access CTA */}
      <section className="dist-cta-section">
        <button className="dist-btn-request" onClick={() => navigate("/book-demo")}>
          Request access →
        </button>
      </section>

      {/* Solution for Lenders */}
      <section className="dist-solutions">
        <p className="dist-solutions-label">— SOLUTION FOR LENDERS —</p>
        <h2 className="dist-solutions-title">Plug and Play for Secured Credit</h2>

        <div className="dist-cards">
          {/* Card 1 */}
          <div className="dist-card">
            <div className="dist-card-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                <rect x="5" y="8" width="30" height="24" rx="2" stroke="#1a6b6b" strokeWidth="2" />
                <line x1="5" y1="14" x2="35" y2="14" stroke="#1a6b6b" strokeWidth="2" />
                <line x1="12" y1="8" x2="12" y2="14" stroke="#1a6b6b" strokeWidth="2" />
                <line x1="28" y1="8" x2="28" y2="14" stroke="#1a6b6b" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="dist-card-title">Loan Origination System</h3>
            <ul className="dist-card-list">
              <li>Instant on-boarding</li>
              <li>Dynamic pledging flows</li>
              <li>Portfolio discovery with CAS &amp; AA flows</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="dist-card">
            <div className="dist-card-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                <rect x="6" y="10" width="28" height="20" rx="2" stroke="#1a6b6b" strokeWidth="2" />
                <path d="M13 20 L20 14 L27 20" stroke="#1a6b6b" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 14 L20 26" stroke="#1a6b6b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="dist-card-title">Collateral Management System</h3>
            <ul className="dist-card-list">
              <li>Maker-checker flows</li>
              <li>Collateral risk management</li>
              <li>Invoice and receive functionalities</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="dist-card">
            <div className="dist-card-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                <circle cx="20" cy="16" r="6" stroke="#1a6b6b" strokeWidth="2" />
                <path d="M8 34 C8 27 32 27 32 34" stroke="#1a6b6b" strokeWidth="2" strokeLinecap="round" />
                <circle cx="30" cy="12" r="4" stroke="#1a6b6b" strokeWidth="1.5" />
                <path d="M27 18 C27 14 33 14 33 18" stroke="#1a6b6b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="dist-card-title">Loan Management System</h3>
            <ul className="dist-card-list">
              <li>Integration for secured lending</li>
              <li>Core banking insights</li>
              <li>LTPs/DLAs/DLAs management</li>
            </ul>
          </div>
        </div>

        <p className="dist-all-in-one">
          ⚡ An all-in-one platform to originate, manage, and scale secured lending. ⚡
        </p>

        <button className="dist-btn-request" onClick={() => navigate("/book-demo")}>
          Book a demo →
        </button>
      </section>
    </div>
  );
};

export default Distributors;
