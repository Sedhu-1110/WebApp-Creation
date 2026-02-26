import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-content">
        
        <header className="legal-header">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-effective-date">LAST UPDATE ON: 16 FEBRUARY 2026</p>
        </header>

        <section className="legal-section">
          <h2>1. INTRODUCTION</h2>
          <ul className="legal-list">
            <li>
              This is the Privacy Policy (“Policy”) of FINSIRE TECHNOLOGIES PRIVATE LIMITED, 
              a company incorporated under the Companies Act 2013 and having its registered 
              office at 48, First Floor, 2nd Street, Balaji Nagar, Royapettah, Chennai, 
              600014 (“Company”). The Policy has been drafted in accordance to Information 
              Technology Rules, 2011 and The Digital Personal Data Protection Act, 2023.
            </li>
            <li>
              Finsire Technologies Private Limited (referred to as “Company”, “We”, “Us” or “Our”) 
              owns and operates the website www.finsire.com and/or the mobile application 
              and SDKs, ‘Finsire’ (referred to as the “Platform”).
            </li>
            <li>
              “You” and “Your” shall mean anyone who visits, accesses, or uses our Platform 
              or obtains Services from Us through our Platform.
            </li>
            <li>
              We are committed to protecting Your privacy and the information that You share 
              while using and operating the Platform. We value the trust You place in Us.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;