import { whyPledgeData } from "../../data/whyPledgeData";

const WhyPledge = () => {
  return (
    <section className="why-pledge">
      <h2>Why Pledge with Us?</h2>

      <div className="why-grid">
        {whyPledgeData.map((item) => (
          <div key={item.id} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPledge;