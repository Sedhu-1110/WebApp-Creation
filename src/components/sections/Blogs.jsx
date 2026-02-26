import React from "react";
import { useNavigate } from "react-router-dom";

import finsireLogo from "../../assets/images/finsire.jpg";

const blogPosts = [
  {
    id: 1,
    title: "6 Things to Know About Loan Against Mutual Funds",
    excerpt: "Get fast access to cash without selling your investments with loan against mutual funds.",
    date: "15 Apr' 2024",
    readTime: "6 Min Read",
    bg: "linear-gradient(135deg, #c8e6c9 0%, #fff9c4 50%, #b3e5fc 100%)",
    emoji: "💼",
  },
  {
    id: 2,
    title: "Myths and Facts About Loan Against Mutual Fund",
    excerpt: "Unlock the potential of your investments with our guide to loans against mutual funds.",
    date: "11 Jun' 2024",
    readTime: "3 Min Read",
    bg: "linear-gradient(135deg, #80cbc4 0%, #4dd0e1 50%, #ce93d8 100%)",
    emoji: "₹",
  },
  {
    id: 3,
    title: "Managing Loan Against Mutual Funds Amid Market Volatility",
    excerpt: "Discover how market volatility impacts loan against mutual funds and en...",
    date: "19 Jun' 2024",
    readTime: "3 Min Read",
    bg: "linear-gradient(135deg, #1565c0 0%, #1976d2 40%, #42a5f5 100%)",
    emoji: "📊",
  },
  {
    id: 4,
    title: "Loan Against Mutual Funds: Choosing the Right Mutual Funds for Collateral",
    excerpt: "An approach to selecting mutual funds for collateral purposes. This guid...",
    date: "26 Jun' 2024",
    readTime: "4 Min Read",
    bg: "linear-gradient(135deg, #388e3c 0%, #66bb6a 50%, #a5d6a7 100%)",
    emoji: "🃏",
  },
  {
    id: 5,
    title: "Understanding the Terms of Loan Against Mutual Funds",
    excerpt: "Explore the essentials of loan terms and interest rates when borrowing a...",
    date: "25 Jul' 2024",
    readTime: "4 Min Read",
    bg: "linear-gradient(135deg, #f9a825 0%, #fdd835 50%, #fff176 100%)",
    emoji: "₹",
  },
  {
    id: 6,
    title: "Loan Against Mutual Funds SIP Explained: Tap Liquidity While Staying Invested",
    excerpt: "Discover how to unlock liquidity from your SIP holdings without breaking...",
    date: "20 Jan' 2025",
    readTime: "4 Min Read",
    bg: "linear-gradient(135deg, #1565c0 0%, #1976d2 40%, #29b6f6 100%)",
    emoji: "🐷",
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="blogs-page">
      {/* Top bar */}
      <div className="blogs-topbar">
        <div className="blogs-topbar-left">
          
          <img src={finsireLogo} alt="Finsire" style={{ height: "32px", objectFit: "contain" }} />
          <span className="blogs-logo-text">FINSIRE</span>
          <span className="blogs-topbar-label">BLOGS</span>
        </div>
        <button className="blogs-back-btn" onClick={() => navigate("/")}>
          Go Back to Website
        </button>
      </div>

      {/* Header */}
      <div className="blogs-header">
        <h1 className="blogs-title">Fresh Read from Finsire</h1>
        <p className="blogs-subtitle">STAY UPDATED WITH LATEST FEATURES &amp; FINTECH INSIGHTS.</p>
      </div>

      {/* Grid */}
      <div className="blogs-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-card-image" style={{ background: post.bg }}>
              <span className="blog-card-emoji">{post.emoji}</span>
            </div>
            <div className="blog-card-body">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-card-date">{post.date}</span>
                <span className="blog-card-read">{post.readTime}</span>
                <a href="#" className="blog-card-link">
                  Read more &rsaquo;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
