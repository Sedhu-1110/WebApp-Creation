import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-content">

        
        <header className="legal-header">
          <h1 className="legal-title">Terms and Conditions</h1>
          <p className="legal-effective-date">EFFECTIVE DATE: 31 MAY 2025</p>
        </header>

        <div className="legal-text-block">
          <p>
            These terms and conditions contain the terms on which You (<strong>User</strong>) access and register on Finsire’s Web & Mobile technology platform (<strong>Platform</strong>), owned and managed by Finsire Technologies Private Limited (<strong>Finsire</strong>) to avail various loan facilities offered by our different partner Banks/NBFCs through the Platform (“Credit Facilitation Services / CFS”).
          </p>
          <p>
            Please read these terms of use carefully. By accessing the Platform or using this service, you signify that you have read, understood and agree to be bound by these T&Cs, Privacy Policy and any other applicable law, whether or not you are a registered member of the Platform. If you do not agree with these terms, please do not access the Platform or use this service.
          </p>
          <p>
            For the purposes of these T&Cs, “we”, “our” and “us” shall mean Finsire, and/or third-party service providers engaged by Finsire to render certain Services on the Platform and ‘you’ and ‘your’ shall mean a User who meets the eligibility criteria set out below.
          </p>
        </div>

        <section className="legal-section">
          <h2>1. TERMS AND CONDITIONS</h2>
          <p>
            We reserve the right to update or modify these T&Cs at any time. Your access and use of the Platform following any such change constitutes your agreement to follow and be bound by these T&Cs, as updated or modified. For this reason, we encourage you to review these T&Cs each time you access and use the Platform and/or avail our Services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. PURPOSE</h2>
          <p>
            Finsire’s Web & Mobile technology platform (Platform) offers various loan facilities through its various Banks/NBFC partners. User can avail loans by completing the entire application process on the Platform itself. Further, the User can withdraw from the approved credit facility and repay the EMIs of the loan using the Platform itself.
          </p>
        </section>


      </div>
    </div>
  );
};

// CRITICAL FIX: This export statement prevents the white screen SyntaxError
export default TermsAndConditions;