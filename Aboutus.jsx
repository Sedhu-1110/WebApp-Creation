import React from "react";
import { useNavigate } from "react-router-dom";
import finsireLogo from "../../assets/images/finsire.jpg";


const Aboutus = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Top bar */}
      <div className="about-topbar">
        <div className="about-topbar-left">
          <img src={finsireLogo} alt="Finsire" style={{ height: "32px", objectFit: "contain" }} />
          <span className="about-logo-text">FINSIRE</span>
        </div>
        <button className="about-back-btn" onClick={() => navigate("/")}>
          Go Back to Website
        </button>
      </div>

      {/* Content */}
      <div className="about-content">
        <h1 className="about-title">The Story of Finsire</h1>

        <section className="about-section">
          <h2 className="about-heading">
            OUR GOAL IS SIMPLE: TO MAKE SECURED CREDIT SEAMLESS, DIGITAL, AND ACCESSIBLE
          </h2>
          <p>
            At Finsire, we enjoy solving problems that others often overlook. One such challenge in India has always been around borrowing against investments. For years, pledging mutual funds or shares meant paperwork, delays, and friction. We wanted to change that.
          </p>
          <p>
            What earlier took days to process can now happen in minutes with Finsire. From lien marking to loan disbursal, our infrastructure makes the journey smooth, secure, and entirely digital, all while staying compliant with regulations.
          </p>
          <p>
            As we worked with lenders and wealth platforms, we saw a bigger opportunity. Institutions needed plug-and-play infrastructure to launch secured credit products without building tech from scratch.
          </p>
          <p>
            At the same time, customers wanted access to instant liquidity without breaking their investments. That's what led us to design a full-stack platform covering loan origination, collateral management, and loan servicing, purpose-built for secured lending.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-heading">WHAT SETS US APART IS OUR UNIQUE CULTURE AND APPROACH.</h2>
          <p>
            We are a team of product thinkers, engineers, and finance professionals united by one mission: to unlock the power of assets and make secured credit accessible to everyone. We value speed, compliance, and trust and not only in the products we build but also in the way we work with our partners.
          </p>
          <p>
            Our vision is ambitious. We want to power the rails of secured credit in India and beyond. From banks and NBFCs to fintechs and wealth managers, we are enabling institutions to offer loans against mutual funds and shares at scale, instantly, and digitally.
          </p>
          <p>
            For us, this is not just about building technology. It is about building a movement, one where credit works as seamlessly as payments, and where wealth and liquidity can co-exist without compromise.
          </p>
          <p>
            We invite you to join us on this journey as we continue to push the boundaries of credit infrastructure and shape the future of secured lending.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
