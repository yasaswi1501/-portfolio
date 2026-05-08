import { certificates } from "../data/portfolioData";

const Certificates = () => {
  return (
    <section className="section">
      <h2>Certificates</h2>

      <div className="grid">
        {certificates.map((cert, index) => (
          <div className="card" key={index}>
            <h3>{cert.title}</h3>

            <p>{cert.issuer}</p>

            <p>{cert.date}</p>

            <a href={cert.link}>View Certificate</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;