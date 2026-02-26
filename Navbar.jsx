import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import callImage from "../../assets/images/finsire.jpg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isInnerPage =
    location.pathname === "/book-demo" ||
    location.pathname === "/get-loan" ||
    location.pathname === "/terms" ||
    location.pathname === "/privacy" ||
    location.pathname === "/distributors" ||
    location.pathname === "/blogs" ||
    location.pathname === "/media" ||
    location.pathname === "/careers" ||
    location.pathname === "/about-us";

  return (
    <nav className="navbar">
      <div
        className="logo-container"
        style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
        onClick={() => navigate("/")}
      >
        <img
          src={callImage}
          alt="Finsire Logo"
          style={{ height: "36px", width: "36px", objectFit: "contain", borderRadius: "6px" }}
        />
        <span className="logo-text">FINSIRE</span>
      </div>

      {isInnerPage ? (
        <div className="nav-buttons">
          <Link to="/" className="btn-light">← Back to Home</Link>
        </div>
      ) : (
        <>
          <ul className="nav-links">
            <li><Link to="/distributors" style={{ textDecoration: "none", color: "inherit" }}>DISTRIBUTORS</Link></li>
            <li><Link to="/blogs" style={{ textDecoration: "none", color: "inherit" }}>BLOGS</Link></li>
            <li><Link to="/media" style={{ textDecoration: "none", color: "inherit" }}>MEDIA</Link></li>
            <li><Link to="/careers" style={{ textDecoration: "none", color: "inherit" }}>CAREERS</Link></li>
            <li><Link to="/about-us" style={{ textDecoration: "none", color: "inherit" }}>ABOUT US</Link></li>
          </ul>
          <div className="nav-buttons">
            <Link to="/book-demo" className="btn-light">Book a Demo</Link>
            <button className="btn-gradient" onClick={() => navigate("/get-loan")}>Get a Loan</button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
