import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section className="section">
      <h2>Experience</h2>

      <div className="grid">
        {experience.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.role}</h3>

            <p>
              {item.company} | {item.duration}
            </p>

            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;