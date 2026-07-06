import { internships } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Internship Experience</h2>

      <div className="experience-grid">
        {internships.map((internship, index) => (
          <article
            className="experience-card"
            key={`${internship.company}-${internship.role}-${index}`}
          >
            <div className="experience-header">
              <div>
                <h3>{internship.role}</h3>
                <p className="experience-company">
                  {internship.company}
                </p>
              </div>

              <span className="experience-type">
                {internship.type}
              </span>
            </div>

            <div className="experience-meta">
              <span>{internship.duration}</span>
              <span>{internship.location}</span>
            </div>

            <p className="experience-description">
              {internship.description}
            </p>

            {internship.tech && internship.tech.length > 0 && (
              <div className="tags experience-tech">
                {internship.tech.map((technology, techIndex) => (
                  <span key={`${technology}-${techIndex}`}>
                    {technology}
                  </span>
                ))}
              </div>
            )}

            {internship.certificate &&
              internship.certificate !== "#" && (
                <a
                  href={internship.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-btn"
                >
                  View Certificate
                </a>
              )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;