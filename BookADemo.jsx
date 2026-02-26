import React from "react";

const BookADemo = () => {
  return (
    <div className="demo-wrapper">
      <div className="demo-main">

        {/* LEFT */}
        <div className="demo-left">
          <h1>
            Book a Demo <br /> Call with us
          </h1>
          <p>
            Partner with Finsire to experience industry leading digital
            infrastructure for assets. Simply fill out the form and tell us
            about your vision and requirements.
          </p>

          <div className="demo-icons">
            <div className="demo-icons-track">
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
              <div className="icon-circle"></div>
            </div>
          </div>

          <div className="demo-contact">
            <p>CONTACT US: support@finsire.com</p>
            <p>PHONE: +91 7356 820 635</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="demo-form">
          <h4>We will try to contact you as soon as possible!</h4>
          <form onSubmit={e => e.preventDefault()}>
            <label>First Name*</label>
            <input type="text" placeholder="Enter Your First Name" />

            <label>Company Name*</label>
            <input type="text" placeholder="Enter Your Company Name" />

            <label>Email ID*</label>
            <input type="email" placeholder="Enter Your Email Address" />

            <label>Phone Number</label>
            <input type="text" placeholder="Enter Your Phone Number" />

            <button type="submit">Request Access</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default BookADemo;
