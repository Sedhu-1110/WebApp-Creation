import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, CheckCircle, Signal, Battery, Wifi } from "lucide-react";

/* ─── Screen 1 ─── */
const Screen1 = ({ onApply }) => {
  const lenders = [
    { id: 1, name: "Suryoday Bank",    rate: "10.50%", bg: "#FF9933", tag: "Term Loan"      },
    { id: 2, name: "City Union Bank",  rate: "10.50%", bg: "#2E3192", tag: "Overdraft Loan" },
    { id: 3, name: "Karur Vysya Bank", rate: "10.50%", bg: "#1D9144", tag: "Overdraft Loan" },
    { id: 4, name: "Bajaj Finance",    rate: "10.50%", bg: "#007AFF", tag: "Overdraft Loan" },
  ];
  return (
    <div className="phone-screen-inner">
      <div className="portfolio-header">
        <div className="p-label">Total Portfolio Holdings (across 5 folios)</div>
        <div className="p-value">
          ₹ 3,00,000.00 <ChevronDown size={13} />
          <span className="view-mf">View MF Details</span>
        </div>
      </div>
      <h4 className="screen-title-small">Choose Lender</h4>
      <div className="lender-stack">
        {lenders.map((l) => (
          <div key={l.id} className="lender-card-mock" style={{ borderTop: `5px solid ${l.bg}` }}>
            <div className="l-top">
              <div>
                <div className="l-name">{l.name}</div>
                <span className="l-tag">{l.tag}</span>
              </div>
              <div className="l-rate-wrap">
                <div className="rate-val">{l.rate}</div>
                <div className="rate-lab">Interest rate</div>
              </div>
            </div>
            <div className="l-details">
              <span>Eligible Amount ₹50,000</span>
              <span>Processing Fee ₹999+GST</span>
            </div>
            <div className="l-footer">
              <span className="limit-text">✅ Up to ₹5Cr Limit on Loan</span>
              <button className="apply-now-btn" onClick={onApply}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Screen 2 ─── */
const Screen2 = ({ onConfirm }) => (
  <div className="phone-screen-inner">
    <div className="loan-amt-card">
      <div className="p-label">Loan Amount</div>
      <div className="loan-big-val">₹ 31,500.00</div>
      <div className="loan-sub">You will get ₹ 30,700 in your account <span className="view-mf">View details</span></div>
    </div>
    <div className="tenure-modal-mock">
      <h4 className="screen-title-small">Select Loan Tenure</h4>
      <div className="info-box-yellow">Once you select and confirm the loan tenure, it cannot be changed.</div>
      {[{m:3,emi:"₹11,550.00"},{m:6,emi:"₹5,775.00"},{m:9,emi:"₹3,850.00"},{m:12,emi:"₹2,887.50"}].map((t) => (
        <div key={t.m} className="tenure-option">
          <div className="radio-circle" />
          <span className="t-months">{t.m} months @10% p.a.</span>
          <span className="t-emi">EMI: {t.emi}</span>
        </div>
      ))}
      <button className="confirm-btn" onClick={onConfirm}>Confirm &amp; Proceed</button>
    </div>
  </div>
);

/* ─── Screen 3 ─── */
const Screen3 = () => (
  <div className="phone-screen-inner success-center">
    <div className="success-icon-wrap"><CheckCircle size={72} color="#22c55e" fill="#f0fdf4" /></div>
    <h3 className="success-title">Your loan has been sanctioned!</h3>
    <p className="success-desc">Loan amount of ₹30,500 will be disbursed within 2 to 3 hours.</p>
    <div className="summary-box">
      <div className="summary-header">Summary Details</div>
      <div className="summary-row"><span>Loan Value (LTV: 50%)</span><span>₹ 31,500</span></div>
      <div className="summary-row"><span>Processing Fees</span><span className="red-text">− ₹ 1,000</span></div>
      <div className="summary-row total"><span>Disbursal Amount</span><span>₹ 30,500</span></div>
    </div>
  </div>
);

/* ─── Main ─── */
const Steps = () => {
  const [activeStep, setActiveStep]   = useState(1);
  const [phoneStyle, setPhoneStyle]   = useState({});
  const sectionRef  = useRef(null);
  const phoneRef    = useRef(null);
  const stepRefs    = useRef([]);

  /* ── Scroll spy for step switching ── */
  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveStep(i + 1); },
        { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  /* ── JS-driven sticky phone ──
     Using scroll listener instead of CSS sticky because overflow:hidden
     on any ancestor silently breaks CSS sticky.
     Logic:
       - Before section: phone sits at its natural top position
       - Inside section: phone is fixed in center of viewport
       - After section:  phone is pinned to bottom of section
  ── */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const phone   = phoneRef.current;
      if (!section || !phone) return;

      const sectionRect  = section.getBoundingClientRect();
      const phoneHeight  = phone.offsetHeight;
      const viewportH    = window.innerHeight;

      // vertical center offset: so phone appears in the middle of the screen
      const centeredTop  = (viewportH - phoneHeight) / 2;

      if (sectionRect.top > centeredTop) {
        // Phone hasn't reached center yet — sit naturally
        setPhoneStyle({ position: "relative", top: "auto", right: "auto" });
      } else if (sectionRect.bottom < centeredTop + phoneHeight) {
        // Section is ending — pin phone to the bottom of section
        setPhoneStyle({
          position: "absolute",
          bottom: 0,
          top: "auto",
          right: 0,
        });
      } else {
        // Inside section — fix phone in center of viewport
        setPhoneStyle({
          position: "fixed",
          top: centeredTop,
          right: `calc(6% + (100vw - ${section.offsetWidth + section.offsetLeft * 2}px) / 2)`,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stepsData = [
    { n: 1, label: "STEP 1/3", title: "Apply and check eligibility",
      desc: "Your mutual funds remain invested, so you keep earning returns while accessing cash." },
    { n: 2, label: "STEP 2/3", title: "Pledge Your Funds",
      desc: "Digitally pledge your mutual funds or shares securely through CAMS/KFintech. No physical paperwork required." },
    { n: 3, label: "STEP 3/3", title: "Get instant disbursal",
      desc: "The loan is approved within minutes and credited directly to your bank account, available 24x7." },
  ];

  return (
    <section className="steps-container" ref={sectionRef}>
      <div className="steps-heading">
        <p className="steps-eyebrow">HOW IT WORKS</p>
        <h2 className="steps-main-title">From Portfolio to Cash in Just 3 Steps</h2>
      </div>

      {/* Two column layout — left scrolls, right is JS-pinned */}
      <div className="steps-content-wrapper">

        {/* LEFT: step text — normal scroll flow */}
        <div className="steps-text-list">
          {stepsData.map((s, i) => (
            <div
              key={s.n}
              className={`step-nav-item ${activeStep === s.n ? "active" : ""}`}
              ref={(el) => (stepRefs.current[i] = el)}
              onClick={() => setActiveStep(s.n)}
            >
              <span className="step-count">{s.label}</span>
              <h2 className="step-title">{s.title}</h2>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT: phone — JS sticky */}
        <div className="phone-col">
          <div className="phone-container" ref={phoneRef} style={phoneStyle}>
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-status-bar">
                <span>9:41</span>
                <div className="status-icons">
                  <Signal size={11} /><Wifi size={11} /><Battery size={11} />
                </div>
              </div>
              <div className="phone-dynamic-content">
                {activeStep === 1 && <Screen1 onApply={() => setActiveStep(2)} />}
                {activeStep === 2 && <Screen2 onConfirm={() => setActiveStep(3)} />}
                {activeStep === 3 && <Screen3 />}
              </div>
              <div className="phone-home-bar" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Steps;
