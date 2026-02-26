import React, { useState } from "react";
import { motion } from "framer-motion";

const Loan = () => {
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) newErrors.phone = "Enter valid 10-digit phone number";
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(pan)) newErrors.pan = "Enter valid PAN number (ABCDE1234F)";
    if (!agree) newErrors.agree = "You must agree to continue";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) alert("Form Submitted Successfully 🚀");
  };

  return (
    <motion.div
      className="loan-wrapper"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.4 }}
    >
      {/* LEFT */}
      <div className="loan-left">
        <h1>
          Unlock Your Mutual <br />
          Funds, Without Letting <br />
          Them Go.
        </h1>
        <p>
          Get a loan in minutes, keep your funds invested, and watch them grow.
        </p>
      </div>

      {/* RIGHT */}
      <div className="loan-card">
        <h2>Welcome!</h2>
        <p className="subtitle">
          Keep your investments intact while meeting your financial needs.
        </p>

        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>PAN Number</label>
        <input
          type="text"
          placeholder="Enter your PAN number"
          value={pan}
          onChange={(e) => setPan(e.target.value.toUpperCase())}
        />
        {errors.pan && <p className="error">{errors.pan}</p>}

        <div className="checkbox">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <span>
            By continuing, you agree to Finsire collecting your PAN and phone number.
          </span>
        </div>
        {errors.agree && <p className="error">{errors.agree}</p>}

        <button className="signup-btn" onClick={handleSubmit}>
          Sign Up
        </button>

        <p className="login-text">
          Are you already registered? <span>Log in</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Loan;
