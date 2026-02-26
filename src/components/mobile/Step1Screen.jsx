const Step1Screen = () => {
  return (
    <div className="mobile-content">
      <h3>Check Eligibility</h3>
      <p>Enter PAN & mobile number</p>
      <input placeholder="Enter PAN Number" />
      <input placeholder="Enter Mobile Number" />
      <button className="btn-primary">Check Now</button>
    </div>
  );
};

export default Step1Screen;