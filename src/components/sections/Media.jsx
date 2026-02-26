import React from "react";
import { useNavigate } from "react-router-dom";

import finsireLogo from "../../assets/images/finsire.jpg";

const industryStories = [
  {
    id: 1,
    outlet: "mint",
    outletStyle: { color: "#ff6600", fontSize: "36px", fontWeight: "700", fontFamily: "Georgia, serif" },
    bg: "#fdf3e7",
    title: "Are loans against stocks and mutual funds good for investors?",
    date: "26 January 2023",
  },
  {
    id: 2,
    outlet: "bu MONEY TODAY",
    outletStyle: { color: "#0077b6", fontSize: "22px", fontWeight: "800", fontFamily: "Arial, sans-serif", letterSpacing: "-0.5px" },
    bg: "#e8f0f7",
    title: "Is maintaining a credit score of 750 for home loans, car loans or personal loans enough?",
    date: "15 June 2023",
  },
  {
    id: 3,
    outlet: "mint",
    outletStyle: { color: "#ff6600", fontSize: "36px", fontWeight: "700", fontFamily: "Georgia, serif" },
    bg: "#fdf3e7",
    title: "Google to impose stricter guidelines for personal loans applications on Play Store effective",
    date: "06 April 2023",
  },
  {
    id: 4,
    outlet: "CNBC",
    outletStyle: { color: "#000", fontSize: "28px", fontWeight: "900", fontFamily: "Arial, sans-serif" },
    bg: "#e8eef7",
    title: "How to get a loan against mutual funds — interest rate and key details",
    date: "20 February 2023",
    peacock: true,
  },
  {
    id: 5,
    outlet: "mint",
    outletStyle: { color: "#ff6600", fontSize: "36px", fontWeight: "700", fontFamily: "Georgia, serif" },
    bg: "#fdf3e7",
    title: "Why ONDC can't be a UPI of e-commerce? All you need to know",
    date: "11 May 2023",
  },
];

const interviews = [
  {
    id: 1,
    outlet: "TRAC IN",
    outletStyle: { color: "#e53935", fontSize: "28px", fontWeight: "900", fontFamily: "Arial, sans-serif", fontStyle: "italic" },
    bg: "#fce4ec",
    title: "This Tech Startup Is Enabling Seamless Collateralisation Of Digital Assets Like MF...",
    date: "12 February 2023",
  },
  {
    id: 2,
    outlet: "CXOtoday.com",
    outletStyle: { color: "#1565c0", fontSize: "22px", fontWeight: "700", fontFamily: "Arial, sans-serif" },
    bg: "#e3f2fd",
    title: "Fintech startup Finsire disrupting the traditional loan market with its innovative approach",
    date: "04 March 2023",
    sub: "IT Perspective for Decision Makers",
  },
  {
    id: 3,
    outlet: "DEEZER",
    outletStyle: { color: "#7b1fa2", fontSize: "22px", fontWeight: "700", fontFamily: "Arial, sans-serif", letterSpacing: "1px" },
    bg: "#f3e5f5",
    title: "Unlock Loans Through Digital Assets With Shreyans Nahar of Finsire",
    date: "20 February 2023",
    heart: true,
  },
];

const MediaCard = ({ item }) => (
  <div className="media-card">
    <div className="media-card-image" style={{ background: item.bg }}>
      {item.peacock && (
        <svg viewBox="0 0 40 40" width="32" height="32" style={{ marginRight: "6px" }}>
          <circle cx="20" cy="20" r="6" fill="#e53935" />
          <path d="M20 14 Q26 8 30 14" stroke="#4caf50" strokeWidth="2" fill="none" />
          <path d="M20 14 Q28 10 30 18" stroke="#2196f3" strokeWidth="2" fill="none" />
          <path d="M20 14 Q28 16 26 24" stroke="#ff9800" strokeWidth="2" fill="none" />
          <path d="M20 14 Q18 22 12 22" stroke="#9c27b0" strokeWidth="2" fill="none" />
          <path d="M20 14 Q12 16 10 10" stroke="#ff5722" strokeWidth="2" fill="none" />
        </svg>
      )}
      {item.heart && (
        <span style={{ fontSize: "28px", marginRight: "8px" }}>💜</span>
      )}
      <span style={item.outletStyle}>{item.outlet}</span>
      {item.sub && <p style={{ fontSize: "10px", color: "#555", marginTop: "4px" }}>{item.sub}</p>}
    </div>
    <div className="media-card-body">
      <p className="media-card-title">{item.title}</p>
      <div className="media-card-footer">
        <span className="media-card-date">{item.date}</span>
        <span className="media-divider">|</span>
        <a href="#" className="media-card-link">Read more &rsaquo;</a>
      </div>
    </div>
  </div>
);

const Media = () => {
  const navigate = useNavigate();

  return (
    <div className="media-page">
      {/* Top bar */}
      <div className="media-topbar">
        <div className="media-topbar-left">
          
          <img src={finsireLogo} alt="Finsire" style={{ height: "32px", objectFit: "contain" }} />
          <span className="media-logo-text">FINSIRE</span>
          <span className="media-topbar-label">PRESS &amp; MEDIA</span>
        </div>
        <button className="media-back-btn" onClick={() => navigate("/")}>
          Go Back to Website
        </button>
      </div>

      {/* Industry Story */}
      <section className="media-section">
        <h2 className="media-section-title">INDUSTRY STORY</h2>
        <div className="media-grid media-grid--3">
          {industryStories.slice(0, 3).map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
        <div className="media-grid media-grid--2">
          {industryStories.slice(3).map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Interview */}
      <section className="media-section">
        <h2 className="media-section-title">INTERVIEW</h2>
        <div className="media-grid media-grid--3">
          {interviews.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;
