import callImage from "../../assets/images/call.jpg";


export default function CallBanner() {
  return (
    <div className="cb-wrapper">
      <div className="cb-card">
        <div className="cb-content">
          <span className="cb-eyebrow">Learn about LAMF</span>
          <p className="cb-heading">Call us for a 5-minute practical introduction</p>
          <a href="tel:+918645627153" className="cb-btn">
            <svg className="cb-phone-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91 86456 27153
          </a>
        </div>
        <div className="cb-image-wrap">
          <img src={callImage} alt="Support agent" className="cb-image" />
        </div>
      </div>
    </div>
  );
}
