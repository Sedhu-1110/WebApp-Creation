import React from "react";
import { useNavigate } from "react-router-dom";
import finsireLogo from "../../assets/images/finsire.jpg";


const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="careers-page">
      {/* Top bar */}
      <div className="careers-topbar">
        <div className="careers-topbar-left">
          <img src={finsireLogo} alt="Finsire" style={{ height: "32px", objectFit: "contain" }} />
          <span className="careers-logo-text">FINSIRE</span>
          <span className="careers-topbar-label">CAREERS</span>
        </div>
        <button className="careers-back-btn" onClick={() => navigate("/")}>
          Go Back to Website
        </button>
      </div>

      {/* Background watermark pattern */}
      <div className="careers-bg" />

      {/* Main Card */}
      <div className="careers-content">
        <div className="careers-card">
          {/* Cup illustration */}
          <div className="careers-cup">
            <svg viewBox="0 0 120 160" width="110" height="150" xmlns="http://www.w3.org/2000/svg">
              {/* Cup body */}
              <defs>
                <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#6dbf4a", stopOpacity: 1 }} />
                  <stop offset="40%" style={{ stopColor: "#a8e06a", stopOpacity: 1 }} />
                  <stop offset="70%" style={{ stopColor: "#d4f0a0", stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: "#6dbf4a", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#c8e8b0", stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: "#e8f8d8", stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              {/* Outer cup shape */}
              <path
                d="M18 18 L30 148 Q60 155 90 148 L102 18 Z"
                fill="url(#cupGrad)"
                stroke="#4a9e30"
                strokeWidth="1.5"
              />
              {/* Inner lighter area */}
              <path
                d="M30 22 L40 142 Q60 148 80 142 L90 22 Z"
                fill="url(#innerGrad)"
              />
              {/* Top rim */}
              <ellipse cx="60" cy="18" rx="42" ry="6" fill="#7acc50" stroke="#4a9e30" strokeWidth="1" />
              {/* Rim highlight */}
              <ellipse cx="60" cy="16" rx="38" ry="4" fill="#90d860" opacity="0.6" />
              {/* Shine */}
              <path d="M35 30 Q38 80 40 130" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
            </svg>
          </div>

          <h2 className="careers-title">
            No current openings,<br />
            but we'd love to connect.
          </h2>
          <p className="careers-subtitle">
            Follow us for updates and be the first to know<br />
            when new opportunities drop!
          </p>

          <div className="careers-links">
            <div className="careers-link-block">
              <span className="careers-link-label">Drop your resume at</span>
              <a href="mailto:hr@finsire.com" className="careers-link">
                hr@finsire.com ↗
              </a>
            </div>
            <div className="careers-divider" />
            <div className="careers-link-block">
              <span className="careers-link-label">Follow us on</span>
              <a
                href="https://www.linkedin.com/company/finsire"
                target="_blank"
                rel="noreferrer"
                className="careers-link"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
