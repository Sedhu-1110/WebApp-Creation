import { useState, useEffect } from "react";
import { ChevronUp, X } from "lucide-react";



const ALL_FAQS = [
  { id: 1, q: "What exactly is a loan against mutual funds?", a: "It's a secured loan where you use your mutual fund units as collateral. You don't sell them; they remain invested, and you keep earning returns while getting instant liquidity." },
  { id: 2, q: "How much can I borrow?", a: "Loan amounts are usually 50%–80% of your mutual fund value, depending on whether it's equity or debt funds. Our eligibility checker will give you an instant figure." },
  { id: 3, q: "Which mutual funds are eligible?", a: "Most equity and debt mutual funds from major AMCs are accepted. We cover 6,000+ schemes through CAMS and KFintech." },
  { id: 4, q: "Is my money safe when I pledge?", a: "Yes. Your units stay in your name. They are just lien-marked digitally with the registrar. Once you repay, the lien is removed, and your funds are free again." },
  { id: 5, q: "How fast will I get the loan?", a: "Approval is instant in most cases, and funds are usually disbursed within a few working hours often on the same day." },
  { id: 6, q: "What's the interest rate?", a: "Our partner lenders offer competitive rates, much lower than personal loans or credit cards. The rate depends on your pledged funds and lender." },
  { id: 7, q: "How do I repay the loan?", a: "Pay interest monthly on the amount you've used. You can repay the principal anytime as there are no prepayment charges." },
  { id: 8, q: "Will this affect my credit score?", a: "Pledging units doesn't affect your score. However, regular repayment helps build a strong credit history." },
];

const PREVIEW_FAQS = ALL_FAQS.slice(0, 4);

function AccordionItem({ item, openId, setOpenId, padded = false }) {
  const isOpen = openId === item.id;
  return (
    <div className="faq-item" style={padded ? {} : {}}>
      <button
        className="faq-trigger"
        style={padded ? { padding: "22px 28px" } : {}}
        onClick={() => setOpenId(isOpen ? null : item.id)}
      >
        <span className="faq-question">{item.q}</span>
        <ChevronUp
          size={18}
          className={`faq-chevron ${isOpen ? "open" : "closed"}`}
        />
      </button>
      <div className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}>
        <p className="faq-answer" style={padded ? { padding: "0 28px 22px" } : {}}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

function Modal({ onClose }) {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="faq-overlay" onClick={onClose}>
      <div className="faq-modal" onClick={e => e.stopPropagation()}>
        <div className="faq-modal-header">
          <span className="faq-modal-title">All FAQs</span>
          <button className="faq-close-btn" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>
        <div className="faq-modal-scroll">
          <div className="faq-list" style={{ borderRadius: 0, boxShadow: "none" }}>
            {ALL_FAQS.map(item => (
              <AccordionItem key={item.id} item={item} openId={openId} setOpenId={setOpenId} padded />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="faq-root">
        <div className="faq-section">
          <p className="faq-eyebrow">Frequently Asked Questions</p>
          <h2 className="faq-title">We've Got Answers</h2>

          <div className="faq-list">
            {PREVIEW_FAQS.map(item => (
              <AccordionItem key={item.id} item={item} openId={openId} setOpenId={setOpenId} />
            ))}
          </div>

          <div className="faq-view-all">
            <button className="faq-view-btn" onClick={() => setShowModal(true)}>
              View all &rsaquo;
            </button>
          </div>
        </div>
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
}
