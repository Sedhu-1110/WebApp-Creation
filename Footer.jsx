import React from 'react';
import { Link } from "react-router-dom";

const logos = [
  "Spark Capital", "DEVX", "T-Hub", "1947 Rise", "Google Pay", "Groww", "SpaceX",
  "Razorpay", "X", "OYO", "coinbase", "ippopay", "GVC", "Tracxn",
  "digio", "LVX", "GrowthCap vc", "NT", "7.7",
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0d3d4a', color: 'white', fontFamily: 'DM Sans, sans-serif', textAlign: 'left', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 48px 0 48px' }}>

        {/* ── Top Section ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '48px', marginBottom: '40px', flexWrap: 'wrap' }}>

          {/* Brand */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '4px', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#0d3d4a', fontWeight: 900, fontSize: '16px' }}>≡</span>
              </div>
              <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '0.12em' }}>FINSIRE</span>
            </div>
            <p style={{ color: '#a8c5cc', fontSize: '13px', lineHeight: '1.7', marginBottom: '20px' }}>
              Empower your decisions effortlessly with our suite designed to optimize operations and elevate customer experience.
            </p>
            <p style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.04em', color: '#a8c5cc' }}>
              ✉ CONTACT US:{' '}
              <a href="mailto:support@finsire.com" style={{ color: 'white', textDecoration: 'underline' }}>
                SUPPORT@FINSIRE.COM
              </a>
            </p>
          </div>

          {/* Backed By */}
          <div style={{ flex: 1, minWidth: '380px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '18px', lineHeight: '1.2', fontFamily: 'Georgia, serif', color: 'white' }}>
              Backed by Institutions and Leaders from
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {logos.map((logo, i) => (
                <div key={i} style={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  height: '32px',
                  padding: '0 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ color: '#1a1a1a', fontSize: '10px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Nav Links ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(255,255,255,0.15)', padding: '22px 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '36px' }}>
          {["DISTRIBUTORS", "BLOGS", "MEDIA", "CAREERS", "ABOUT US", "GRIEVANCE"].map((link) => (
            <a key={link} href="#" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: 'white', textDecoration: 'none' }}>
              {link}
            </a>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
            <a href="#" style={iconBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" style={iconBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
            </a>
            <a href="#" style={iconBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" style={iconBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0d3d4a"/></svg>
            </a>
          </div>
        </div>

        {/* ── Legal Row ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', padding: '18px 0 10px' }}>
          <p style={{ fontSize: '11px', color: '#a8c5cc', letterSpacing: '0.04em' }}>
            © 2026 FINSIRE TECHNOLOGIES PVT. LTD.
          </p>
          <Link to="/terms" onClick={() => window.scrollTo(0, 0)}
            style={{ fontSize: '11.5px', fontWeight: 700, color: 'white', textDecoration: 'none', letterSpacing: '0.06em' }}>
            TERMS & CONDITIONS
          </Link>
          <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}
            style={{ fontSize: '11.5px', fontWeight: 700, color: 'white', textDecoration: 'none', letterSpacing: '0.06em' }}>
            PRIVACY POLICY
          </Link>
          <div style={{ marginLeft: 'auto', border: '1px solid rgba(255,255,255,0.35)', borderRadius: '4px', padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '10px', color: '#a8c5cc', letterSpacing: '0.04em' }}>🔒 ISO 27001:2022</span>
          </div>
        </div>

        {/* ── Address ── */}
        <p style={{ fontSize: '11px', color: '#a8c5cc', paddingBottom: '20px' }}>
          Address: #48, 1st Floor, 2nd Street, Balaji Nagar, Royapettah, Chennai, Tamil Nadu - 600 014
        </p>

        {/* ── Disclaimer ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0 32px' }}>
          <p style={{ fontSize: '10px', color: '#7a9ea8', lineHeight: '1.9', textAlign: 'justify' }}>
            <span style={{ fontWeight: 700, color: '#a8c5cc' }}>Disclaimer:</span> Loan approval and terms are subject to analysis of your mutual fund portfolio and fulfillment of KYC/eligibility criteria. The exact loan-to-value (LTV) offered will depend on the type of mutual funds pledged and may vary (e.g. up to ~50% for equity funds and ~75% for debt funds, as per industry norms and as per a particular lender). Mutual fund investments will be lien-marked in favor of the lender during the tenure of the loan, meaning you cannot redeem or sell those units until the loan is repaid. However, you continue to remain the owner of the funds and enjoy all gains/dividends. Interest rates and other charges will be clearly disclosed in the sanction letter; please read all terms and conditions carefully. Finsire is a technology platform facilitating loans issued by its partner banks/NBFCs – all loans are at the sole discretion of the lending partners. Mutual Funds are subject to market risks; a fall in NAV of pledged funds may require additional collateral or partial repayment (margin call). Make sure to borrow responsibly and have a repayment plan in place to avoid liquidation of your investments.
          </p>
        </div>

      </div>

      {/* ── Watermark ── */}
      <div style={{ overflow: 'hidden', lineHeight: 1, marginTop: '8px' }}>
        <p style={{
          fontSize: 'clamp(80px, 16vw, 180px)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.06)',
          letterSpacing: '0.04em',
          textAlign: 'center',
          margin: 0,
          padding: 0,
          userSelect: 'none',
          lineHeight: 0.85,
        }}>
          FINSIRE
        </p>
      </div>

    </footer>
  );
};

const iconBtn = {
  width: '34px',
  height: '34px',
  borderRadius: '6px',
  border: '1px solid rgba(255,255,255,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
};

export default Footer;
