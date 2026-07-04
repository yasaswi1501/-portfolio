import { certificates } from "../data/portfolioData";

const Certificates = () => {
  return (
    <section className="section" id="certificates">

      <div className="section-title">
        <h2>Certificates</h2>
        <div className="title-line"></div>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>

            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-image"
              />
            )}

            <div className="certificate-content">
              <h3>{cert.title}</h3>

              <p className="issuer">{cert.issuer}</p>

              <p className="date">{cert.date}</p>

              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn"
                >
                  View Certificate
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Certificates;