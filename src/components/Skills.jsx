import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card skill-category">
            <h3>{category}</h3>

            <div className="tags">
              {items.map((skill) => (
                <span key={`${category}-${skill}`}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;