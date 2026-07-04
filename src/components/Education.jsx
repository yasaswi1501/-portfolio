import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="grid">
        {education.map((item) => (
          <article
            className="card education-card"
            key={`${item.college}-${item.degree}`}
          >
            <div className="education-top">
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.college} logo`}
                  className="college-logo"
                  loading="lazy"
                />
              )}

              <div className="education-info">
                <h3>{item.degree}</h3>
                <p>{item.college}</p>
              </div>
            </div>

            <div className="education-details">
              <p className="education-duration">{item.duration}</p>
              <p className="education-score">{item.cgpa}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;